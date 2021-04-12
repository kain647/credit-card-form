import React from "react";
import {CardExpiry, CardInfo, CardName, CardNumber, CardVisaFront} from "./styled"

const FrontCard = ({flipped, name, cardNumber, month, year}) => {
    //console.log("front",flipped)
    const first = cardNumber.slice(0,4) || "****"
    const second = cardNumber.slice(4,8) || "****"
    const third = cardNumber.slice(8,12) || "****"
    const fourth = cardNumber.slice(12,16) || "****"
    return (
        <CardVisaFront flipped={flipped}>
            <CardNumber>
                <span>{first}</span>
                <span>{second}</span>
                <span>{third}</span>
                <span>{fourth}</span>
            </CardNumber>
            <CardInfo>
                <CardName>
                    <span>Card Holder</span>
                    <p>{name}</p>
                </CardName>
                <CardExpiry>
                    <span>Expires</span>
                    <p>{month}/{year}</p>
                </CardExpiry>
            </CardInfo>
        </CardVisaFront>
    )
}

export default FrontCard
