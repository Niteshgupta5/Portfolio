/// <reference types="vite/client" />

// Declare CSS side-effect imports so TypeScript doesn't flag them as missing
declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}
