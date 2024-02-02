import Feeds from 'containers/Feed/Feeds';
import Space from 'components/Space';
import { useSubject } from 'contexts/subjectContext';
import FeedHeader from 'containers/Feed/FeedHeader';

export default function AnswerPage() {
  const { subject } = useSubject();

  return (
    <>
      <FeedHeader subjectName={subject?.name} subjectImage={subject?.imageSource} />
      <Space size={54} />
      <Feeds subjectId={subject.id} feedType="answer" />
    </>
  );
}
