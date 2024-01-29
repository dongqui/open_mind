import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";

import { getQuestionsApi } from '../apis';

const questionsAtom = atom({
  key: 'questionsAtom',
  default: [],
})

export default function useQuestionsRecoil() {
  return useRecoilState(questionsAtom);
}

export function useFetchQuestions(subjectId) {
  const [questions, setQuestions] = useQuestionsRecoil();
  
  async function fetchMoreQuestions(offset) {
    await getQuestionsApi(subjectId, offset)
  }

  useEffect(() => {

  }, [])
}