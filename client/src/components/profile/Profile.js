import styled from "styled-components";
import { useContext } from "react";
import { UserContext } from "../backbone/UserContext";
import UserInfo from "./UserInfo";

const Profile = () => {

    const { user } = useContext(UserContext)


    return <>
        <Container>
            {
            user.given_name
            ?<UserInfo user = {user} />
            : "Log In to see Profile Info"
            }
        </Container>
    </>
}

export default Profile;

const Container = styled.div`
    height: 84vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;