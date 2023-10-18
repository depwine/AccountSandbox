import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../backbone/UserContext";
import { useNavigate } from "react-router-dom";


const LogIn = () => {

    const navigate = useNavigate();


  const [formData, setFormData] = useState({ email: "", password: "" });
  const [tempUser, setTempUser] = useState();
  const [error, setError] = useState("");

  const { user, setUser } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //setUser(formData)

    if (formData.email && formData.password) {
      setTempUser(formData);
    }
  };

  useEffect(() => {


    if (tempUser) {
      fetch(
        `http://localhost:8889/api/getOneUser/${formData.email}/${formData.password}`
      )
      .then((res) => res.json())
      .then((data) => {



            if (data.status = 401) {
                setError("Wrong email / password. Try again") 
                
                setTimeout(() => {
                    setError(null)
                }, 1000)
            } else {
                
                setError("Successfully logged in!")    

                setTimeout(() => {
                    setError(null)
                }, 1000)
            }


    
                setTimeout(() => {
                    setError(null)
                }, 1000)

                console.log("fetch successful, data: ", data.data)
                let temp = data.data
                let updatedValue = temp
                updatedValue = temp
    
                setUser((prev) => ({
                    ...prev,
                    ...updatedValue
                }))

                console.log("user:", user)
            

      })

    }
  }, [tempUser]);

  const createAccount = () => {
    navigate("/create-account")
  }

  return (
    <>
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

          <Submit type="submit" value="Submit" />
        </LoginForm>
        <button onClick = {createAccount}>Create Account</button>
        <Error> {error} </Error>
      </Container>
    </>
  );
};

export default LogIn;

const Container = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
