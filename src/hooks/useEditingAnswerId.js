import { atom, useRecoilState } from 'recoil';

const editinAnswerIdAtom = atom({
  key: 'editinAnswerId',
  default: null,
});

export default function useEditingAnswerId() {
  return useRecoilState(editinAnswerIdAtom);
}
