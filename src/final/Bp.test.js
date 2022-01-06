import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"

import Data from "./Bp";
import View from "./View";
 test('check elements render ', () => {
     const {getByTestId} = render (<Data />);

     const headerEl1 = getByTestId("h1");
     const headerEl2 = getByTestId("h2");
     const labelEl3 = getByTestId("l1");
     const labelEl4 = getByTestId("l2");
     const labelEl5 = getByTestId("l3");

     expect(headerEl1.textContent).toBe("Disease Classifier")
     expect(headerEl2.textContent).toBe(" Hypertension Calculator")
     expect(labelEl3.textContent).toBe("Enter Date")
     expect(labelEl4.textContent).toBe("Systolic Pressure")
     expect(labelEl5.textContent).toBe("Diastolic Pressure")
 })
  test("check the input values", ()=>{
      const {getByTestId} = render(<Data/>);
      const inputEl1 = getByTestId("input1");
      const inputEl2 = getByTestId("input2");
      const inputEl3 = getByTestId("input3");

      expect(inputEl1.value).toBe("");
      expect(inputEl2.value).toBe(""); 
      expect(inputEl3.value).toBe("");
  })
  test('Check button', () => {
    const {getByTestId} = render(<Data/>);
    const btnEl = getByTestId("btn");

    expect(btnEl.textContent).toBe("Calculate");
  })
  test('change value of input works correctly', () => {
    const {getByTestId} = render(<Data/>);
    const inputEl1 = getByTestId("input1");

    fireEvent.change(inputEl1,{
        target:{
            value:"129"
        }
    })
  })
  test('check button click gets the correct values', () => {
    const {getByTestId} = render(<Data/>);
    //const {getByTestId} = render(<View/>);
    const btnEl = getByTestId("btn");
    //const sysBp = getByTestId("p1");
screen.getByText(/systolic pressure: 115/i)
    fireEvent.click(btnEl);

    expect(sysBp.value).toBe("");
  })
  
  
  