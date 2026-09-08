import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // After the guard above, canvas is definitely non-null.
    // We use a typed alias so nested functions keep the narrowing.
    const safeCanvas: HTMLCanvasElement = canvas;

    const ctx = safeCanvas.getContext('2d');
    if (!ctx) return;

    const newCtx: CanvasRenderingContext2D = ctx;

    let animationId: number;
    const particles: Particle[] = [];
    const maxParticles = 80;
    const connectionDistance = 150;
    const mouse = { x: -1000, y: -1000 };

    function resize() {
      const parent = safeCanvas.parentElement;
      if (!parent) return;
      safeCanvas.width = parent.offsetWidth;
      safeCanvas.height = parent.offsetHeight;
    }

    function createParticles() {
      particles.length = 0;
      for (let i = 0; i < maxParticles; i++) {
        particles.push({
          x: Math.random() * safeCanvas.width,
          y: Math.random() * safeCanvas.height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    }

    function draw() {
      newCtx.clearRect(0, 0, safeCanvas.width, safeCanvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > safeCanvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > safeCanvas.height) p.vy *= -1;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          const force = (200 - dist) / 200;
          p.vx -= (dx / dist) * force * 0.02;
          p.vy -= (dy / dist) * force * 0.02;
        }

        newCtx.beginPath();
        newCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        newCtx.fillStyle = `rgba(249, 115, 22, ${p.opacity})`;
        newCtx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const pdx = p.x - p2.x;
          const pdy = p.y - p2.y;
          const pdist = Math.sqrt(pdx * pdx + pdy * pdy);

          if (pdist < connectionDistance) {
            newCtx.beginPath();
            newCtx.moveTo(p.x, p.y);
            newCtx.lineTo(p2.x, p2.y);
            newCtx.strokeStyle = `rgba(249, 115, 22, ${0.12 * (1 - pdist / connectionDistance)})`;
            newCtx.lineWidth = 1;
            newCtx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    }

    function handleMouseMove(e: MouseEvent) {
      const rect = safeCanvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }

    function handleMouseLeave() {
      mouse.x = -1000;
      mouse.y = -1000;
    }

    resize();
    createParticles();
    draw();

    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ opacity: 0.7 }}
    />
  );
}