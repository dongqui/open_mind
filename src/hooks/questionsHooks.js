import { atom, useRecoilState } from 'recoil';
import { useEffect, useRef, useState } from 'react';

import useIntersectionObserver from './useIntersectionObserver';
import { getQuestionsApi, fetchNext, postQuestionApi } from '../apis';

const questionsAtom = atom({
  key: 'questionsAtom',
  default: [],
});

export function useQuestiuonsState() {
  return useRecoilState(questionsAtom);
}

export function usePostQuestion() {
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useQuestiuonsState();

  async function postQuestion(subjectId, content) {
    setIsLoading(true);
    const newQuestion = await postQuestionApi(subjectId, content);
    setQuestions((prev) => [newQuestion, ...prev]);
    setIsLoading(false);
  }

  return { isLoading, postQuestion, questions };
}

export function useQuestionsOnInfiniteScroll(subjectId) {
  const [questions, setQuestions] = useQuestiuonsState();
  const [bottomRef, isIntersecting] = useIntersectionObserver({});
  const nextURLRef = useRef(null);

  useEffect(() => {
    async function initQuestions() {
      const { results, next } = await getQuestionsApi(subjectId, 0);
      setQuestions(results);
      nextURLRef.current = next;
    }
    if (subjectId) {
      initQuestions();
    }
  }, [subjectId]);

  useEffect(() => {
    async function fetchQuestions() {
      const { results, next } = await fetchNext(nextURLRef.current);
      setQuestions((prev) => prev.concat(results));
      nextURLRef.current = next;
    }
    if (subjectId && isIntersecting && nextURLRef.current) {
      fetchQuestions(subjectId);
    }
  }, [subjectId, isIntersecting]);

  return {
    bottomRef,
    questions,
  };
}
