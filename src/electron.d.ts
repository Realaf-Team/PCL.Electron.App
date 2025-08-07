// src/types/electron.d.ts
declare global {
  interface Window {
    electron?: {
      minimize: () => void
      close: () => void
      toggleMaximize: () => void
      shell?: {
        openExternal: (url: string) => void
      }
    }
    process?: NodeJS.Process
  }
}

export {}