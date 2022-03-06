import { auth, googleProvider } from '../firebase';
import { useNavigate } from "react-router-dom";
import { Button, Container, FormControl, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faYoutube, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons'
const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    
    padding: theme.spacing(1),
    textAlign: "center",
    marginTop: 0

  }));

function LoginPage ({user, setUser}) {
    const navigate = useNavigate();
    const goToHomePage = () => {
        navigate("/");
    }
    // hàm gọi api
    const getData = async (paramUrl, paramOptions = {}) => {
        const response = await fetch(paramUrl, paramOptions);
        const responseData = await response.json();
        return responseData;
    }
    const logout = () => {
        auth.signOut()
        .then(() => {
            //setUser(null)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const loginGoogle = () => {
        auth.signInWithPopup(googleProvider)
        .then((result) => {
            console.log(result);
            setUser(result.user);
            findEmailAPI(result.user.email, result.user.displayName) // tìm mail xem có tồn tại trên db ko
        })
        .catch((error) => {
            console.log(error)
        })

    }
    const findEmailAPI = (paramEmail, paramName) => {
        getData("http://localhost:8000/customers/" + paramEmail)
        .then((data) => {
            if(data.customer){
                goToHomePage()
            }
            else{
                createCustomer(paramEmail, paramName)
            }
        })
        .catch((error) => {
            console.log(error)
            return false
        })
    }
    const createCustomer = (paramEmail, paramName) => {
        // gọi api tạo đơn hàng
        var vInfoCustomer = {
            email: paramEmail,
            fullName: paramName
        }
        const body = {
            method: 'POST',
            body: JSON.stringify(vInfoCustomer),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }
        getData("http://localhost:8000/customers", body)
        .then((data) => {
            console.log(data)
            goToHomePage()
        })
        .catch((error) => {
            console.log(error)
            
        })
    }
    return (
        <>
            <Container maxWidth="xl" sx={{backgroundColor: "#26a69a", height: 750}}>
                <Div>
                    <FormControl style={{backgroundColor: "#e3f2fd", width: "40%", alignItems: "center", marginTop: 60}}>
                        <br></br>
                        <Button onClick={loginGoogle} style={{ borderRadius: 25, backgroundColor: "#b71c1c", padding: "5px 10px", fontSize: "20px", width: 400, alignContent: "center", fontFamily: "italic"}}  variant="contained"><i><FontAwesomeIcon className="text-warning me-3" icon={faGoogle}/> Sign in with <strong> Google</strong></i></Button>
                        <br></br>
                        <br></br>
                        <br></br>
                        <p>or</p>
                        <TextField  className='borderRadius-Texfield' id="input-username" label="Username" variant="outlined" sx={{width:400}} />
                        
                        <TextField className='borderRadius-Texfield' id="input-password" label="Password" variant="outlined" sx={{width:400}}/>
                        <br></br>
                        <Button style={{ borderRadius: 25, backgroundColor: "#03a9f4", padding: "5px 10px", fontSize: "20px", width: 400, alignContent: "center", marginBottom: 55}}  variant="contained"><i>Sign in</i></Button>
                    </FormControl>
                </Div>
                <p className='text-center text-white'>Don't have an account? <strong className='text-warning'>Sign up here</strong></p>
            </Container>
        </>
    )
}

export default LoginPage