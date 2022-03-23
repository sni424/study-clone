import styled from "styled-components";

export const S = {
  Container: styled.div`
    width: 100%;
    margin: 70px 0 15px 0;
  `,

  UlTag: styled.ul`
    display: flex;
    align-items: center;
    justify-content: start;
    margin: 0 0 30px -40px;
  `,
  LiTag: styled.li`
    list-style: none;
    margin: 0 10px 0 0;
    padding: 10px 15px;
    border: 2px solid #d7d7d7;
    border-radius: 25px;
    cursor: pointer;
    &:hover {
      border: 2px solid black;
    }
  `,
  HeartBackDiv: styled.div`
    padding: 5px;
    width: 2.5%;
    height: 15px;
    border-radius: 50%;
    text-align: center;
    background-color: #9e9e9e;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin: 15px 0 0 90%;
  `,
  HearDiv: styled.div`
    font-size: 13px;
    text-align: center;
  `,
  EcardDiv: styled.div`
    width: 100%;
    height: 250px;
    border: 2px solid #d7d7d7;
    border-radius: 7px;
    margin-top: 15px;
    display: flex;
    align-items: top;
    justify-content: space-between;
    position: relative;
  `,
  FirstDiv: styled.div`
    width: 92%;
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
  LastDiv: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 35px 0;
  `,
  SubDiv: styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    margin-top: -27px;
    font-size: 0.8rem;
  `,
  BigSpan: styled.span`
    display: flex;
    margin-right: 5px;
  `,
  NumberTag: styled.p`
    color: #ff6b6b;
  `,
  TextpTag: styled.p`
    color: #9e9e9e;
  `,
  LastSpan: styled.span`
    border: 2px solid #d7d7d7;
    border-radius: 25px;
    padding: 8px 15px;
    font-weight: 600;
  `,
  DaySpan: styled.span`
    background-color: #e85656;
    color: white;
    font-size: 0.7rem;
    letter-spacing: 1px;
    padding: 5px;
    border-radius: 5px;
  `,
};
