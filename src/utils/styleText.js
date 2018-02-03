import tinycolor from 'tinycolor2';

export const styleText = (color, opacity) => {
  const c = tinycolor(color);
  return c.isDark()
    ? tinycolor('white')
        .setAlpha(opacity || 0.5)
        .toString()
    : tinycolor('black')
        .setAlpha(opacity || 0.5)
        .toString();
};

export default styleText;
