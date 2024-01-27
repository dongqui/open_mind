import styled from 'styled-components';

import { TYPHOGRAPYS, COLORS } from '../constants';

const Typhography = styled.span`
  ${(props) => props.$typhography};
  color: ${(props) => props.$color};
`;

export default function Text({ as = 'span', children, typhography, color }) {
  const $typhography = TYPHOGRAPYS[typhography];
  const $color = COLORS[color];
  return (
    <Typhography as={as} $typhography={$typhography} $color={$color}>
      {children}
    </Typhography>
  );
}
