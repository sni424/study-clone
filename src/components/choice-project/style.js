import styled from "styled-components";

export const S = {
  Container: styled.div`
    width: 100%;
    margin-bottom: 15px;
  `,

  UlTag: styled.ul`
    display: flex;
    align-items: center;
    justify-content: start;
    margin-left: -40px;
  `,
  LiTag: styled.li`
    list-style: none;
    margin: 0 10px 0 0;
    padding: 10px 15px;
    border: 2px solid rgb(215, 215, 215, 1);
    border-radius: 25px;
    cursor: pointer;
    &:hover {
      border: 2px solid black;
    }
  `,
  EcardDiv: styled.div`
    width: 100%;
    height: 250px;
    border: 2px solid rgb(215, 215, 215, 1);
    border-radius: 7px;
    margin-top: 15px;
    display: flex;
    align-items: top;
    justify-content: start;
  `,
  FirstDiv: styled.div`
    width: 80%;
    height: 80%;
    margin: 0 0 0 25px;
  `,
  EcardUlTag: styled.ul`
    display: flex;
    align-items: center;
    justify-content: start;
    list-style: none;
    margin-left: -35px;
  `,
  EcardBlackLiTag: styled.span`
    color: white;
    background-color: black;
    border-radius: 5px;
    font-size: 0.6rem;
    letter-spacing: 1px;
    padding: 5px;
    margin-right: 6px;
  `,
  EcardRedLiTag: styled.span`
    color: white;
    background-color: #ff6b6b;
    border-radius: 5px;
    font-size: 0.6rem;
    letter-spacing: 1px;
    padding: 5px;
    margin-right: 6px;
  `,
  HoneTag: styled.h1`
    font-weight: 500;
    font-size: 1.4rem;
  `,
  Ptag: styled.p`
    color: #9e9e9e;
    font-size: 0.96rem;
    font-weight: 600;
    line-height: 1.2rem;
  `,
};
