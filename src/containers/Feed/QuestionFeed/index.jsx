import FeedCard from '../FeedCard';
import Answer from '../Answer';

export default function QuestionFeed({ question }) {
  return (
    <FeedCard>
      <FeedCard.Badge hasAnswer={question.answer} />
      <FeedCard.Question content={question.content} createdAt={question.createdAt} />
      {question.answer && <Answer content={question.answer.content} />}
      <FeedCard.Footer likeCount={question.like} disLikeCount={question.disLike} />
    </FeedCard>
  );
}
