import React, { useState } from "react";
import {
  Container,
  CardForm,
  InputBox,
  InputContainer,
  VisaCardContainer,
  DropDownBox,
  BtnSubmit
} from "./styled";
import FrontCard from "./frontCard";
import BackCard from "./backCard";
import DropdownDate from "../dropdown/dropdown";

const Card = (props) => {
  const [isFront, setIsFront] = useState(true);
  const [inputValue, setInputValue] = useState("");
  return (
    <Container>
      <CardForm>
        <VisaCardContainer>
          <FrontCard flipped={!isFront} />
          <BackCard flipped={isFront} />
        </VisaCardContainer>
        <InputContainer>
          <InputBox>
            <label>Card Holder Name</label>
            <input type="text" value={inputValue} />
          </InputBox>
          <InputBox>
            <label>Card Number</label>
            <input type="text" />
          </InputBox>
          <label>Expiry Date</label>
          <DropDownBox>
            <InputBox className={"Month"}>
              <DropdownDate
                options={[
                  {
                    label: "01",
                    value: `01`,
                  },
                  {
                    label: "02",
                    value: `02`,
                  },
                  {
                    label: "03",
                    value: `03`,
                  },
                  {
                    label: "04",
                    value: `04`,
                  },
                  {
                    label: "05",
                    value: `05`,
                  },
                  {
                    label: "06",
                    value: `06`,
                  },
                  {
                    label: "07",
                    value: `07`,
                  },
                  {
                    label: "08",
                    value: `08`,
                  },
                  {
                    label: "09",
                    value: `09`,
                  },
                  {
                    label: "10",
                    value: `10`,
                  },
                  {
                    label: "11",
                    value: `11`,
                  },
                  {
                    label: "12",
                    value: `12`,
                  },
                ]}
              />
            </InputBox>
            <InputBox className={"Year"}>
              <DropdownDate
                options={[
                  {
                    label: "2021",
                    value: `2021`,
                  },
                  {
                    label: "2022",
                    value: `2022`,
                  },
                  {
                    label: "2023",
                    value: `2023`,
                  },
                  {
                    label: "2024",
                    value: `2024`,
                  },
                  {
                    label: "2025",
                    value: `2025`,
                  },
                  {
                    label: "2026",
                    value: `2026`,
                  },
                  {
                    label: "2027",
                    value: `2027`,
                  },
                  {
                    label: "2028",
                    value: `2028`,
                  },
                  {
                    label: "2029",
                    value: `2029`,
                  },
                  {
                    label: "2030",
                    value: `2030`,
                  },
                ]}
              />
            </InputBox>
          </DropDownBox>
          <InputBox>
            <label>CVV</label>
            <input
              type="number"
              onBlur={() => setIsFront(true)}
              onFocus={() => setIsFront(false)}
            />
          </InputBox>
        </InputContainer>
          <BtnSubmit>Submit</BtnSubmit>
      </CardForm>
    </Container>
  );
};

export default Card;
