import styled from "styled-components";

export const S = {
  Container: styled.div`
    width: 100%;
    height: 300px;
    background-color: #3c3c3c;
  `,
  SecondDiv: styled.div`
    width: 43%;
    height: 100%;
    margin: 0 auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  ThirdDiv: styled.div`
    width: 100%;
    position: absolute;
  `,
  FourthDiv: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: -15px 0 40px 0;
  `,
  Fifth: styled.div`
    display: inline-flex;
    align-items: end;
    justify-content: start;
    font-size: 0.7rem;
    color: #b7b7b7;
  `,
  Img: styled.img`
    width: 7rem;
  `,
  Span: styled.span`
    color: #8c8c8c;
    font-size: 0.6rem;
  `,
  UlTag: styled.ul`
    display: flex;
    font-size: 0.8rem;
    font-weight: 800;
  `,
  LiTag: styled.li`
    list-style: none;
    padding: 0 5px;
  `,
  Atag: styled.a`
    text-decoration: none;
    color: white;
  `,
  Ptag: styled.p`
    padding-left: 35px;
  `,
};
