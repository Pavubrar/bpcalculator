import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"
import {Enzyme, configure, shallow, mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });
import Result from "./Result";
import Kidney from "./Kidney";


describe("check the state changes after button click", ()=>{

    test('check button click gets the correct values', async() => {
        const wrapper = shallow (<Kidney kdArrays={[]} />,{
          wrappingComponent : Kidney,
        });
          const result = wrapper.getWrappingComponent();
          result.setProps({eGFR:kdArray.eGFR});
          console.log(wrapper.debug({ verbose: true }));
        //const {getByTestId} = render(<View />);
        //const {getByTestId} = render(<View/>);
        // const btnEl = getByTestId("btn");
        // const sysBp = await screen.findByTestId("p1");
        // fireEvent.click(btnEl);
        wrapper.find("#p2").at(1).simulate('click');
        expect(wrapper.find("#p2").text()).toBe();
      })
      test('check length of array ', async() => {
        const wrapper = mount(<Result kdArrays={[{eGFR: 15},
        {date:12/12/2022},
        {Result: "normal"},
        {Status:"ok"}]} />);
        expect(wrapper.find(Result).length).toEqual(1);

      })
})