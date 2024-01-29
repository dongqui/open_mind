import Row from 'components/Row';
import AnswerDropdown from 'containers/Dropdowns/AnswerDropdwon';
import useEditingAnswerId from 'hooks/useEditingAnswerId';
import FeedCard from '../FeedCard';
import Answer from '../Answer';
import AnswerForm from './AnswerForm';

export default function AnswerFeed({ question }) {
  const [editingId] = useEditingAnswerId();
  const showAnswerForm = !question.answer || editingId === question.id;

  return (
    <FeedCard>
      <Row $justifyContent="space-between" $fulled>
        <FeedCard.Badge hasAnswer={question.answer} />
        <AnswerDropdown questionId={question.id} answerId={question?.answer?.id} />
      </Row>
      <FeedCard.Question content={question.content} createdAt={question.createdAt} />
      {showAnswerForm ? <Answer content={question?.answer?.content} /> : <AnswerForm previousContent={question.answer} />}
      <FeedCard.Footer likeCount={question.like} disLikeCount={question.disLike} />
    </FeedCard>
  );
}
