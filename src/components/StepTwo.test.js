import React from "react";
import { shallow } from "enzyme";
import StepTwo from "./StepTwo";

const props = {
  user: {
    first_name: "name",
    last_name: "",
    user_email: "",
    user_password: "",
  },
};

let wrapped = shallow(<StepTwo {...props} />);
describe("Progress", () => {
  it("should be rendered correctly", () => {
    expect(wrapped).toMatchSnapshot();
  });
});
