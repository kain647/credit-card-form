import React from "react";
import { AiFillGithub } from "react-icons/ai";
import {
  Container,
  CardForm,
  InputBox,
  InputContainer,
  VisaCardContainer,
  DropDownBox,
  BtnSubmit,
  Footer,
} from "./styled";
import FrontCard from "./frontCard";
import BackCard from "./backCard";
import DropdownDate from "../dropdown/dropdown";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "NAME",
      cardNumber: "",
      month: "01",
      year: "21",
      cvv: "",
      isFront: "false",
    };
  }
  render() {
    const { isFront, name, cardNumber, month, year, cvv } = this.state;
    return (
      <Container>
        <CardForm>
          <VisaCardContainer>
            <FrontCard
              name={name}
              month={month}
              year={year}
              cardNumber={cardNumber}
              flipped={!isFront}
            />
            <BackCard cvv={cvv} name={name} flipped={isFront} />
          </VisaCardContainer>
          <InputContainer>
            <InputBox>
              <label>Card Holder Name</label>
              <input
                  className={"FullName"}
                type="text"
                onChange={(e) =>
                  this.setState({
                    name: e.target.value.slice(0, 30),
                  })
                }
              />
            </InputBox>
            <InputBox>
              <label>Card Number</label>
              <input
                value={cardNumber}
                type="number"
                onChange={(e) =>
                  this.setState({
                    cardNumber: e.target.value.slice(0, 16),
                  })
                }
              />
            </InputBox>
            <label>Expiry Date</label>
            <DropDownBox>
              <InputBox className={"Month"}>
                <DropdownDate
                  onChange={(value) => this.setState({ month: value })}
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
                  onChange={(value) => this.setState({ year: value })}
                  options={[
                    {
                      label: "2021",
                      value: `21`,
                    },
                    {
                      label: "2022",
                      value: `22`,
                    },
                    {
                      label: "2023",
                      value: `23`,
                    },
                    {
                      label: "2024",
                      value: `24`,
                    },
                    {
                      label: "2025",
                      value: `25`,
                    },
                    {
                      label: "2026",
                      value: `26`,
                    },
                    {
                      label: "2027",
                      value: `27`,
                    },
                    {
                      label: "2028",
                      value: `28`,
                    },
                    {
                      label: "2029",
                      value: `29`,
                    },
                    {
                      label: "2030",
                      value: `30`,
                    },
                  ]}
                />
              </InputBox>
            </DropDownBox>
            <InputBox>
              <label>CVV</label>
              <input
                value={cvv}
                onChange={(e) =>
                  this.setState({
                    cvv: e.target.value.slice(0, 3),
                  })
                }
                type="number"
                onBlur={() => this.setState({ isFront: true })}
                onFocus={() => this.setState({ isFront: false })}
              />
            </InputBox>
          </InputContainer>
          <BtnSubmit>Submit</BtnSubmit>
        </CardForm>
        <Footer>
          <a href="https://github.com/kain647" target="_blank">
            <AiFillGithub />
          </a>
        </Footer>
      </Container>
    );
  }
}
export default Card;
