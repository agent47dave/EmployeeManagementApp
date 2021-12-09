import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, MainHeading } from "../../styles/globalStyles";
import {
  HeroImg,
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroButton
} from "./HeroStyles";

const Hero = () => {
  return (
    <HeroSection>
      <HeroImg src="./assets/intro-bg.jpg" />
      <Container>
        <MainHeading>Your data is secure with us</MainHeading>
        <HeroText>
          We provide the best security systems for clients all over the world
        </HeroText>
        <ButtonWrapper>
          <Link to="Employee">
            <Button>Get Started</Button>
          </Link>
          <HeroButton>Find More</HeroButton>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
