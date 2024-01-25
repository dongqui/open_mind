import styled from 'styled-components';

import { AVATAR_SIZES } from '../constants';

export default function Avatar({ imgUrl, size }) {
  const $size = AVATAR_SIZES[size];
  return (
    <Wrapper $size={$size}>
      <img src={imgUrl} alt="profile img" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-radius: 50%;
  overflow: hidden;
  ${(props) => props.$size};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
