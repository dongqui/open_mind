import { useState } from 'react';

import Feeds from 'containers/Feed/Feeds';
import Space from 'components/Space';
import FloatingButton from 'components/Buttons/FloatingButton';
import CreateAnswerModal from 'containers/modals/CreateAnswerModal';
import FeedHeader from 'containers/Feed/FeedHeader';
import { useSubject } from 'contexts/subjectContext';

export default function QuestionPage() {
  const [showCreateAnswerModal, setShowCreateAnswerModal] = useState(false);
  const { subject } = useSubject();

  return (
    <>
      <FeedHeader subjectName={subject?.name} subjectImage={subject?.imageSource} />
      <Space size={54} />

      <Feeds subjectId={subject?.id} feedType="question" />

      <FloatingButton $bottom={24} $right={24} onClick={() => setShowCreateAnswerModal(true)}>
        질문 작성하기
      </FloatingButton>
      {showCreateAnswerModal && <CreateAnswerModal onClose={() => setShowCreateAnswerModal(false)} />}
    </>
  );
}
