import React from "react";
import styled from "styled-components"

export const Sider = () => {
  return (
   <Container>
     <Main>Sider</Main>
  </Container>
  )

  }


const Main = styled.div``
const Container = styled.div`
position: fixed;
height: calc(100vh - 122px);
background-color: silver;
width: 150px;`