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
    width: 200%;
    display: flex;
    align-items: center;
    justify-content: start;
    overflow-x: hidden;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -59}vw);
  `,
  ProjectDiv: styled.div`
    width: 16rem;
    height: 340px;
    background-color: ${(props) => props.color};
    border-radius: 8px;
    margin: 15px 15px 15px 0;
  `,
};
