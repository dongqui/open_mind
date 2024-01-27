import styled from 'styled-components';

import { BUTTON_SIZES } from '../../constants';
import BoxButton from './BoxButtonStyle';

export default function FilledButton({ size = 'medium', children, prefix, suffix, fulled }) {
  const $size = BUTTON_SIZES[size];

  return (
    <Button $size={$size} $fulled={fulled}>
      {prefix}
      {children}
      {suffix}
    </Button>
  );
}

const Button = styled(BoxButton)`
  background: var(--Brown-40, #542f1a);
  color: var(--Grayscale-10, #fff);

  &:hover {
    border: 2px solid var(--Brown-50, #341909);
  }

  &:active {
    background: var(--Brown-50, #341909);
  }

  &:disabled {
    background: var(--Brown-30, #c7bbb5);
  }
`;
