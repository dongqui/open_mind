import styled from "styled-components";

import Modal from "../components/Modal";
import Avatar from "../components/Avatar";
import Text from "../components/Text";
import Row from "../components/Row";
import TextButton from '../components/Buttons/TextButton';
import Space from '../components/Space'
import Textarea from '../components/Textarea';
import FilledButton from '../components/Buttons/FilledButton';

export default function CreateAnswerModal({ onClose, profileImg, subjectName }) {
  return(
    <Modal>
      <Container>
        <Row $justifyContent="space-between">
          <Row $gap={8}>
            <img src="/assets/images/Messages.svg" alt="말풍선 아이콘" />
            <Text>질문을 작성하세요</Text>
          </Row>
          <TextButton onClick={onClose}>
            <img src="/assets/images/Close.svg" alt="닫기 버튼" />
          </TextButton>
        </Row>
        <Space size={43}/>
        <Row $gap={4}>
          <Text typhography="body-2-bold">To.</Text>
          <Avatar imgUrl={profileImg} size={28}/>
          {subjectName}
        </Row>
        <Space size={15}/>
        <Textarea placeholder="질문을 입력해주세요" rows={7}/>
        <Space size={8}/>
        <FilledButton fulled>질문 보내기</FilledButton>
      </Container>      
    </Modal>
  )   
}

const Container = styled.div`
  position: relative;
  border-radius: 2.4rem;
  background-color: var(--Grayscale-10);
  box-shadow: 0px 16px 20px 0px rgba(48, 48, 48, 0.62);
  max-width: 61.2rem;
  width: 100%;
  padding: 4rem;
  border: none;
`