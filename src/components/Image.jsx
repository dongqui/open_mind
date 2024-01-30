import styled from "styled-components"

export default function Image({ width, height, ...rest}) {
  return (
    <Wrapper $width={width} $height={height}>
      <Img   {...rest}/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: ${props => props.$width}px;
  height: ${props => props.$height}px;
`;

const Img = styled.img`
  width: 100%;
`

