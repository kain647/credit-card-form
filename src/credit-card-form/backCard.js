import React from "react";
import {CardVisaBack, CvvBox, CvvCode, CvvTitle, Magneticline} from "./styled";

const BackCard = ({flipped}) => {
    //console.log("back",flipped)
    return (
        <CardVisaBack flipped={flipped}>
            <Magneticline />
            <CvvBox>
                <CvvTitle>CVV</CvvTitle>
                <CvvCode></CvvCode>
            </CvvBox>
        </CardVisaBack>
    )
}

export default BackCard
