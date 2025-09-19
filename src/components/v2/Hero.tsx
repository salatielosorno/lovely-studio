// components/Hero.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import Image from "next/image";
import lovelyBanner from '../../../public/images/banner-lovely.svg'//'../../public/images/banner-lovely.svg'
import { PopupButton } from 'react-calendly';

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  //padding: theme.spacing(10, 2),
  textAlign: 'center',
}));

const Hero = () => {
  return (
    <HeroSection>
      <div className="md:container md:mx-auto">
        <Image className="w-full" src={lovelyBanner} alt="Salón de belleza" />
      </div>
      <div className="md:container md:mx-auto">
        <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex text-center">
          <h2 className="p-10 flex w-full justify-center text-center font-bold text-4xl">
            La belleza y el éxito comienzan aquí.
          </h2>
          <PopupButton
            url="https://calendly.com/lovely-studio"
            rootElement={(typeof window !== "undefined" ? document.getElementById("rootNode") : null)!}
            text="Agendar cita"
            className="bg-lsblack hover:bg-lsblack text-white py-2 px-4 rounded uppercase"
            styles={{ fontFamily: 'revert' }}
          />
        </div>
      </div>
    </HeroSection>
  );
};

export default Hero;
