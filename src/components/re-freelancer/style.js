import styled from "styled-components";

export const S = {
  Container: styled.div`
    width: 100%;
    margin-top: 45px;
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
    width: 360%;
    display: flex;
    align-items: center;
    justify-content: start;
    overflow-x: hidden;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -61}vw);
  `,
  ProjectDiv: styled.div`
    width: 8.8%;
    height: 340px;
    border-radius: 8px;
    margin: 15px 15px 15px 0;
  `,
  UpDiv: styled.div`
    height: 50%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-color: ${(props) => props.color};
    border: 2px solid ${(props) => props.border};
  `,
  DownDiv: styled.div`
    height: 50%;
    background-color: #3c3c3c;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    position: relative;
  `,
  DivTag: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  SpanTag: styled.span`
    color: white;
    font-size: 0.7rem;
    padding: 5px;
    border-radius: 5px;
    background-color: #3c3c3c;
    margin: 10px 0 0 15px;
  `,
  HeartBackDiv: styled.div`
    padding: 5px;
    width: 7%;
    height: 15px;
    border-radius: 50%;
    text-align: center;
    background-color: white;
    margin: 10px 15px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  `,
  HearDiv: styled.div`
    font-size: 13px;
    text-align: center;
  `,
  DownSmallDiv: styled.div`
    width: 80%;
    height: 80%;
    margin: 15px 15px;
    position: absolute;
  `,
  BigSpan: styled.span`
    display: flex;
    align-items: center;
    justify-content: start;
    margin: 0 auto;
  `,
  MiniSpan: styled.span`
    color: white;
    border: 1px solid white;
    border-radius: 5px;
    font-size: 0.6rem;
    letter-spacing: 1px;
    padding: 5px;
    margin-right: 6px;
  `,
  TextaTag: styled.a`
    color: white;
    text-decoration: none;
    position: relative;
    top: 15%;
  `,
  FlexDiv: styled.div`
    width: 110%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 80%;
  `,
  Ptag: styled.p`
    color: #a5a5a5;
    top: 80%;
    font-size: 80%;
    font-weight: 200;
  `,
  LastDiv: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 35px 0;
  `,
  LastSpan: styled.span`
    border: 2px solid #d7d7d7;
    border-radius: 25px;
    padding: 8px 15px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      border: 2px solid black;
      background-color: #d7d7d7;
    }
  `,
};
