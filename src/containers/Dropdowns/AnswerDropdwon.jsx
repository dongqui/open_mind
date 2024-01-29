import Dropdown from 'components/Dropdown/Dropdown';

import useEditingAnswerId from 'hooks/useEditingAnswerId';
import { putAnswerApi } from 'apis';

export default function AnswerDropdown({ questionId, answerId }) {
  const [_, setEditingAnswerId] = useEditingAnswerId();

  const handleClickModify = () => setEditingAnswerId(answerId);
  const handleClickDelete = () => {};
  const handleClickReject = async () => {
    await putAnswerApi({ answerId, isRejected: true });
  };

  return (
    <Dropdown>
      <Dropdown.Header>
        <img src="/assets/images/more-icon.svg" alt="more-icon" />
      </Dropdown.Header>
      <Dropdown.Menu>
        <Dropdown.Item onClick={handleClickModify}>수정하기</Dropdown.Item>
        <Dropdown.Item onClick={handleClickDelete}>삭제하기</Dropdown.Item>
        <Dropdown.Item onClick={handleClickReject}>거절하기</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
