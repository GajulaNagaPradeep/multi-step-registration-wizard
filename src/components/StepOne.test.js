import React from "react";
import { shallow } from "enzyme";
import StepOne from "./StepOne";

const props = {
  user: {
    first_name: "name",
    last_name: "",
    user_email: "",
    user_password: "",
  },
};

let wrapped = shallow(<StepOne {...props} />);
describe("Progress", () => {
  it("should be rendered correctly", () => {
    expect(wrapped).toMatchSnapshot();
  });
});
