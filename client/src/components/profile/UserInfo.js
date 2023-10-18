import { UserContext } from "../backbone/UserContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const UserInfo = ({user}) => {

    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()


    const logOut = () => {
        navigate("/")

        setTimeout(() => {
            setUser({})
        }, 1000)

    }

    const changePassword = () => {
        navigate("/change-password")

    }

    return <>

        <Container>

            <span>
                Email: {user.email}
            </span>
            <span>
                Name: {user.given_name}
            </span>
            <button onClick = {logOut}>Log Out</button>

            <button onClick = {changePassword}>Change Password</button>

        </Container>



    </>

}

export default UserInfo

const Container = styled.div`

    justify-content: center;
    align-items: center;
    width: 120px;
    display: flex;
    flex-direction: column;

`;