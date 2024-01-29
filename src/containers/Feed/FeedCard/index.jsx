import styled from 'styled-components';

import Hr from '../../../components/Hr';
import Column from '../../../components/Column';
import Text from '../../../components/Text';
import Badge from '../../../components/Badge';
import ReactionButtons from './ReactionButtons';
import { weeksAgoFormat } from '../../../utils/timeFormat';

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

function FeedBadge({ hasAnswer }) {
  return <Badge color={hasAnswer ? 'brown' : 'gray'}>{hasAnswer ? '답변 완료' : '미답변'}</Badge>;
}

function FeedFooter({ likeCount, disLikeCount }) {
  return (
    <>
      <Hr />
      <ReactionButtons likeCount={likeCount} disLikeCount={disLikeCount} />
    </>
  );
}

FeedCard.Question = Question;
FeedCard.Badge = FeedBadge;
FeedCard.Footer = FeedFooter;

export default FeedCard;
