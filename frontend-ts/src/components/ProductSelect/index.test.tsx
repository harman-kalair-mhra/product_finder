import React from "react";
import { shallow, mount } from "enzyme";

import ProductSelect from "./index";


describe("Product Search", () => {
  it("renders shallow", () => {
    const component = shallow(<ProductSelect name="MHRA" onSubmit />);
    expect(component).toMatchSnapshot();
  }),
    it("renders mount", () => {
      const component = mount(<ProductSelect />);
      expect(component).toMatchSnapshot();
    });
});
