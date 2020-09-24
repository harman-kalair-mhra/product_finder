import React from "react";
import { shallow, mount } from "enzyme";

import Header from "./index";

describe("Header", () => {
  it("renders shallow", () => {
    const component = shallow(<Header agency="MHRA"></Header>);
    expect(component).toMatchSnapshot();
  }),
    it("renders mount", () => {
      const component = mount(<Header agency="MHRA"></Header>);
      expect(component).toMatchSnapshot();
    });
});
