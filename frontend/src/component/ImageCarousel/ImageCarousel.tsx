import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Paper, Box,Button, IconButton,Typography } from '@mui/material'
import { styled, typography } from "@mui/system";
import  { useState } from 'react';

interface ImageInfo {
  name: string,
  description: string,
  image: string
}

const ImageCarousel = (props:ImageInfo) => {
  const [infoVisible,Setinfovisible] =useState(false)
  const { name, description, image } = props
    
const ImageBox= styled(Paper)({
  color: "rgba(240,222,193,1)",
  zIndex:0
})

const ImageName =styled(Box)({
  position:'absolute',
  fontSize:'36px',
  left:'50px',  
  top:'350px',
  backgroundColor:'rgba(0, 0, 0, .5)',

 borderRadius:'5px',
  fontFamily:'helvetica',
  width:'450px',
  display:'flex',
  flexDirection:'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding:'10px',

  zIndex:1

})
const ImageDesc=styled(Typography)({
  fontSize:'18px',
  display:'flex',
  flexDirection:'column',
  justifyContent: 'center',
  alignSelf:'center',
  textAlign: 'center',
  padding:'15px 5px 5px 5px'
})


const RegisterBox=styled(Box)({
  position:'absolute',
  right:'80px',
  top:'460px',
  
})
const RegisterButton =styled(IconButton)({

  backgroundColor: "white",
  borderRadius: "10px",
  margin: "15px 0px 10px 50px",    
  width: "250px",
  display: "flex",
  justifyContent: "center",

  height: "60px",
  fontFamily: "sans-serif",
  fontSize: "28px",
  border:'2px solid white',
  color: "rgba(0,172,193,1)",
  "&:hover": {
    backgroundColor: "rgba(84,58,183,0)",
    color:'white',

  },
})

  
  return (
    <div onMouseEnter={()=>(Setinfovisible(true))} onMouseLeave={()=>(Setinfovisible(false))}>
          <ImageBox>
  
          <img src={image} alt="" width="1400px" height="700px"></img>

          {infoVisible && (
        <ImageName>
          {name}
          
          <ImageDesc>{description}</ImageDesc>
        </ImageName>
          )}
          
          
         

         
          <RegisterBox >
            
          <RegisterButton>Register</RegisterButton>
          
          </RegisterBox>
        </ImageBox>
         
        </div>
    
  )
}

export default ImageCarousel