import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "../header/Header"
import Home from "../Home/Home";
import Profile from "../profile/Profile";
import CreateAccount from "../Home/CreateAccount"
import ChangePassword from "../profile/ChangePassword"

const App = () => {
  return (

    <BrowserRouter>

      <Container>

        <Header/>


          <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create-account" element={<CreateAccount />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/change-password" element={<ChangePassword />} />
          </Routes>




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
