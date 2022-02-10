import { Background, Container, TitleHeader } from "./styles";
import { BiCloudDownload } from "react-icons/bi";

const Header = () => {
  return (
    <Background>
      <Container>
        <TitleHeader>Cloud</TitleHeader> <BiCloudDownload color="white" size="70px" style={{ margin: "5px 0 10px 0"}}/>
      </Container>
    </Background>
  );
};

export default Header;
