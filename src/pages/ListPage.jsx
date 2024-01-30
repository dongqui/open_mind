import { Link } from "react-router-dom"
import styled from "styled-components"

import Text from "components/Text"
import OutlinedButton from 'components/Buttons/OutlinedButton'
import { useUser } from "contexts/userContext"
import Image from "components/Image"
import Column from "components/Column"
import Dropdown from "components/Dropdown"
import Row from "components/Row"
import SubjectList from "containers/SubjectList"
import { MessageIcon } from "components/Icons"

export default function ListPage() {
  const { user } = useUser();

  return (
    <Container>
      <Nav>
        <Image width={146} height={57} src="/assets/images/logo.svg" alt="logo"/> 
        <Link to={user.id}>
          <OutlinedButton suffix={<img src="/assets/images/arrow-right.svg" alt="arrow"/>}>답변하러 가기</OutlinedButton>
        </Link>      
      </Nav>
      <Column $alignItems="center">
        <Text as='h1' typhography="h1">누구에게 질문할까요?</Text>
        <Dropdown>
          <Dropdown.Header>
            <Row gap={4}>
              이름순
              <img src="/assets/images/arrow-down.svg" alt="arrow"/>
            </Row>
          </Dropdown.Header>
          <Dropdown.Menu>
            <Dropdown.Item>이름순</Dropdown.Item>
            <Dropdown.Item>최신순</Dropdown.Item>
          </Dropdown.Menu>          
        </Dropdown>
        <SubjectList/>
      </Column>
    </Container>    
  )
}


const Container = styled.div`
  max-width: 940px;
  margin: 0 auto;
`

const Nav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-top: 40px;
`