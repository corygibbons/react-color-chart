import React from 'react';
import PropTypes from 'prop-types';

import { styleText } from '../utils/index';
import { StyledBox, StyledRow, StyledSwatch } from './styled/index';

const propTypes = {
  fontColor: PropTypes.func,
  heading: PropTypes.func,
  headingColor: PropTypes.func,
  swatch: PropTypes.shape({
    color: PropTypes.string.isRequired,
    heading: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }).isRequired,
  label: PropTypes.func,
  value: PropTypes.func
};

export const Swatch = ({
  fontColor,
  heading,
  headingColor,
  swatch,
  label,
  onClick,
  value
}) => {
  const labelMarkup = label ? label(swatch) : swatch.label;
  const headingMarkup = heading ? heading(swatch) : swatch.heading;
  const valueMarkup = value ? value(swatch) : swatch.color;

  return (
    <StyledSwatch
      bg={swatch.color}
      color={fontColor ? fontColor(swatch) : styleText(swatch.color)}
      onClick={onClick ? () => onClick(swatch) : null}
    >
      {headingMarkup ? (
        <React.Fragment>
          <StyledRow justify="space-between" heading>
            <StyledBox
              color={
                headingColor ? headingColor(swatch) : styleText(swatch.color, 1)
              }
            >
              {headingMarkup}
            </StyledBox>
            <div>{valueMarkup}</div>
          </StyledRow>
          <div>{labelMarkup}</div>
        </React.Fragment>
      ) : (
        <StyledRow justify="space-between">
          <div>{labelMarkup}</div>
          <div>{valueMarkup}</div>
        </StyledRow>
      )}
    </StyledSwatch>
  );
};

Swatch.propTypes = propTypes;
export default Swatch;
