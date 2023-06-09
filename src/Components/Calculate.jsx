import { useState, useEffect } from "react";
import styled from "styled-components";
import dollarImg from "/public/icon-dollar.svg";
import PersonIcon from "/public/icon-person.svg";

function Calculate({
  percent,
  setpercent,
  bill,
  setbill,
  numbpeople,
  setnumbpeople,
  settipPerson,
  settotalPerson,
  setbutCollor,
}) {
  // console.log((bill * percent) / 100 / numbpeople);
  useEffect(() => {
    if (numbpeople !== 0 && numbpeople !== "") {
      const calculatePercent = (bill * percent) / 100;
      settipPerson(calculatePercent / numbpeople);
      settotalPerson((calculatePercent + Number(bill)) / numbpeople);
    }
  }, [bill, numbpeople, percent]);

  return (
    <CalculateContainer>
      <BillConatainer>
        <h3>Bill</h3>
        <input
          value={bill}
          onChange={(e) => {
            setbill(e.target.value);
            setbutCollor("#26C2AE");
          }}
          type="number"
          id="bill"
          placeholder="0"
        />
      </BillConatainer>

      <SelectTip>
        <h3>Select Tip %</h3>
        <Percent>
          <button
            className={percent === "5" ? "active" : ""}
            percent={percent}
            onClick={() => {
              setpercent("5");
            }}
          >
            5%
          </button>
          <button
            className={percent === "10" ? "active" : ""}
            percent={percent}
            onClick={() => {
              setpercent("10");
            }}
          >
            10%
          </button>
          <button
            className={percent === "15" ? "active" : ""}
            percent={percent}
            onClick={() => {
              setpercent("15");
            }}
          >
            15%
          </button>
          <button
            className={percent === "25" ? "active" : ""}
            percent={percent}
            onClick={() => {
              setpercent("25");
            }}
          >
            25%
          </button>
          <button
            className={percent === "50" ? "active" : ""}
            percent={percent}
            onClick={() => {
              setpercent("50");
            }}
          >
            50%
          </button>
          <input
            value={percent}
            onChange={(e) => {
              setpercent(e.target.value);
              setbutCollor("#26C2AE");
            }}
            type="number"
            placeholder="Custom"
          />
        </Percent>
      </SelectTip>

      <PersonConatainer>
        <h3>
          Number of People <Error numbpeople={numbpeople}>Can’t be zero</Error>
        </h3>
        <StyledInput
          value={numbpeople}
          onChange={(e) => {
            setnumbpeople(e.target.value);
            setbutCollor("#26C2AE");
          }}
          type="number"
          id="person"
          placeholder="0"
          numbpeople={numbpeople}
        />
      </PersonConatainer>
    </CalculateContainer>
  );
}

const CalculateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;

  @media screen and (min-width: 1024px) {
    min-width: 385px;
    align-items: flex-start;
    margin: 16px 0px 16px 16px;
  }

  //styles for every input and label
  h3 {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #5e7a7d;
  }

  input {
    background: #f3f9fa;
    border-radius: 5px;
    border: 0;
    width: 311px;
    height: 48px;
    padding: 17px;
    text-align: right;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    text-align: right;
    color: #00474b;
    font-family: "Space Mono", monospace;
    font-weight: 700;
    cursor: pointer;
    @media screen and (min-width: 1024px) {
      :hover {
        outline: 2px solid #26c2ae;
      }
    }

    @media screen and (min-width: 1024px) {
      width: 379px;
    }

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
      display: none;
    }

    ::placeholder {
      font-weight: 700;
      font-size: 24px;
      line-height: 36px;
      text-align: right;
      color: #9ebbbd;
    }
  }
`;

// for bill input
const BillConatainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  input {
    background-image: url(${dollarImg});
    background-repeat: no-repeat;
    background-position: 19px 17px;
  }
`;

//for percent buttons and input

const SelectTip = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Percent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16.5px;

  .active {
    background-color: #26c2ae;
  }

  @media screen and (min-width: 1024px) {
    gap: 14px;
  }

  button {
    background: #00474b;
    border-radius: 5px;
    width: 146px;
    height: 48px;
    border: none;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color: #ffffff;
    font-family: "Space Mono", monospace;
    font-weight: 700;
    cursor: pointer;

    :focus {
      background: #26c2ae;
      color: #00474b;
    }

    @media screen and (min-width: 1024px) {
      width: 117px;

      :hover {
        background: #9fe8df;
        color: #00474b;
      }
    }
  }
  input {
    width: 146px;
    height: 48px;
    border-radius: 5px;
    border: none;
    background: #f3f9fa;
    padding: 17px;
    text-align: center;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color: #00474b;

    @media screen and (min-width: 1024px) {
      width: 117px;
      padding: 0;
    }

    ::placeholder {
      margin-left: 10px;
    }
  }
`;

const PersonConatainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  input {
    background-image: url(${PersonIcon});
    background-repeat: no-repeat;
    background-position: 19px 17px;
  }

  h3 {
    display: flex;
    justify-content: space-between;
  }
`;

//button
const PercentButton = styled.button`
  background: ${(props) =>
    props.percent === "5" ||
    props.percent === "10" ||
    props.percent === "15" ||
    props.percent === "25" ||
    props.percent === "50"
      ? "background: #26C2AE"
      : "background: #00474b"};
`;

//input
const StyledInput = styled.input`
  background: #f3f9fa;
  border-radius: 5px;
  border: 0;
  width: 311px;
  height: 48px;
  padding: 17px;
  text-align: right;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align: right;
  color: #00474b;
  cursor: pointer;
  outline: ${(props) =>
    props.numbpeople === "0" ? "2px solid #e17457" : "none"};
`;

const Error = styled.span`
  color: red;
  font-size: 16px;
  line-height: 24px;
  display: ${(props) => (props.numbpeople === "0" ? "blcok" : "none")};
`;

export default Calculate;
