import styled from "styled-components";
import { useState, useContext} from "react";

const Home = () => {
    return <>
        <Container>
            Log In!
            <LoginForm>

            </LoginForm>
        </Container>
    </>
}

export default Home;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;