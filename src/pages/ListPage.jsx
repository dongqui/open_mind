import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Text from 'components/Text';
import OutlinedButton from 'components/Buttons/OutlinedButton';
import { useUser } from 'contexts/userContext';
import Image from 'components/Image';
import Column from 'components/Column';
import Space from 'components/Space';

import SubjectList from 'containers/SubjectList';
import SubjectsOrderDropdown from 'containers/Dropdowns/SubjectsOrderDropdown';

export default function ListPage() {
  const { user } = useUser();

  return (
    <Container>
      <Nav>
        <Image width={146} height={57} src="/assets/images/logo.svg" alt="logo" />
        <Link to={user.id}>
          <OutlinedButton suffix={<img src="/assets/images/arrow-right.svg" alt="arrow" />}>답변하러 가기</OutlinedButton>
        </Link>
      </Nav>

      <Column $alignItems="center">
        <Text as="h1" typhography="h1">
          누구에게 질문할까요?
        </Text>
        <SubjectsOrderDropdown />
      </Column>

      <Space size={52} />

      <SubjectList />
    </Container>
  );
}

const Container = styled.div`
  max-width: 940px;
  margin: 0 auto;
`;

const Nav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-top: 40px;
`;
