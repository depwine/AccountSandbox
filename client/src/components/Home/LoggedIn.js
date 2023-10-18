import styled from "styled-components";
import { useState, useContext} from "react";
import { UserContext } from "../backbone/UserContext";


const LoggedIn = () => {

    const { user, setUser } = useContext(UserContext)

    const LogOut = () => {
        setUser({})
    }

    return <>
        <Container>
            Logged In!
            Welcome, {user.given_name}

            <button onClick = {LogOut}>Log Out</button>
        </Container>
    </>
}

export default LoggedIn;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
