import styled from "styled-components";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../backbone/UserContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {

    const [formData, setFormData] = useState({email: "", password: "", newPassword: ""})
    const [newPassword, setNewPassword] = useState()
    const [error, setError] = useState("")

    const navigate = useNavigate()
    const { user } = useContext(UserContext)

    const handleChange = (e) => {

        const {name, value} = e.target;

        setFormData (prevData => ({
            ...prevData,
            [name]: value
        })) 

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(user)


        if (formData.email !== "" && formData.password !== "" && formData.newPassword !== ""){
            console.log(formData)
        } else if (formData.password !== "" && formData.password === formData.newPassword){

            console.log("new password cannot be old password")

        } else {
            console.log("form fields empty")

        }

        console.log(formData.email, user.email, formData.password, user.password)

                // check credentials.
        if (formData.email === user.email && formData.password === user.password) {

                // if good, allow password change
                setNewPassword(formData.newPassword)
                console.log("new password set")
        }
    }

    useEffect(() => {

        if (newPassword){

            const postBody = formData
            console.log(postBody)

            
            fetch("http://localhost:8889/api/putUpdatePassword",
            {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "PUT",
                body: JSON.stringify(postBody)
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)    
    
                    if (data.status === 200) {
                        setError(`${postBody.email} password successfully changed, redirecting to Home`)
    
                        setTimeout(() => {
                            setError(null)
                            navigate("/")
                        }, 2000)
                    }
    
                    if (data.status === 401) {
                        setError("Password NOT changed")
    
                        setTimeout(() => {
                            setError(null)
                        }, 1000)
                    }
                })
                .catch((err) => {
                    setError(err)
                    console.log(err)
                })
                
        }       
        
        
    }, [newPassword])

    return<>
        <Container>

            <LoginForm onSubmit={handleSubmit}>
                <Label>Email:</Label>

                <Input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <Label>Old Password:</Label>

                <Input
                    type="text"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <Label>New Password:</Label>
                <Input
                    type="text"
                    id="newPassword"
                    name="newPassword"
                    value={formData.given_name}
                    onChange={handleChange}
                />

                <Submit type="submit" value="Create Account" />
            </LoginForm>
            <span>{error}</span>
            
        </Container>
    </>

}

export default ChangePassword

const Container = styled.div`
    height: 84vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const Error = styled.div``;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 20px;
`;

const Input = styled.input`
  width: 150px;
`;

const Submit = styled.input`
  width: 158px;
`;