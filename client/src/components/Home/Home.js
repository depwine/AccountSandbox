import styled from "styled-components";
import { useState, useContext} from "react";
import LogIn from "./LogIn";
import LoggedIn from "./LoggedIn";
import { UserContext } from "../backbone/UserContext";



const Home = () => {

    const { user } = useContext(UserContext)


    return <>
        <Container>

            {user.given_name
                ? <LoggedIn/>
                : <LogIn/>            
            }

        </Container>
    </>
}

export default Home;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;