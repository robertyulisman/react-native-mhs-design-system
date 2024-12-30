import { SIZE } from '../design-system';

export const getOrientation = () => {
  const { width, height } = SIZE;
  let width_screen = 0;
  let height_screen = 0;

  if (width > height) {
    width_screen = height;
    height_screen = width;
  }
  if (width < height) {
    width_screen = width;
    height_screen = height;
  }

  return { width_screen, height_screen };
};
