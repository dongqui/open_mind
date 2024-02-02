import Row from 'components/Row';
import AnswerDropdown from 'containers/Dropdowns/AnswerDropdwon';
import useEditingAnswerId from 'hooks/useEditingAnswerId';
import FeedCard from '../FeedCard';
import AnswerForm from './AnswerForm';

export default function AnswerFeed({ question }) {
  const [editingId] = useEditingAnswerId();
  const showAnswerForm = question?.answer === null || question?.answer?.id === editingId;

  return (
    <FeedCard>
      <Row $justifyContent="space-between" $fulled>
        <FeedCard.Badge hasAnswer={question.answer} />
        <AnswerDropdown questionId={question.id} answerId={question?.answer?.id} />
      </Row>
      <FeedCard.Question content={question.content} createdAt={question.createdAt} />
      {showAnswerForm ? (
        <AnswerForm previousContent={question?.answer?.content} questionId={question.id} answerId={question?.answer?.id} />
      ) : (
        <FeedCard.Answer content={question?.answer?.content} isRejected={question?.answer?.isRejected} />
      )}
      <FeedCard.Footer likeCount={question.like} dislikeCount={question.dislike} questionId={question.id} />
    </FeedCard>
  );
}
