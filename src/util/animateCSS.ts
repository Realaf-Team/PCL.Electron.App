// 需要在 main.ts 中 import 'animate.css'
export const animateCss = (node: HTMLElement, animation: string, prefix = 'animate__') =>
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;

    node.classList.add(`${prefix}animated`, animationName);

    function handleAnimationEnd(event: AnimationEvent) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, { once: true });
  });


export const animateCssFor = (elements: NodeListOf<Element> | HTMLCollection | HTMLElement[], animation: string, delayStep = 20, prefix = 'animate__') => {
  const animationPromises = Array.from(elements).map((node, index) => {
    return new Promise<void>((resolve) => {
      const animationName = `${prefix}${animation}`;
      const element = node as HTMLElement;

      // 确保之前的动画类已被移除
      element.classList.remove(`${prefix}animated`, animationName);

      // 使用 requestAnimationFrame 确保在下一帧添加类
      requestAnimationFrame(() => {
        element.classList.add(`${prefix}animated`, animationName);
        element.style.animationDelay = `${index * delayStep}ms`;

        const handleAnimationEnd = (event: AnimationEvent): void => {
          event.stopPropagation();
          setTimeout(() => {
            element.classList.remove(`${prefix}animated`, animationName);
            element.style.animationDelay = '';
            resolve();
          }, delayStep);
        };

        element.addEventListener('animationend', handleAnimationEnd, { once: true });
      });
    });
  });

  return Promise.all(animationPromises);
};