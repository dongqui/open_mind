import styled from 'styled-components';

import Row from '../Row';
import Column from '../Column'
import Badge from '../Badge'
import Text from '../Text';
import Avatar from '../Avatar';
import Hr from '../Hr';

export default function FeedContainer() {

  return (
    <S.Container>
      <Row $gap={8}>
        <img src="/assets/images/message-icon.svg" alt="message-icon" />
        <Text typhography="body-1-bold">{3}개의 질문이 있습니다</Text>
      </Row>      
      <Card>
        <Badge color="brown">답변 완료</Badge>
        <Column>
          <Text color="gray40" typhography="caption-1-m">질문 · 2주전</Text>
          <Text typhography="body-2-bold">좋아하는 동물은?좋아하는 동물은?좋아하는 동물은? 좋아하동 물은?</Text>          
        </Column>

        <Row $gap={12} $alignItems="start">
          <Avatar imgUrl="/assets/images/ProfileImg.png" size={32}/>
          <Column $gap={4}>
            <Row $gap={8}>
              <Text typhography="body-2-bold">아초는 고양이</Text>
              <Text color="gray40" typhography="caption-1-m">2주전</Text>
            </Row>
            <Text typhography="body-2-bold">
              그들을 불러 귀는 이상의 오직 피고, 가슴이 이상, 못할 봄바람이다. 찾아다녀도, 전인 방황하였으며, 대한 바이며, 이것이야말로 가치를 청춘의 따뜻한 그리하였는가? 몸이 열락의 청춘의 때문이다. 천고에 피어나는 간에 밝은 이상, 인생의 만물은 피다. 대중을 이성은 방황하여도, 그리하였는가? 크고 평화스러운 품에 방황하였으며, 말이다. 이상은 들어 예수는 크고 긴지라 역사를 피다. 얼음에 있음으로써 꽃 보배를 곧 가는 교향악이다. 우는 새 예가 우리의 것은 피다. 피가 그것을 어디 앞이 기쁘며, 이상의 열락의 위하여서 끝까지 것이다. 있는 봄바람을 방황하여도, 우리의 것은 작고 아니한 영원히 듣기만 운다.
            </Text>            
          </Column>
        </Row>

        <Hr/>

        <Row $gap={32}>
          <button>좋아요</button>
          <button>싫어요</button>
        </Row>
      </Card>
      
    </S.Container>
  );
}


const Card = styled.div`
  display: flex;
  width: 100%;

  flex-direction: column;
  align-items: flex-start;
  padding: 2.4rem;
  gap: 2.4rem;

  border-radius: 1.6rem;
  background-color: var(--Grayscale-10);
  box-shadow: var(--shadow-1pt);

  @media (min-width: 768px) {
    padding: 3.2rem;
    gap: 3.2rem;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  width: 327px;
  padding: 1.6rem;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  border-radius: 1.6rem;
  border: 1px solid var(--Brown-30);
  background-color: var( --Brown-10);

  @media (min-width: 768px) {
    width: 704px;
  }
`;

// 스타일
const S = {
  Container,
};
