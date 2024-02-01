import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Avatar from 'components/Avatar';
import Column from 'components/Column';
import Row from 'components/Row';
import Text from 'components/Text';
import { MessageIcon } from 'components/Icons';

export default function SubjectCard({ imageSource, id, name, questionCount }) {
  return (
    <Card>
      <Link to={`/post/${id}`}>
        <Column $gap={12}>
          <Avatar imgUrl={imageSource} size={60} />
          <Text>{name}</Text>
        </Column>
        <Row $justifyContent="space-between">
          <Row $gap={4}>
            <MessageIcon color="gray40" />
            <Text color="gray40">받은 질문</Text>
          </Row>
          <Text color="gray40">{questionCount}개</Text>
        </Row>
      </Link>
    </Card>
  );
}

const Card = styled.li`
  width: 100%;
  max-width: 22rem;
  height: 18.7rem;
  border-radius: 16px;
  border: 1px solid var(--Grayscale-40);
  background-color: var(--Grayscale-10);
  a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 2rem;
  }
`;
