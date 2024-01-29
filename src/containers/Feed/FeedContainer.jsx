import styled from 'styled-components';

import Row from 'components/Row';
import Text from 'components/Text';
import QuestionFeed from './QuestionFeed';
import AnswerFeed from './AnswerFeed.jsx';
import { useQuestionsOnInfiniteScroll } from 'hooks/questionsHooks';

export default function FeedContainer({ subjectId, feedType }) {
  const { bottomRef, questions } = useQuestionsOnInfiniteScroll(subjectId);

  const FeedComponent = feedType === 'question' ? QuestionFeed : AnswerFeed;
  return (
    <Container>
      <Row $gap={8}>
        <img src="/assets/images/message-icon.svg" alt="message-icon" />
        <Text typhography="body-1-bold">{questions?.length}개의 질문이 있습니다</Text>
      </Row>
      {questions?.map((question) => (
        <FeedComponent key={question.id} question={question} />
      ))}
      <div ref={bottomRef} />
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 704px;
  width: 100%;
  padding: 1.6rem;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  border-radius: 1.6rem;
  border: 1px solid var(--Brown-30);
  background-color: var(--Brown-10);
`;
