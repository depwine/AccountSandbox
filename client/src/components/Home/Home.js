import styled from "styled-components";
import { useState, useContext} from "react";
import LogIn from "./LogIn";
import LoggedIn from "./LoggedIn";

const Home = () => {
    return <>
        <Container>
            <LogIn/>
        </Container>
    </>
}

export default Home;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;