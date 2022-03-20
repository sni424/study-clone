import Header from "../../components/Header";
import SearchBar from "../../components/Search";
import programmer from '../../asset/image/programmer.png'
import {S} from "./style";
import Count from "../../components/Count";
import Footer from "../../components/Footer";

const Main = () => {
  return (
    <S.Container >
      <S.BackImg>
      <Header />
      <SearchBar />
      <S.ThirdDiv>
        <S.Img src={programmer} alr="progammer" />
        <S.TextDiv>
          #3월8일<br />
#세계여성의날<br />
#에이다러브레이스<br />
        </S.TextDiv>
      </S.ThirdDiv>
      </S.BackImg>
      <Count />
      <Footer />
    </S.Container>
  )
}

export default Main