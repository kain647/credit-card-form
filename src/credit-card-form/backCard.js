import React from "react";
import {
  CardVisaBack,
  CvvBox,
  CvvCode,
  CvvTitle,
  Magneticline,
  Code,
  CvvCodeContainer,
  Signature
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
            <Signature>
                {name}
            </Signature>
            </CvvCode>
          <Code>{cvv}</Code>
        </CvvCodeContainer>
      </CvvBox>
    </CardVisaBack>
  );
};

export default BackCard;
