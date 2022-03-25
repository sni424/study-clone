import { useState } from "react";
import {S} from "./style";
import Header from "../../components/Header";
import SearchBar from "../../components/Search";
import programmer from '../../asset/image/programmer.png'
import Count from "../../components/count";
import Footer from "../../components/Footer";
import Eblock from "../../components/arround-project";
import ReProject from "../../components/re-project";
import ChoiceProject from "../../components/choice-project";
import ReFreelancer from "../../components/re-freelancer";
import MenuBar from "../../components/menubar";
import Blind from "../../components/blind";

const Main = () => {
  const [show,setShow] = useState(true);

  return (
    <S.Container >
      {show === false &&
      <>
      <Blind />
      <MenuBar />
      </>}
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
      {show === true &&
      <>
      <S.ThirdDiv>
      <Count />
      <Eblock />
      <ReProject />
      <ChoiceProject />
      <ReFreelancer />
      </S.ThirdDiv>
      <Footer />
      </>
      }
    </S.Container>
  )
}

export default Main