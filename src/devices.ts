export enum Breakpoint {
  mobile = "mobile",
  tablet = "tablet",
  laptop = "laptop",
}

export const DeviceSizes: { [key in keyof typeof Breakpoint]: number } = {
  [Breakpoint.mobile]: 360,
  [Breakpoint.tablet]: 768,
  [Breakpoint.laptop]: 1024,
};

export const MediaQuery: { [key in keyof typeof Breakpoint]: string } = {
  [Breakpoint.mobile]: `(min-width: ${
    DeviceSizes[Breakpoint.mobile]
  }px) and (max-width: ${DeviceSizes[Breakpoint.tablet]}px)`,
  [Breakpoint.tablet]: `(min-width: ${
    DeviceSizes[Breakpoint.tablet]
  }px) and (max-width: ${DeviceSizes[Breakpoint.laptop]}px)`,
  [Breakpoint.laptop]: `(min-width: ${DeviceSizes[Breakpoint.laptop]}px)`,
};
