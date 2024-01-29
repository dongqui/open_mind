import { useParams } from 'react-router-dom';

import FeedContainer from 'containers/Feed/FeedContainer';
import Space from 'components/Space';
import { useGetSubject } from 'hooks/useSubject';
import FeedHeader from 'containers/Feed/FeedHeader';

export default function AnswerPage() {
  const { subjectId } = useParams();
  const { subject } = useGetSubject(subjectId);

  return (
    <>
      <FeedHeader subjectName={subject?.name} subjectImage={subject?.imageSource} />
      <Space size={54} />
      <FeedContainer subjectId={subjectId} feedType="answer" />
    </>
  );
}
