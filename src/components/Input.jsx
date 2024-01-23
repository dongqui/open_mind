import { styled } from 'styled-components';

export default function Input({ prefix, ...rest }) {
  return (
    <S.InputWrapper>
      {prefix}
      <S.InputStyle {...rest} />
    </S.InputWrapper>
  );
}
const InputWrapper = styled.div`
  width: 100%;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 8px;
  border: 1px solid var(--Grayscale-40, #818181);
  background: var(--Grayscale-10, #fff);
`;

const InputStyle = styled.input`
  color: var(--grayscale-40);
  width: 100%;
  border-style: none;
  &:focus {
    border-style: none;
    outline: none;
  }
`;

const S = {
  InputStyle,
  InputWrapper,
};
