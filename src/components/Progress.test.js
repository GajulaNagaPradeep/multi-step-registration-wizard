import React from "react";
import { shallow } from "enzyme";
import Progress from "./Progress";

const props = { location: { pathname: "/" } };

let wrapped = shallow(<Progress {...props} />);
describe("Progress", () => {
  it("should be rendered correctly", () => {
    expect(wrapped).toMatchSnapshot();
  });
});
