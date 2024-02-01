import FeedContainer from 'containers/Feed/FeedContainer';
import Space from 'components/Space';
import { useSubject } from 'contexts/subjectContext';
import FeedHeader from 'containers/Feed/FeedHeader';

export default function AnswerPage() {
  const { subject } = useSubject();

  return (
    <>
      <FeedHeader subjectName={subject?.name} subjectImage={subject?.imageSource} />
      <Space size={54} />
      <FeedContainer subjectId={subject.id} feedType="answer" />
    </>
  );
}
