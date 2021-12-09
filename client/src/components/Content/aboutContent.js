import { HeroText, HeroImg, Img, HeroBackground } from "./HeroStyles";

import { Container, Section, Row, Column } from "../../styles/globalStyles";

const AboutContent = () => {
  return (
    <Container>
      <div>
        <Img src={"./assets/svg/deal.svg"} alt={"Chart picture"} />
      </div>
      <HeroText>About Us</HeroText>
    </Container>
  );
};

export default AboutContent;
