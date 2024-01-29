import FeedCard from '../FeedCard';
import Answer from '../Answer';
import Row from '../../../components/Row';
import Dropdown from '../../../components/Dropdown/Dropdown';

export default function AnswerFeed({ question }) {
  return (
    <FeedCard>
      <Row $justifyContent="space-between" $fulled>
        <FeedCard.Badge hasAnswer={question.answer} />
        <Dropdown>
          <Dropdown.Header>케밥</Dropdown.Header>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => alert('수정해')}>수정하기</Dropdown.Item>
            <Dropdown.Item>삭제하기</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Row>
      <FeedCard.Question content={question.content} createdAt={question.createdAt} />
      {question.answer && <Answer content={question.answer.content} />}
      <FeedCard.Footer likeCount={question.like} disLikeCount={question.disLike} />
    </FeedCard>
  );
}
