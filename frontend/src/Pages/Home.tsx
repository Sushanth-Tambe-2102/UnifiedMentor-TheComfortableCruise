import { Box, getContrastRatio, styled } from "@mui/system"
import ImageCarousel from "../component/ImageCarousel/ImageCarousel"
import Carousel from 'react-material-ui-carousel'
import Waves from "../component/Decorations/Waves";
import Serviceheader from "../component/Decorations/Serviceheader";
import Droplet from "../component/Services/Droplet";


const items  = [
    {
      name: 'Enchanting Waves',
      description: 'Experience the mesmerizing beauty of Enchanting Waves. Dive into the serene atmosphere where the gentle caress of the waves creates an enchanting symphony. Let your senses be captivated by the harmonious blend of nature and tranquility.',
      image: 'Carousel1/home3.jpg'
    },
    {
      name: 'Mystical Moonlight',
      description: 'Embark on a journey under the Mystical Moonlight. As the moon casts its magical glow, immerse yourself in the ethereal ambiance. Each moment becomes a magical memory in the soft embrace of the moonlit night.',
      image: 'Carousel1/home2.jpg'
    },
    {
      name: 'Pacific Paradise',
      description: 'Discover the Pacific Paradise, where crystal-clear waters meet pristine shores. Let the gentle breeze carry you to a tropical haven, surrounded by lush greenery and the soothing melody of the ocean. Paradise awaits your every step.',
      image: 'Carousel1/home1.jpg'
    }
  ];
  
const HomeBox=styled(Box)({
    marginTop:'70px',
    position:'absolute',
    width:'100%',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',

})
const CarouselBox=styled(Box)({
    background: `linear-gradient(90deg,rgba(0,59,97,1)  0% , rgba(4,105,151,1) 30%,  rgba(49,141,178,1) 50%,rgba(55,175,247,1) 70%, rgba(48,177,206,1) 100%)`,
    display: 'flex',
    justifyContent: 'center',
   
    
})

const CarouselItem=styled(Carousel)({
    width:'1400px',
    height:'600px',
    border:'2px solid white',
    borderRadius:'30px',
    marginTop:'20px',
   
    
})

const Home = () => {
  return (
    <>
    <HomeBox>
    <CarouselBox>
        <CarouselItem
            fullHeightHover={true}    
            navButtonsProps={{         
                style: {
                    backgroundColor: "rgba(255, 255, 255,0)",
                    borderRadius: "10px"
                }
            }}
         
        
        >        
        {   
        items.map((item,i)=>(
            <ImageCarousel name={item.name} description={item.description} image={item.image}/>
        ))
            
        }
        </CarouselItem>


    </CarouselBox>

        <Waves/>
        <Serviceheader/>
        <Droplet/>

      </HomeBox>
      
      </>

  )
}

export default Home