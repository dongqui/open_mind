import styled from 'styled-components';

import { BUTTON_SIZES } from '../../constants';
import BoxButton from './BoxButtonStyle';

export default function FilledButton({ fulled, size = 'medium', children, prefix, suffix }) {
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
  border: 1px solid var(--Brown-40, #542f1a);
  background: var(--Brown-10, #f5f1ee);

  &:hover {
    border: 2px solid var(--Brown-40, #542f1a);
    background: var(--Brown-10, #f5f1ee);
  }

  &:active {
    border: 2px solid var(--Brown-40, #542f1a);
    background: var(--Brown-20, #e4d5c9);
  }

  &:disabled {
    border: 1px solid var(--Brown-30, #c7bbb5);
    background: var(--Brown-10, #f5f1ee);
  }
`;
