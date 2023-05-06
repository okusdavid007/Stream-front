import React from "react";
import styled from "styled-components"

export const Landingpages = () => {
  return (
    <Wrapper>
  <Container>
    <Main>
        Landingpages
    </Main>
  </Container>
  </Wrapper>
  )
}

export default Landingpages;

const Main = styled.div``
const Container = styled.div`
width: calc(100% - 200px);
height: calc(100vh - 122px);
background-color:blue;
display: flex;
`


const Wrapper = styled.div`
width:100%;
display: flex;
justify-content: flex-end
`