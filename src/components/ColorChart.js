import React from 'react';
import PropTypes from 'prop-types';

import Swatch from './Swatch';

const propTypes = {
  /**
   * Array of color swatches to render
   */
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      heading: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    }).isRequired
  ),
  /**
   * Overwrite the font color of headings.
   * @param {object} swatch The swatch object
   */
  headingColor: PropTypes.func,
  /**
   * Overwrite the font color of the label and value string. By default the font color will be a semi-transparent white on 'dark' colors and a semi-transparent black on 'light' colors.
   * @param {object} swatch The swatch object
   */
  fontColor: PropTypes.func,
  /**
   * Heading to render inside swatch. If not set it will try to use `swatch.heading` by default.
   * @param {object} swatch The swatch object
   */
  heading: PropTypes.func,
  /**
   * Label to render inside the swatch. If not set it will try to use `swatch.label` by default.
   * @param {object} swatch The swatch object
   */
  label: PropTypes.func,
  /**
   * Label to render inside the swatch. If not set it will try to use `swatch.color` by default.
   * @param {object} swatch The swatch object
   */
  value: PropTypes.func
};

export const ColorChart = ({
  colors,
  fontColor,
  heading,
  headingColor,
  label,
  onClick,
  value
}) => {
  const swatches = colors.map((s, i) => {
    return (
      <Swatch
        swatch={s}
        fontColor={fontColor ? () => fontColor(s) : null}
        heading={heading ? () => heading(s) : null}
        headingColor={headingColor ? () => headingColor(s) : null}
        label={label ? () => label(s) : null}
        onClick={onClick ? () => onClick(s) : null}
        value={value ? () => value(s) : null}
        key={i}
      />
    );
  });

  return <div>{swatches}</div>;
};

ColorChart.propTypes = propTypes;
export default ColorChart;
