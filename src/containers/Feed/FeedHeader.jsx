import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Avatar from 'components/Avatar';
import Text from 'components/Text';
import Row from 'components/Row';

export default function FeedHeader({ subjectName, subjectImage }) {
  return (
    <Header>
      <Link to="/list">
        <img src="/assets/images/QuestionFeedLogo.svg" alt="logo" />
      </Link>
      <Avatar imgUrl={subjectImage} size={136} />
      <Text typhography="h2" as="h2">
        {subjectName}
      </Text>
      <Row $gap={12}>
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
  );
}

const Header = styled.header`
  background-image: url('/assets/images/QuestionFeedHead.svg');
  background-repeat: no-repeat;
  background-position: top;
  background-size: 100% 100;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding-top: 50px;
`;
