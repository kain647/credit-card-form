import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Space Mono", monospace;
  user-select: none;
`;
export const CardForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  position: absolute;
  width: 570px;
  height: auto;
  border-radius: 15px;
  background-color: #fff;
  z-index: 0;
  padding: 40px;
  box-shadow: 0 30px 60px 0 rgb(90 116 148 / 40%);
  margin-top: 135px;
  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: end;
    border-radius: 0;
    margin-top: 0px;
  }
`;
export const VisaCardContainer = styled.div`
  display: flex;
  position: absolute;
  width: 430px;
  height: 270px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  top: -135px;
  z-index: 1;
  @media screen and (max-width: 768px) {
    display: flex;
    position: fixed;
    max-width: 400px;
    top: 0px;
    margin-top: 10px;
  }
`;
export const CardVisaFront = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  box-sizing: border-box;
  width: 430px;
  height: 270px;
  border-radius: 15px;
  padding: 25px 35px;
  transform-style: preserve-3d;
  transform: ${({ flipped }) =>
    `perspective(2000px) ${flipped ? "rotateY(180deg)" : "rotateY(0)"}`};
  background: linear-gradient(45deg, #343a40, #666666, #343a40);
  box-shadow: 0 20px 50px 0 rgb(14 42 90 / 60%);
  backface-visibility: hidden;
  transition: transform 0.9s ease-in-out;
  @media screen and (max-width: 768px) {
    display: flex;
    width: 90%;
    box-shadow: 0 20px 50px 0 rgb(14 42 90 / 30%);
  }
`;
export const CardVisaBack = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  box-sizing: border-box;
  width: 430px;
  height: 270px;
  border-radius: 15px;
  padding: 25px 15px;
  perspective: 2000px;
  transform-style: preserve-3d;
  transform: ${({ flipped }) =>
    `perspective(2000px) ${flipped ? "rotateY(180deg)" : "rotateY(0)"}`};
  background: linear-gradient(145deg, #343a40, #666666, #343a40);
  box-shadow: 0 20px 50px 0 rgb(14 42 90 / 60%);
  backface-visibility: hidden;
  transition: transform 0.9s ease-in-out;
  @media screen and (max-width: 768px) {
    display: flex;
    width: 90%;
    box-shadow: 0 20px 50px 0 rgb(14 42 90 / 30%);
  }
`;
export const CardInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: #fff;
  margin-top: auto;
`;
export const CardName = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 20px;
    text-transform: uppercase;
  }
`;
export const CardExpiry = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 20px;
  }
`;
export const CardNumber = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  letter-spacing: 2px;
  color: #fff;
  margin-top: auto;
`;
export const InputBox = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  margin-bottom: 25px;
  label {
    margin-bottom: 10px;
  }
  input {
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #ced6e0;
    color: #1a3b5d;
    font-size: 18px;
    padding: 5px 15px;
    transition: all 0.3s ease-in-out;
    outline: none;
    &.FullName {
      text-transform: uppercase;
    }
    :hover {
      border-color: #3d9cff;
    }
    :focus {
      box-shadow: 0px 10px 20px -13px rgb(32 56 117 / 35%);
    }
  }
  &.Year {
    display: flex;
    align-items: center;
  }
  &.Month {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
  margin-top: 150px;
  label {
    margin-bottom: 10px;
  }
  @media screen and (max-width: 768px) {
    margin-top: auto;
  }
`;
export const Magneticline = styled.div`
  display: flex;
  background: rgba(0, 0, 19, 0.8);
  width: 100%;
  height: 80px;
  margin-top: 20px;
  margin-bottom: 10px;
`;
export const CvvBox = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 10px;
`;
export const CvvCodeContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const Terms = styled.div`
  display: flex;
  font-size: 10px;
  color: #fff;
  margin-top: auto;
  p {
    padding: 0;
    margin: 0;
  }
`;
export const CvvTitle = styled.div`
  display: flex;
  margin-left: auto;
  padding-right: 10px;
  font-size: 15px;
  font-weight: 500;
  color: #fff;
  margin-bottom: 5px;
`;
export const CvvCode = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  height: 45px;
  width: 350px;
  background-image: repeating-linear-gradient(
    #87ceeb 0,
    #87ceeb 5px,
    #ffa500 5px,
    #ffa500 10px
  );
  color: #1a3b5d;
  font-size: 18px;
  border-radius: 4px 0px 0px 4px;
  text-align: center;
`;
export const Signature = styled.div`
  display: flex;
  color: #000000;
  font-family: "Liu Jian Mao Cao", cursive;
  text-transform: capitalize;
  margin-left: 15px;
`;
export const Code = styled.div`
  display: flex;
  height: 42px;
  width: 50px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  background-color: #efe9e9;
`;
export const DropDownBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const BtnSubmit = styled.button`
  display: flex;
  width: 100%;
  height: 55px;
  align-items: center;
  justify-content: center;
  padding: 5px 15px;
  font-size: 18px;
  box-shadow: inset 0px 1px 0px 0px #54a3f7;
  background: linear-gradient(to bottom, #007dc1 5%, #0061a7 100%);
  background-color: #007dc1;
  border-radius: 3px;
  border: 1px solid #124d77;
  color: #ffffff;
  text-decoration: none;
  text-shadow: 0px 1px 0px #154682;
  outline: none;
  cursor: pointer;
  :hover {
    background: linear-gradient(to bottom, #0061a7 5%, #007dc1 100%);
    background-color: #0061a7;
  }
  :active {
    position: relative;
    top: 1px;
  }
`;
export const Footer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  padding: 10px;
  user-select: none;
  z-index: 10;
  svg {
    width: var(--size);
    height: var(--size);
    --size: 24px;
    color: #fff;
    :hover {
      color: #6a737d;
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const ChipContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  img {
    width: 30px;
    height: auto;
  }
`;
export const Chip = styled.div`
  display: flex;
  position: relative;
  width: 50px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-image: linear-gradient(to bottom left, #ffecc7, #d0b978);
  overflow: hidden;
  margin-right: 40px;
`;
export const ChipLine = styled.div`
  display: flex;
  &.first {
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #333;
    top: 13px;
  }
  &.second {
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #333;
    top: 20px;
  }
  &.third {
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #333;
    top: 28px;
  }
  &.fourth {
    position: absolute;
    width: 1px;
    height: 50px;
    left: 25px;
    background-color: #333;
  }
`;
export const ChipMain = styled.div`
  display: flex;
  &.sixth {
    width: 20px;
    height: 25px;
    border: 1px solid #333;
    border-radius: 3px;
    background-image: linear-gradient(to bottom left, #efdbab, #e1cb94);
    z-index: 1;
  }
`;
