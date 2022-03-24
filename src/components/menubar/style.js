import styled from "styled-components";

export const S = {
  Container: styled.div`
    top: 0;
    width: 100%;
    height: 700px;
    background-color: gray;
    opacity: 0.2;
    z-index: 98;
    position: absolute;
  `,
  FirstDiv: styled.div`
    width: 210px;
    height: 253px;
    border: 1px solid white;
    z-index: 99;
    background: black;
    border-radius: 15px;
    left: 74%;
  `,
  Ultag: styled.ul`
    list-style: none;
    width: 95%;
    height: 95%;
    margin: 25px 0 0 -20px;
    color: white;
    font-size: 14px;
  `,
  UpLiTag: styled.li`
    padding-bottom: 8px;
  `,
  LineTag: styled.li`
    width: 85%;
    border-bottom: 0.1rem solid #e1e1e1;
  `,
  DownLiTag: styled.li`
    padding-top: 10px;
  `,
};
