import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Pagination from 'components/Pagination';
import SubjectCard from './SubjectCard';
import { useSubjects } from 'hooks/useSubjects';
import useInitSubjectsPagenation from 'hooks/useInitSubjectsPagenation';

export default function SubjectList() {
  const naviage = useNavigate();
  const page = useInitSubjectsPagenation();
  const { subjects } = useSubjects(page);

  const handleChangePage = (page) => naviage(`/list?page=${page}`);

  return (
    <Container>
      <SubjectListStyle>
        {subjects.results.map(({ id, name, questionCount, imageSource }) => (
          <SubjectCard key={id} id={id} imageSource={imageSource} name={name} questionCount={questionCount} />
        ))}
      </SubjectListStyle>

      <Pagination itemCount={subjects.count} onChange={handleChangePage} initPage={page} />
    </Container>
  );
}
const SubjectListStyle = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 475px;
  gap: 52px;
`;
