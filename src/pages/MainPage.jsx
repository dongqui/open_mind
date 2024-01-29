import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import OutlinedButton from '../components/Buttons/OutlinedButton';
import Input from '../components/Input';
import { useUser } from '../contexts/userContext';
import usePostUser from '../hooks/usePostUser';

export default function MainPage() {
  const { getExistUser, addUser } = useUser();
  const [userName, setUserName] = useState('');
  const { isLoading, postUser } = usePostUser();
  const navigate = useNavigate();

  const handleOnChange = (e) => setUserName(e.currentTarget.value);
  const handeSubmit = async (e) => {
    e.preventDefault();
    const existUser = getExistUser(userName);
    if (existUser) {
      navigate(`/post/${existUser.id}/answer`);
    } else {
      const newUser = await postUser(userName);
      addUser(newUser);
      navigate(`/post/${newUser.id}/answer`);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Logo src="/assets/images/logo.png" alt="logo-imgage" />
        <ButtonWrapper>
          <Link to="/list">
            <OutlinedButton>질문하러 가기</OutlinedButton>
          </Link>
        </ButtonWrapper>

        <Form onSubmit={handeSubmit}>
          <Input onChange={handleOnChange} placeholder="이름을 입력하세요" prefix={<img src="/assets/images/personIcon.svg" alt="person icon" />} />
          <OutlinedButton fulled disabled={isLoading || !userName} type="submit">
            질문 받기
          </OutlinedButton>
        </Form>
      </Wrapper>
    </Container>
  );
}

const Container = styled.main`
  width: 100%;
  height: 100%;
  background-color: var(--Grayscale-20, #f9f9f9);
  background-image: url('/assets/images/main-bg.svg');
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
`;

const Wrapper = styled.div`
  padding-top: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 130px;
  top: 45px;
  @media (max-width: 768px) {
    position: static;
  }
`;

const Logo = styled.img`
  max-width: 456px;
  max-height: 180px;
  @media (max-width: 768px) {
    width: 248px;
    height: 98px;
  }
`;

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 16px;
  background: var(--Grayscale-10, #fff);
`;
