import { useState } from 'react';

import useEditingAnswerId from 'hooks/useEditingAnswerId';
import Textarea from 'components/Textarea';
import FilledButton from 'components/Buttons/FilledButton';
import Column from 'components/Column';
import { putAnswerApi, postAnswerApi } from 'apis';
import { useQuestiuons } from 'hooks/questionsHooks';

export default function AnswerForm({ previousContent = '', questionId, answerId }) {
  const [content, setContent] = useState(previousContent);
  const [_, setEditingAnswerId] = useEditingAnswerId();
  const { updateQuestion } = useQuestiuons();

  const handleChange = (e) => setContent(e.currentTarget.value);
  const handleClick = async () => {
    const newAnswer = answerId ? await putAnswerApi({ answerId, content, isRejected: false }) : await postAnswerApi({ questionId, content, isRejected: false });
    updateQuestion(questionId, { answer: newAnswer });
    setEditingAnswerId(null);
  };

  return (
    <Column $gap={8} $fulled>
      <Textarea placeholder="답변을 입력해주세요" rows={7} onChange={handleChange} value={content} />
      <FilledButton fulled disabled={!content} onClick={handleClick}>
        질문 보내기
      </FilledButton>
    </Column>
  );
}
