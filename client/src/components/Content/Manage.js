import ItemModal from "./ItemModal";
import EmployeeList from "./EmployeeList";

import { HeroText, Img, HeroBackground } from "./HeroStyles";
import { Container, Section, Row, Column } from "../../styles/globalStyles";
const Manage = () => {
  return (
    <HeroBackground>
      <Container>
        <div>
          <Img src={"./assets/svg/Connection.svg"} alt={"Chart picture"} />
        </div>
        <HeroText style={{ marginBottom: "2rem", marginTop: "2rem" }}>
          You can Create, Read, Update and Delete from the List
        </HeroText>
        <Column style={{ textAlign: "center" }}>
          <ItemModal />
        </Column>
        <EmployeeList />
      </Container>
    </HeroBackground>
  );
};

export default Manage;
