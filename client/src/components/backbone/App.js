import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "../header/Header"
import Main from "../main/Main";
import Home from "../Home/Home";
import Profile from "../profile/Profile";

const App = () => {
  return (

    <BrowserRouter>

      <Container>

        <Header/>
        <Main>

        <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/profile" element={<Profile />} />
        </Routes>

        </Main>


      </Container>

      
    </BrowserRouter>

  );
}

export default App;

const Container = styled.div`
  margin: 0px;
  padding: 0px;

  height: 98vh;


`
