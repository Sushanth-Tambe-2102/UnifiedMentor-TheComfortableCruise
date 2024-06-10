import { Box, styled } from "@mui/system";
import Register1 from "/register/register1.jpg";
import { Alert,IconButton, Typography } from "@mui/material";
import { useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router";
import { useFirebase   } from "../context/Firebase";

import CloseIcon from '@mui/icons-material/Close';

const Paper = styled(Box)({
  width:'100%',
  height:'100%',
  position:'absolute',
  backgroundColor:'rgb(220, 220, 220)',
  display:'flex',
  justifyContent:'center',
  alignItems: 'center', 
})


const MainBox =styled(Box)({
  width:'90%',
  height:'90%',
  backgroundColor:'rgb(207, 225, 230)',
  borderRadius:'30px',
  display:'flex',  

  alignItems: 'center', 
  flexDirection:'row',
  boxShadow:' 100px 20px 30px rgba(0, 0, 0, 0.1)'
  
})

const ImageBox =styled(Box)({
    width: '42%',
    height: '100%',
    borderRadius:'30px 0 0 30px',
  backgroundImage:`url(${Register1})`,
  backgroundSize: 'cover', // This property ensures that the background image covers the entire container
  backgroundPosition: 'center',
  display:'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
const Info = styled(Box)({
  backgroundColor:'rgba(0,0,0,0.4)',
  borderRadius: '10px',
  width: '80%',
  height: '60%',
  padding:'0px',
  display:'flex',
  justifyContent: 'center',
  
  flexDirection:'column'
})
const Infoheader  = styled(Typography)({
  color:'white',
  fontFamily:'sans-serif',
  fontSize:'35px',
  paddingLeft:'30px'

})
const InfoDetails = styled(Typography)({
  color:'white',
  fontFamily:'sans-serif',
  fontSize:'18px',
  padding:'20px 20px 0 30px'
})
const LoginBox = styled(Box)({
  padding:'100px 0 0 40px',
  width:'55%',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  
})
const Tabss =styled(Tabs)({
  width: '100%',
  height:'70px',

})
const Ta1 =styled(Tab)({
    width: '900%',
    height:'70px',
    fontFamily: 'helvetica',
    color:'#1976d2',
    fontSize: '23px',
    
})
const Ta2 =styled(Tab)({
  width: '100%',
  height:'70px',
  fontFamily: 'helvetica',
  
  fontSize: '23px'
})

const LoginForm =styled(Box)({
  display:'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap:'70px',
  flexDirection: 'column' ,
  height: '80%',
  fontSize:'20px' 

})
const TextFields =styled(TextField)({
  height:'20px',
  width: '60%',
})
const FormButton =styled(Button)({
  width: '150px',
  border: '2px solid #1976d2',
  color: '#1976d2',
  height:'50px',
  fontSize: '15px',
  marginTop: '120px',
  marginBottom: '0px',
})
const AlertBox =styled(Alert)({
  margin:'0px',
  width: '350px',
  fontSize: '16px',
  height: '40px',
  position: 'absolute',
  bottom: '225px',
  padding:'0px',
  display:'flex',
  alignContent:'center',
  justifyContent: 'center',

})

const Register = () => {

  const [email,setemail ] =useState('')
 
  const [Password ,setPassword ] =useState('')
  const [Alerterror ,setAlerterror ] =useState('')
  const [value, setValue] = useState("two");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const Firebase =useFirebase()
  
  const navigate = useNavigate();

  

  const handleSubmit=async (e:any)=>{
      e.preventDefault();
      console.log("signin user ...")
      const error = await Firebase.loginUserwithEmailandPassword(email,Password)
  
      setAlerterror(error)
  }
  const Quit =styled(IconButton)({
    position: "absolute",
    top:'50px',
    right:'90px',
    fontSize:'24px'
  })
  
  return (
    <>
    
      <Paper>
        <MainBox>
        <Quit onClick={()=>navigate('/')}><CloseIcon/></Quit>
          <ImageBox>            
            <Info>
            <Infoheader> Welcome Voyagers,</Infoheader>
            <InfoDetails> This is platfom  immerses you in the ease of ordering catering and stationery, or elevate your experience by reserving tickets for Resort-Movies, pampering at the Beauty Salon, working out at the Fitness Center, and organizing memorable events at the Party Hall. Your adventure begins here, where every click unveils a new possibility for a delightful voyage.</InfoDetails>
            </Info>
            
          </ImageBox>
          <LoginBox>
          <Tabss
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            aria-label="secondary tabs example"
            
          >
            <Ta1 value={"one"} label="Register"onClick={()=>(navigate("/register"))} />
            <Ta2 value={"two"} label="Login" onClick={()=>(navigate("/login"))} />
      </Tabss>
       <LoginForm>
       
      <TextFields
          required
          id="standard-required"
          label="Email address"
          variant="standard"
          value={email}
          onChange={(e)=>setemail(e.target.value)}
        />
        <TextFields
          required
          id="standard-required"
          label="Password"
          variant="standard"
          value={Password}
          onChange={(e)=>setPassword(e.target.value)}
        />
      
      { Alerterror==""?<></>:<AlertBox severity="error">{Alerterror}</AlertBox>
        }
        <FormButton onClick={handleSubmit}>Login</FormButton>
        
        </LoginForm>
         
      
                </LoginBox>
        </MainBox>

        

      </Paper>
    </>
  )
}


export default Register