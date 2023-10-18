import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {

    const [formData, setFormData] = useState({ email: "", password: "", given_name: "" })
    const [tempCreateUser, setTempCreateUser] =  useState()
    const [err, setErr] = useState("")

    const navigate =  useNavigate();

        //form hand
    const handleChange = (e) => {
        const  {name, value} = e.target;
        console.log(value);
        setFormData ((prevData) => ({
            ... prevData, [name]: value
        }))
    }


        // submit
    const handleSubmit = (e) => {
        e.preventDefault()

        //check all fields
        if (formData.email !== "" && formData.password !== "" && formData.given_name !== ""){
            console.log(formData)
            setTempCreateUser(formData)
        } else {
            console.log("form not full")

            setErr("Please fill all form fields")
    
            setTimeout(() => {
                setErr(null)
            }, 1000)
        }
    }

    useEffect(() => {
            // if exist (so doesnt trigger init)

        let postBody = {...tempCreateUser}

        if (tempCreateUser) {
            
            fetch("http://localhost:8889/api/postAddOneUser",
            {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(postBody)
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)    
    
                    if (data.status === 200) {
                        setErr(`${postBody.given_name} added to database, redirecting to Home`)
    
                        setTimeout(() => {
                            setErr(null)
                            navigate("/")
                        }, 2000)
                    }
    
                    if (data.status === 401) {
                        setErr("An account with this email already exists")
    
                        setTimeout(() => {
                            setErr(null)
                        }, 1000)
                    }
                })
                .catch((err) => {
                    setErr(err)
                    console.log(err)
                })
        }       

    },[tempCreateUser])

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

          <Label>Password:</Label>

          <Input
            type="text"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

        <Label>Given Name:</Label>
        <Input
            type="text"
            id="given_name"
            name="given_name"
            value={formData.given_name}
            onChange={handleChange}
          />

          <Submit type="submit" value="Create Account" />
        </LoginForm>

        <span>{err}</span>

        </Container>
    </>
}

export default CreateAccount

const Container = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

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
