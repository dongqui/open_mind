import styled from 'styled-components';

const Badge = styled.div`
  display: inline-flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: var(--Grayscale-10, #fff);

  color: ${(props) => (props.color === 'brown' ? 'var(--Brown-40)' : 'var(--Grayscale-40)')};
  border: 1px solid ${(props) => (props.color === 'brown' ? 'var(--Brown-40)' : 'var(--Grayscale-40)')};
`;

export default Badge;
