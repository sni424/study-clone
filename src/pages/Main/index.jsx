import Header from "../../components/Header";
import SearchBar from "../../components/Search";
import programmer from '../../asset/image/programmer.png'
import {S} from "./style";
import Count from "../../components/count";
import Footer from "../../components/Footer";
import Eblock from "../../components/arround-project";
import ReProject from "../../components/re-project";
import ChoiceProject from "../../components/choice-project";
import ReFreelancer from "../../components/re-freelancer";

const Main = () => {
  return (
    <S.Container >
      <S.BackImg>
      <Header />
      <SearchBar />
      <S.SecondDiv>
        <S.Img src={programmer} alr="progammer" />
        <S.TextDiv>
          #3월8일<br />
#세계여성의날<br />
#에이다러브레이스<br />
        </S.TextDiv>
      </S.SecondDiv>
      </S.BackImg>
<S.ThirdDiv>
      <Count />
      <Eblock />
      <ReProject />
      <ChoiceProject />
      <ReFreelancer />
      </S.ThirdDiv>
      <Footer />
    </S.Container>
  )
}

export default Main