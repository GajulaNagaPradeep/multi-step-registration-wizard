import React from "react";
import { shallow } from "enzyme";
import Heading from "./Heading";

const title = "Test Title";
let wrapped = shallow(<Heading>{title}</Heading>);
describe("Heading", () => {
  it("should be rendered correctly", () => {
    expect(wrapped).toMatchSnapshot();
  });
});
