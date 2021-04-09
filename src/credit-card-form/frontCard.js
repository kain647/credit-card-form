import React from "react";
import {CardExpiry, CardInfo, CardName, CardNumber, CardVisaFront} from "./styled"

const FrontCard = ({flipped}, props) => {
    //console.log("front",flipped)
    return (
        <CardVisaFront flipped={flipped}>
            <CardNumber>
                <span>****</span>
                <span>****</span>
                <span>****</span>
                <span>****</span>
            </CardNumber>
            <CardInfo>
                <CardName>
                    <span>Card Holder</span>
                    <p>NAME</p>
                </CardName>
                <CardExpiry>
                    <span>Expires</span>
                    <p>12/12</p>
                </CardExpiry>
            </CardInfo>
        </CardVisaFront>
    )
}

export default FrontCard
