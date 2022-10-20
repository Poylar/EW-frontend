export const breakpoints = {
  full: 1920,
  xxl: 1440,
  xl: 1200,
  lg: 992,
  md: 768,
  sm: 576,
  xs: 340,
};

/**
 *
 * @param {breakpoints.key} breakpointsSize
 * @param {string max-width || min-width} minmax
 * @return boolean
 */

export default function media(breakpointsSize, minmax = "max-width") {
  return window.matchMedia(`(${minmax}: ${breakpointsSize}px)`).matches;
}
