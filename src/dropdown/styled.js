import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";

export const DropdownButton = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  opacity: ${({ visible = true }) => (visible ? 1 : 0)};
  background-color: #ffffffe6;
  box-sizing: border-box;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  border: 1px solid #ced6e0;
  color: #1a3b5d;
  padding: 5px 15px;
  p {
    margin: 0;
  }
`;
export const DropdownContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 40px;
  align-items: center;
`;
export const DropdownDate = styled.div`
  display: block;
  box-sizing: border-box;
  width: 100%;
  top: 0;
  position: absolute;
  border-radius: 5px;
  border: 1px solid #ced6e0;
  color: #1a3b5d;
  cursor: pointer;
  overflow-y: auto;
  max-height: 200px;
  background-color: #fff;
`;
export const Option = styled.div`
  border-bottom: 1px solid #fff;
  padding: 10px;
  cursor: pointer;
  :last-child {
    border-bottom: 0;
  }
  :hover {
    background-color: #b1b1b1;
  }
`;

export const MainButton = (props) => {
  const { label, ...rest } = props;
  return (
    <DropdownButton {...rest}>
      <p>{label}</p>
      <FaAngleDown />
    </DropdownButton>
  );
};
