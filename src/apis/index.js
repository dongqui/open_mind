import _axios from 'axios';

const axios = _axios.create({ baseURL: 'https://openmind-api.vercel.app/3-2' });

export async function postUserApi(name) {
  const response = await axios.post('/subjects/', { name });
  return response.data;
}

export async function getQuestionsApi(subjectId, offset, limit = 8) {
  const response = await axios.get(`/subjects/${subjectId}/questions/?limit=${limit}&offset=${offset}`);
  return response.data;
}

export async function fetchNext(nextUrl) {
  const response = await _axios.get(nextUrl);
  return response.data;
}

export async function postQuestionApi(subjectId, content) {
  const response = await axios.post(`/subjects/${subjectId}/questions/`, { content });
  return response.data;
}

export async function getSubjectApi(subjectId) {
  const response = await axios.get(`/subjects/${subjectId}/`);
  return response.data;
}

export async function getSubjectsApi(offset, sort) {
  const response = await axios.get(`/subjects/?offset=${offset}&sort=${sort}`);
  return response.data;
}

export async function deleteAnswerApi(answerId) {
  const response = await axios.delete(`/answers/${answerId}/`);
  return response.data;
}

export async function putAnswerApi({ answerId, content = '', isRejected = false }) {
  const response = await axios.put(`answers/${answerId}/`, { content, isRejected });
  return response.data;
}

export async function postAnswerApi({ questionId, content = '', isRejected = false }) {
  const response = await axios.post(`questions/${questionId}/answers/`, { content, isRejected });
  return response.data;
}

export async function postReactionApi(questionId, type) {
  const response = await axios.post(`questions/${questionId}/reaction/`, { type });
  return response.data;
}
