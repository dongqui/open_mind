import { useState } from 'react';
import { useParams } from 'react-router-dom';

import FeedContainer from 'containers/Feed/FeedContainer';
import Space from 'components/Space';
import FloatingButton from 'components/Buttons/FloatingButton';
import CreateAnswerModal from 'containers/modals/CreateAnswerModal';
import { useGetSubject } from 'hooks/useSubject';
import FeedHeader from 'containers/Feed/FeedHeader';

export default function QuestionPage() {
  const [showCreateAnswerModal, setShowCreateAnswerModal] = useState(false);
  const { subjectId } = useParams();
  const { subject, isLoading } = useGetSubject(subjectId);

  return (
    <>
      <FeedHeader subjectName={subject?.name} subjectImage={subject?.imageSource} />
      <Space size={54} />
      <FeedContainer subjectId={subjectId} feedType="question" />
      <FloatingButton $bottom={24} $right={24} onClick={() => setShowCreateAnswerModal(true)} disabled={isLoading}>
        질문 작성하기
      </FloatingButton>
      {showCreateAnswerModal && <CreateAnswerModal onClose={() => setShowCreateAnswerModal(false)} />}
    </>
  );
}
