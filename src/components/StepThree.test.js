import React from "react";
import { shallow } from "enzyme";
import StepThree from "./StepThree";

let wrapped = shallow(<StepThree />);
describe("Progress", () => {
  it("should be rendered correctly", () => {
    expect(wrapped).toMatchSnapshot();
  });
});
