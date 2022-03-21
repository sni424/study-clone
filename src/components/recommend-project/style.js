import styled from "styled-components";

export const S = {
  Container: styled.div`
    width: 100%;
    overflow-x: hidden;
  `,
  FirstDiv: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  ButtonDiv: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Img: styled.img`
    cursor: pointer;
  `,
  SecondDiv: styled.div`
    width: 234%;
    display: flex;
    align-items: center;
    justify-content: start;
    overflow-x: hidden;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -59}vw);
  `,
  ProjectDiv: styled.div`
    width: 100%;
    height: 340px;
    border-radius: 8px;
    margin: 15px 15px 15px 0;
  `,
  UpDiv: styled.div`
    height: 50%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-color: #181818;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  DownDiv: styled.div`
    z-index: 0;
    height: 50%;
    background-color: #3c3c3c;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  `,
  BackImg: styled.div`
    z-index: 1;
    width: 80%;
    height: 80%;
    margin: 5px 5px;
    text-align: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.url});
  `,
};
