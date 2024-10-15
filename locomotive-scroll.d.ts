declare module 'locomotive-scroll' {
  interface LocomotiveScrollOptions {
    el: Element;
    smooth?: boolean;
    multiplier?: number;
    class?: string;
    smartphone?: {
      smooth?: boolean;
    };
    tablet?: {
      smooth?: boolean;
    };
    laptop?: {
      smooth?: boolean;
    };
  }

  class LocomotiveScroll {
    constructor(options: LocomotiveScrollOptions);
    update(): void;
    destroy(): void;
  }

  export default LocomotiveScroll;
}
