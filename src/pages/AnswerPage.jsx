import styled from 'styled-components';

import Avatar from '../components/Avatar';
import Text from '../components/Text';
import Row from '../components/Row';

export default function AnswerPage() {
  return (
    <Container>
      <Header>
        <Logo src="/assets/images/QuestionFeedLogo.svg" alt="logo" />
        <Avatar imgUrl="/assets/images/ProfileImg.png" size="xLarge" />
        <Text typhography="h2" as="h2">
          고양이는 아초
        </Text>
        <Row gap={12}>
          <button type="button" aria-label="share">
            <img src="/assets/images/Share.svg" alt="share" />
          </button>
          <button type="button" aria-label="share-kakao">
            <img src="/assets/images/Kakaotalk.svg" alt="share-kakao" />
          </button>
          <button type="button" aria-label="share-facebook">
            <img src="/assets/images/Facebook.svg" alt="share-facebook" />
          </button>
        </Row>
      </Header>
    </Container>
  );
}

const Container = styled.main`
  width: 100%;
  height: 100vh;
`;

const Header = styled.header`
  background-image: url('/assets/images/QuestionFeedHead.svg');
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding-top: 50px;
`;

const Logo = styled.img`
  width: 170px;
  height: 67px;
`;
