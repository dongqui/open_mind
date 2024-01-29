import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  <Container>
    <Outlet />
  </Container>;
}

const Container = styled.main`
  width: 100%;
  height: 100vh;
  position: relative;
`;
