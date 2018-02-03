import styled from 'styled-components';
import is from 'styled-is';

export default styled.div`
  padding: 16px;
  font-family: monospace;
  font-size: 12px;
  color: ${props => props.color};
  background-color: ${props => props.bg};
  -webkit-font-smoothing: antialiased;

  ${is('onClick')`
    cursor: pointer;
  `};
`;
