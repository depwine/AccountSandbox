import styled from "styled-components";
import { useNavigate } from "react-router-dom";



const Header = () => {

    const navigate = useNavigate();

    const navToHome = () => {
        navigate("/")
    }

    const navToProfile = () => {
        navigate("/profile")
    }

    return <>
        <Container>
            <Buttons>
                <HomeButton onClick = {navToHome}>
                    Home
                </HomeButton>

                <ProfileButton onClick = {navToProfile}>
                    Profile
                </ProfileButton>
            </Buttons>
        </Container>
    </>
}

export default Header;

const Container = styled.div`
    display: flex;
    align-items: end;
    justify-content: center;
    height: 15vh;
    background-color: #dddddd;
`;

const Buttons = styled.div`
    display: flex;
    column-gap: 1vw;
    font-size: 2vh;
    color: white;
`;

const HomeButton = styled.span`

    padding: 0 10px;
    margin: 0 0 5px 0;
    outline: 1px solid white;
    border-radius: 5%;

    &:hover{
        cursor: pointer;
        color: grey;
        background-color: white;
    }

`;  

const ProfileButton = HomeButton;
