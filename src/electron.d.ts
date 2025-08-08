// src/electron.d.ts
declare global {
  interface Window {
    electron?: {
      minimize: () => void;
      close: () => void;
      toggleMaximize: () => void;
      shell?: {
        openExternal: (url: string) => void;
      };
    };

    // 修正：process 应该是 Electron 的 process 类型
    process?: NodeJS.Process & {
      type?: 'renderer' | 'browser'; // Electron 特有
    };
  }
}

export {};