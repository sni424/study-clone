import styled from "styled-components";
import mainbg from "../../asset/image/main-bg.png";

export const S = {
  Container: styled.div`
    width: 100%;
    height: 100%;
  `,
  BackImg: styled.div`
    background-image: url(${mainbg});
    max-width: 1980px;
    background-size: 120%;
    background-repeat: no-repeat;
    background-position: center;
  `,
  SecondDiv: styled.div`
    padding-top: 70px;
    width: 60%;
    margin: 0 auto;
    display: flex;
    align-items: end;
    justify-content: start;
  `,
  Img: styled.img`
    width: 60vh;
    height: 60vh;
    border-radius: 15px;
  `,
  TextDiv: styled.div`
    font-family: "KoPubWorldDotum", sans-serif;
    font-size: 1.8rem;
    font-weight: 700;
    bottom: 0;
    padding-left: 30px;
  `,
  ThirdDiv: styled.div`
    width: 60%;
    margin: 0 auto;
  `,
};
