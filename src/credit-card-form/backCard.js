import React from "react";
import {
  CardVisaBack,
  CvvBox,
  CvvCode,
  CvvTitle,
  Magneticline,
  Code,
  CvvCodeContainer,
  Signature,
  Terms,
} from "./styled";

const BackCard = ({ flipped, name, cvv }) => {
  //console.log("back",flipped)
  return (
    <CardVisaBack flipped={flipped}>
      <Magneticline />
      <CvvBox>
        <CvvTitle>CVV</CvvTitle>
        <CvvCodeContainer>
          <CvvCode>
            <Signature>{name}</Signature>
          </CvvCode>
          <Code>{cvv}</Code>
        </CvvCodeContainer>
        <Terms>
          <p>Use of this card is subject to the credit card agreement.</p>
        </Terms>
      </CvvBox>
    </CardVisaBack>
  );
};

export default BackCard;
