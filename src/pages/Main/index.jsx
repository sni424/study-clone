import styled from "styled-components";
import Header from "../../components/Header";
import SearchBar from "../../components/Search";
import mainbg from '../../asset/Image/main-bg.png'

const Container = styled.div`
width: 100%;
height: 100%;
`;
const BackImg = styled.div`
background-image: url(${mainbg});
max-width: 1980px;
height: 50vw;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
`;

const Main = () => {
  return (
    <Container >
      <BackImg>
      <Header />
      <SearchBar />
      </BackImg>
    </Container>
  )
}

export default Main