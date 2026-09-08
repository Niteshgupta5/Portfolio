import { Tech } from "@/types";
import { AiOutlineApi } from "react-icons/ai";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaAws, FaDocker, FaGithub, FaInfinity, FaJs, FaNode, FaReact } from "react-icons/fa";
import { HiOutlineCubeTransparent } from "react-icons/hi";
import { RiNextjsFill, RiRobot3Fill, RiTailwindCssFill } from "react-icons/ri";
import { SiElectron, SiExpress, SiMongodb, SiNestjs, SiRabbitmq, SiRedux, SiSocketdotio, SiTypescript } from "react-icons/si";

export const techStack: Tech[] = [
  { name: 'React.js', icon: FaReact, color: 'text-[#61DAFB]', glow: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-[#3178C6]', glow: '#3178C6' },
  { name: 'JavaScript', icon: FaJs, color: 'text-[#F7DF1E]', glow: '#F7DF1E' },
  { name: 'Tailwind CSS', icon: RiTailwindCssFill, color: 'text-[#38BDF8]', glow: '#38BDF8' },
  { name: 'Next.js', icon: RiNextjsFill, color: 'text-[#ffffff]', glow: '#ffffff' },
  { name: 'Redux', icon: SiRedux, color: 'text-purple-400', glow: '#c27aff' },
  { name: 'Node.js', icon: FaNode, color: 'text-[#68A063]', glow: '#68A063' },
  { name: 'Express.js', icon: SiExpress, color: 'text-[#cbd5e1]', glow: '#cbd5e1' },
  { name: 'Electron.js', icon: SiElectron, color: 'text-[#3776AB]', glow: '#3776AB' },
  { name: 'Nest.js', icon: SiNestjs, color: 'text-rose-600', glow: '#ec003f' },
  { name: 'Rest APIs', icon: AiOutlineApi, color: 'text-[#ffffff]', glow: '#ffffff' },
  { name: 'Microservices', icon: HiOutlineCubeTransparent, color: 'text-[#ffffff]', glow: '#ffffff' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-[#47A248]', glow: '#47A248' },
  { name: 'PostgreSQL', icon: BiLogoPostgresql, color: 'text-[#336791]', glow: '#336791' },
  { name: 'Git/GitHub', icon: FaGithub, color: 'text-[#F05032]', glow: '#F05032' },
  { name: 'Docker', icon: FaDocker, color: 'text-[#2496ED]', glow: '#2496ED' },
  { name: 'CI/CD', icon: FaInfinity, color: 'text-[#ffffff]', glow: '#ffffff' },
  { name: 'AWS', icon: FaAws, color: 'text-[#FF9900]', glow: '#FF9900' },
  { name: 'Rabbit MQ', icon: SiRabbitmq, color: 'text-orange-500', glow: '#ff6900' },
  { name: 'Web Sockets', icon: SiSocketdotio, color: 'text-[#ffffff]', glow: '#ffffff' },
  { name: 'AI/LLM', icon: RiRobot3Fill, color: 'text-[#ffffff]', glow: '#ffffff' },
];