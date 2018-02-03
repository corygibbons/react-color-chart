import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: ${props => props.justify};
  margin-bottom: ${props => (props.heading ? '48px' : 0)};
`;
