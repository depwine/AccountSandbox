import styled from "styled-components";


const Header = () => {
    return <>
        <Container>
            <Buttons>
                <HomeButton>
                    Home
                </HomeButton>

                <ProfileButton>
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

const [ProfileButton, HomeButton]  = styled.span`

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