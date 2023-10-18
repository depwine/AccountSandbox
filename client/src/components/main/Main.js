import styled from "styled-components";
import Home from "../Home/Home";
import Profile from "../profile/Profile";

const Main = () => {
    return <>
        <Container>
            <Home/>
            <Profile/>
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