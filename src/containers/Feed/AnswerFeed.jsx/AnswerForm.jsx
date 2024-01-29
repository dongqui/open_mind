import { useState } from 'react';

import useEditingAnswerId from 'hooks/useEditingAnswerId';
import Textarea from 'components/Textarea';
import FilledButton from 'components/Buttons/FilledButton';
import Column from 'components/Column';

export default function AnswerForm({ previousContent = '' }) {
  const [content, setContent] = useState(previousContent);
  const [_, setEditingAnswerId] = useEditingAnswerId();

  const handleChange = (e) => setContent(e.currentTarget.value);
  const handleClick = () => {
    setEditingAnswerId(null);
  };
  return (
    <Column $gap={8} $fulled>
      <Textarea placeholder="답변을 입력해주세요" rows={7} onChange={handleChange} />
      <FilledButton fulled disabled={!content.length} onClick={handleClick}>
        질문 보내기
      </FilledButton>
    </Column>
  );
}
