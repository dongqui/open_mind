import styled from 'styled-components';

import { TYPHOGRAPYS } from '../constants';

const Typhography = styled.span`
  ${(props) => props.$typhography};
`;

export default function Text({ as = 'span', children, typhography }) {
  const $typhography = TYPHOGRAPYS[typhography];
  return (
    <Typhography as={as} $typhography={$typhography}>
      {children}
    </Typhography>
  );
}
