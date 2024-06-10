import shipLogo from '/logoFinal.png'
import styled from '@emotion/styled'
import { Box, Typography,IconButton } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    
const NavBox = styled(Box)({   
    width: '100%',
    background: `linear-gradient(60deg,rgba(0,59,97,1)  0% , rgba(4,105,151,1) 30%,  rgba(49,141,178,1) 50%,rgba(55,175,247,1) 70%, rgba(48,177,206,1) 100%)`,
    color: 'white',
    display:'flex',
    flexDirection: 'row',
    height: '60px',
    paddingTop:'15px',    
    justifyContent: 'center',
    position:'absolute',
    zIndex:0
})
const Logo  =styled(Box)({
    position:'absolute',
    left:'10px',
    padding:'0',
    zIndex:1

  })
const NavHeader=styled(Typography)( {    
    fontSize: '40px',
    fontFamily:'Apple Color Emoji', 
    position:'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignSelf:  'center',
  })

const Waves=styled(Box)({
    position: 'relative',
    width: '100%',
    height: '20px',
    marginBottom: '-7px',
    minHeight: '100px',
    maxHeight: '150px',
  })
  const LoginBox =styled(Box)({
    position: 'absolute',
    right: '30px',
    color: "rgba(0,172,193,1)",
    zIndex:1,
    "&:hover": {
      backgroundColor: "rgba(84,58,183,0)",
      color:'white',

    },
  })
  const LoginButton = styled(IconButton)({
    
    backgroundColor: "white",
    borderRadius: "10px",
    margin: "5px 0px 5px 50px",    
    width: "160px",
    display: "flex",
    justifyContent: "start",
    padding: "0px 0px 0px 30px ",
    height: "50px",
    fontFamily: "sans-serif",
    fontSize: "22px",
    border:'2px solid white',
    color: "rgba(0,172,193,1)",
    "&:hover": {
      backgroundColor: "rgba(84,58,183,0)",
      color:'white',

    },
    zIndex:2,
  
    
  });
  const Loginicon =styled(LoginIcon)({
    fontSize: "22px",
    position: "absolute",
    right:'30px',
    "&:hover": {
      backgroundColor: "rgba(84,58,183,0)",
      color:'white',

    },

    zIndex:2
  })
  const navigate = useNavigate()
  const handleLogin = ()=>{
      navigate("./login")
  }
  
  
  return (
    <>
        
      <NavBox>
        <Logo>
            <img src={shipLogo} height="50px" width="150px" />
        </Logo>
        <NavHeader>
            
          The Comfortable Cruise
          </NavHeader>
          <LoginBox>
        <LoginButton onClick={handleLogin}>Login
          <Loginicon/>
        </LoginButton>
        
        </LoginBox>
       

      </NavBox>
      
    </>
  )
}

export default Navbar