import styled from 'styled-components';
import { Link } from 'react-router-dom';

import OutlinedButton from '../components/Buttons/OutlinedButton';
import Input from '../components/Input';

export default function MainPage() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Logo src="/assets/images/logo.png" alt="logo-imgage" />
        <S.ButtonWrapper>
          <Link to="/list">
            <OutlinedButton>질문하러 가기</OutlinedButton>
          </Link>
        </S.ButtonWrapper>

        <S.Form>
          <Input onChange={() => {}} placeholder="이름을 입력하세요" prefix={<img src="/assets/images/personIcon.svg" alt="person icon" />} />
          <OutlinedButton fulled onClick={() => {}}>
            질문 받기
          </OutlinedButton>
        </S.Form>
      </S.Wrapper>
    </S.Container>
  );
}

const Container = styled.div`
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

const S = {
  Container,
  ButtonWrapper,
  Wrapper,
  Logo,
  Form,
};
