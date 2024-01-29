import styled from 'styled-components';

import { useSubject } from 'hooks/useSubject';
import Hr from 'components/Hr';
import Column from 'components/Column';
import Text from 'components/Text';
import Badge from 'components/Badge';
import ReactionButtons from './ReactionButtons';
import { weeksAgoFormat } from 'utils/timeFormat';

const FeedCard = styled.div`
  display: flex;
  width: 100%;

  flex-direction: column;
  align-items: flex-start;
  padding: 2.4rem;
  gap: 2.4rem;

  border-radius: 1.6rem;
  background-color: var(--Grayscale-10);
  box-shadow: var(--shadow-1pt);
`;

function FeedBadge({ hasAnswer }) {
  return <Badge color={hasAnswer ? 'brown' : 'gray'}>{hasAnswer ? '답변 완료' : '미답변'}</Badge>;
}

function Question({ content, createdAt }) {
  return (
    <Column>
      <Text color="gray40" typhography="caption-1-m">
        질문 · {weeksAgoFormat(createdAt)}
      </Text>
      <Text typhography="body-2-bold">{content}</Text>
    </Column>
  );
}

function Answer({ content }) {
  const [subject] = useSubject();
  return (
    <Row $gap={12} $alignItems="start">
      <Avatar imgUrl={subject?.imageSource} size={32} />
      <Column $gap={4}>
        <Row $gap={8}>
          <Text typhography="body-2-bold">{subject?.name}</Text>
          <Text color="gray40" typhography="caption-1-m">
            2주전
          </Text>
        </Row>
        <Text typhography="body-2-bold">{content}</Text>
      </Column>
    </Row>
  );
}

function FeedFooter({ likeCount, disLikeCount }) {
  return (
    <>
      <Hr />
      <ReactionButtons likeCount={likeCount} disLikeCount={disLikeCount} />
    </>
  );
}

FeedCard.Badge = FeedBadge;
FeedCard.Question = Question;
FeedCard.Answer = Answer;
FeedCard.Footer = FeedFooter;

export default FeedCard;
