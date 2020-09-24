import React from "react";
import { shallow, mount } from "enzyme";

import ProductSearch from "./index";

describe("Product Select", () => {
  it("renders shallow", () => {
    const component = shallow(<ProductSearch />);
    expect(component).toMatchSnapshot();
  }),
    it("renders mount", () => {
      const component = mount(<ProductSearch />);
      expect(component).toMatchSnapshot();
    });
});
