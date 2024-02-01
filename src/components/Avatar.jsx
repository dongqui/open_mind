import styled from 'styled-components';

export default function Avatar({ imgUrl, size }) {
  return (
    <Wrapper $size={size}>
      <img src={imgUrl} alt="profile img" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  background-color: var(--Grayscale-40);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
