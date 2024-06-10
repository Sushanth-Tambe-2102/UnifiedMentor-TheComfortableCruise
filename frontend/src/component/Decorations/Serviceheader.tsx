
import { Box, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const ServiceHeader = () => {
  const animateKeyframes = keyframes`
    0%, 100% {
      clip-path: polygon(
        0% 45%,
        16% 44%,
        33% 50%,
        54% 60%,
        70% 61%,
        84% 59%,
        100% 52%,
        100% 100%,
        0% 100%
      );
    }
  
    50% {
      clip-path: polygon(
        0% 60%,
        15% 65%,
        34% 66%,
        51% 62%,
        67% 50%,
        84% 45%,
        100% 46%,
        100% 100%,
        0% 100%
      );
    }
  `;

  const ServiceHeaderContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px',
    width: '30%',

    

  });

  const color = `linear-gradient(60deg,rgba(0,59,97,1)  0% , rgba(4,105,151,1) 30%,  rgba(49,141,178,1) 50%,rgba(55,175,247,1) 70%, rgba(48,177,206,1) 100%)`;

  const TransparentTitle = styled(Typography)({
    width: '1000px',
    color: 'transparent',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    WebkitTextStroke: '2px rgb(4,105,151)',
    fontSize: '80px',
    fontWeight: 'bold',
    shapeRendering: 'crispEdges', // Replace shape-rendering with shapeRendering
  });
  
  const AnimatedTitle = styled(Typography)({
    width: '1000px',
    color: 'rgba(48,177,206)',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    animation: `${animateKeyframes} 4s ease-in-out infinite`,
    fontSize: '80px',
    fontWeight: 'bold',
    shapeRendering: 'crispEdges', // Replace shape-rendering with shapeRendering
  });

  return (
    <section>
      <ServiceHeaderContainer>
        <Box sx={{ position: 'relative' }}>
          <TransparentTitle variant="h2">Our Services</TransparentTitle>
          <AnimatedTitle variant="h2">Our Services</AnimatedTitle>
        </Box>
      </ServiceHeaderContainer>
    </section>
  );
};

export default ServiceHeader;
