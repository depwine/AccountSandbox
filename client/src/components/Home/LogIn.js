import styled from "styled-components";
import { useState, useContext, useEffect} from "react";
import { UserContext } from "../backbone/UserContext";

const LogIn = () => {

    const [formData, setFormData] = useState({email: "", password: ""});
    const [tempUser, setTempUser] = useState ()
    const [error, setError] = useState("")

    const { user, setUser } = useContext(UserContext)


    const handleChange = (e) => {
        const  {name, value} = e.target;
        console.log(value)
        setFormData((prevFormData) => ({...prevFormData, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();       

        //setUser(formData)

        if (formData.email && formData.password) {
            setTempUser(formData)
        }
    }



    useEffect(() => {

        if (tempUser) {


            fetch(     `http://localhost:8889/api/getOneUser/${formData.email}/${formData.password}`  )

            .then((res) => res.json())
            .then((data) => {

                if (data.status === 500) {
                    setError("Wrong Name / Password; Try Again")
                }

                if (data.email === formData.email && data.password === formData.password && data.status !== 500) {
                    setError("")
                    setUser(data.data)
                    console.log(user)
                }

            })
            .catch((err) => {
                console.log(err)
                setError(err)
            })


                        
        }






                        
        





    }, [tempUser])

    return <>
        <Container>
            <LoginForm onSubmit={handleSubmit}>
                <Label>
                    Name:
                </Label>

                <Input 
                type="text" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange}/>          

                <Label>
                    Password:       
                </Label>

                <Input 
                type="text" 
                id="password" 
                name="password" 
                value={formData.password} 
                onChange={handleChange}/>     

                <Submit type="submit" value="Submit" />
            </LoginForm>
            <Error>
                    {
                    error?
                    <span>{error}</span>
                        : <span>{}</span>
                    }
            </Error>
        </Container>
    </>
}

export default LogIn;

const Container = styled.div`

`;

const Error = styled.div``

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    `

const Label = styled.label`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 20px;
`

const Input = styled.input`
    width: 150px;
`

const Submit = styled.input`
    width: 158px;
`
