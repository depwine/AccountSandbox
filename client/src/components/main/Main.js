import styled from "styled-components";
import Home from "../Home/Home";

const Main = () => {
    return <>
        <Container>
            <Home/>
        </Container>
    </>
}

export default Main;

const Container = styled.div`
    height: 83.7vh;
    background-color: #fcfcfc;
    display: flex;
    justify-content: center;
`;