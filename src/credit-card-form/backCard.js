import React from "react";
import {CardVisaBack, CvvBox, CvvCode, CvvTitle, Magneticline, Code} from "./styled";

const BackCard = ({flipped, cvv}) => {
    //console.log("back",flipped)
    return (
        <CardVisaBack flipped={flipped}>
            <Magneticline />
            <CvvBox>
                <CvvTitle>CVV</CvvTitle>
                <CvvCode>
                   <Code>
                    {cvv}
                   </Code>
                </CvvCode>
            </CvvBox>
        </CardVisaBack>
    )
}

export default BackCard
