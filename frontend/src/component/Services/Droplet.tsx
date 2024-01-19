
import { Box } from '@mui/material';

import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import Catering from '/Services/Catering.jpg';
import Stationary from '/Services/Stationary.jpg'
import Theater from '/Services/Theater.jpg';
import FitnessCenter  from '/Services/FitnessCenter.jpg';
import Salon  from '/Services/Salon.jpg';
import Party  from '/Services/Party.jpg';

const Droplet = () => {
  const Root = styled(Box)({
    fontFamily: 'Source Sans Pro, sans-serif',
    color: '#404040',
  });

  const Container = styled(Box)({
    width: '100%',
    marginTop: '100px',
    
    display: 'grid',
    gridTemplateColumns: '2fr 2fr 2fr ',
    placeItems: 'center',
    gap: '50px',
  });

  const keyframesDrop = keyframes`
    from {
      border-radius: 38% 62% 46% 54% / 46% 51% 49% 54%;
    }
    to {
      border-radius: 50%;
    }
  `;


  const Drop1 = styled(Box)({
    backgroundColor: 'rgba(48,177,206,0.2)',
    width: '250px',
    height: '200px',
    position: 'relative',
    boxShadow: 'inset 20px 20px 20px rgba(0, 0, 0, 0.1), 25px 35px 20px rgba(0, 0, 0, 0.1), 25px 30px 30px rgba(0, 0, 0, 0.1), inset -20px -20px 25px rgba(255, 255, 255, 0.8)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4rem',  
    transition: 'borderRadius 0.5s',
    overflow: 'hidden',
    textAlign: 'center',
    animation: `${keyframesDrop} 2s infinite alternate ease-in-out`,
    borderRadius: '38% 62% 46% 54% / 46% 51% 49% 54%',
    '&:hover': {
      backgroundImage: `url(${Catering})`,
      backgroundSize: 'cover',
      color: 'transparent',
    },
  });
  
  const Drop2 = styled(Box)({
    
    backgroundColor:'rgba(48,177,206,0.2)',
    width: '200px',
    height: '220px',
    marginLeft:'0px',
    boxShadow: 'inset -10px 30px 20px rgba(0, 0, 0, 0.1), 5px 35px 20px rgba(0, 0, 0, 0.1), -15px 30px 30px rgba(0, 0, 0, 0.1), inset 0px -20px 25px rgba(255, 255, 255, 0.8)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    padding: '4rem',
    transition: 'borderRadius 0.5s',
    overflow: 'hidden',
    textAlign: 'center',
    animation: `${keyframesDrop} 2s infinite alternate ease-in-out`,
    borderRadius: '38% 62% 46% 54% / 46% 51% 49% 54%',
    '&:hover': {
      backgroundImage: `url(${Stationary})`,
      backgroundSize: 'cover',
      color: 'transparent',
    },
  });
  const Drop3 = styled(Box)({
    backgroundColor:'rgba(48,177,206,0.2)',
    width: '240px',
    height: '160px',
    marginLeft:'0px',
    boxShadow: 'inset -60px 20px 20px rgba(0, 0, 0, 0.1), -25px 35px 20px rgba(0, 0, 0, 0.1), 25px 30px 30px rgba(0, 0, 0, 0.1), inset 30px -20px 25px rgba(255, 255, 255, 0.8)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem 0',
    padding: '4rem',
    transition: 'borderRadius 0.5s',
    overflow: 'hidden',
    textAlign: 'center',
    animation: `${keyframesDrop} 2s infinite alternate ease-in-out`,
    borderRadius: '38% 62% 46% 54% / 46% 51% 49% 54%',
    '&:hover': {
      backgroundImage: `url(${Theater})`,
      backgroundSize: 'cover',
      color: 'transparent',
    },
  });
  const Drop4 = styled(Box)({
    backgroundColor: 'rgba(48,177,206,0.2)',
    width: '250px',
    height: '200px',
    position: 'relative',
    boxShadow: 'inset 20px -30px 20px rgba(0, 0, 0, 0.1), 25px -25px 20px rgba(0, 0, 0, 0.1), 25px -30px 30px rgba(0, 0, 0, 0.1), inset -20px 20px 25px rgba(255, 255, 255, 0.8)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4rem',  
    transition: 'borderRadius 0.5s',
    overflow: 'hidden',
    textAlign: 'center',
    animation: `${keyframesDrop} 2s infinite alternate ease-in-out`,
    borderRadius: '38% 62% 46% 54% / 46% 51% 49% 54%',
    '&:hover': {
      backgroundImage: `url(${Salon})`,
      backgroundSize: 'cover',
      color: 'transparent',
    },
  });
  
  const Drop5 = styled(Box)({
    
    backgroundColor:'rgba(48,177,206,0.2)',
    width: '200px',
    height: '220px',
    marginLeft:'0px',
    boxShadow: 'inset 10px -30px 20px rgba(0, 0, 0, 0.1), 5px -25px 20px rgba(0, 0, 0, 0.1), -15px 20px 20px rgba(0, 0, 0, 0.1), inset 0px 30px 20px rgba(255, 255, 255, 0.8)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    padding: '4rem',
    transition: 'borderRadius 0.5s',
    overflow: 'hidden',
    textAlign: 'center',
    animation: `${keyframesDrop} 2s infinite alternate ease-in-out`,
    borderRadius: '38% 62% 46% 54% / 46% 51% 49% 54%',
    '&:hover': {
      backgroundImage: `url(${FitnessCenter})`,
      backgroundSize: 'cover',
      color: 'transparent',
    },
  });
  const Drop6 = styled(Box)({
    backgroundColor:'rgba(48,177,206,0.2)',
    width: '240px',
    height: '160px',
    marginLeft:'0px',
    boxShadow: 'inset -50px -40px 20px rgba(0, 0, 0, 0.1), -40px -20px 20px rgba(0, 0, 0, 0.1), 5px 30px 30px rgba(0, 0, 0, 0.1), inset 20px 20px 25px rgba(255, 255, 255, 0.8)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  
    padding: '4rem',
    transition: 'borderRadius 0.5s',
    overflow: 'hidden',
    textAlign: 'center',
    animation: `${keyframesDrop} 2s infinite alternate ease-in-out`,
    borderRadius: '38% 62% 46% 54% / 46% 51% 49% 54%',
    '&:hover': {
      backgroundImage: `url(${Party})`,
      backgroundSize: 'cover',
      color: 'transparent',
    },
  });
  
  
  

  return (
    <Root>
      <Container>
      <Drop1>
        <h2>Catering </h2>
        <p>Select and request catering services, including snacks, food, and beverages.</p>
      </Drop1>

      <Drop2>
        <h2>Stationery </h2>
        <p>Place orders for stationery items, such as gift items, chocolates, and tale books.</p>
      </Drop2>

      <Drop3>
        <h2>Movie theater</h2>
        <p>Reserve tickets for Resort-Movie experiences, ensuring preferred seating.</p>
      </Drop3>

      <Drop4>
        <h2>Beauty Salon</h2>
        <p>Schedule appointments and services at the beauty salon for various treatments.</p>
      </Drop4>

      <Drop5>
        <h2>Fitness center</h2>
        <p>Reserve workout sessions and equipment usage at the fitness center.</p>
      </Drop5>

      <Drop6>
        <h2>Party Hall</h2>
        <p>Secure reservations for the party hall, catering to various events like birthdays, weddings, and business gatherings.</p>
      </Drop6>
      </Container>
    </Root>
  );
};

export default Droplet;
