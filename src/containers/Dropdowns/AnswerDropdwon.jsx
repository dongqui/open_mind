import Dropdown from 'components/Dropdown';

import useEditingAnswerId from 'hooks/useEditingAnswerId';
import { useQuestiuons } from 'hooks/questionsHooks';
import { putAnswerApi, deleteAnswerApi } from 'apis';

export default function AnswerDropdown({ questionId, answerId }) {
  const [_, setEditingAnswerId] = useEditingAnswerId();
  const { updateQuestion } = useQuestiuons();

  const handleClickModify = () => setEditingAnswerId(answerId);
  const handleClickDelete = async () => {
    await deleteAnswerApi(answerId);
    updateQuestion(questionId, { answer: null });
  };
  const handleClickReject = async () => {
    const newAnswer = await putAnswerApi({ answerId, isRejected: true, content: '답변 거절' });
    updateQuestion(questionId, { answer: newAnswer });
  };

  return (
    <Dropdown>
      <Dropdown.Header>
        <img src="/assets/images/more-icon.svg" alt="more-icon" />
      </Dropdown.Header>
      <Dropdown.Menu>
        <Dropdown.Item onClick={handleClickModify} disabled={!answerId}>
          수정하기
        </Dropdown.Item>
        <Dropdown.Item onClick={handleClickDelete} disabled={!answerId}>
          삭제하기
        </Dropdown.Item>
        <Dropdown.Item onClick={handleClickReject} disabled={!answerId}>
          거절하기
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
