import React from "react";
import { shallow, mount } from "enzyme";

import ProductItem from "./index";

let item = {
  plNumber: "PL123456",
  name: "Paracetamol",
  dose: "500mg",
  substance: "Paracetamol",
  url: "www.drug.com",
};

describe("Product Item", () => {
  it("renders shallow", () => {
    const component = shallow(<ProductItem item={item} />);
    expect(component).toMatchSnapshot();
  }),
    it("renders mount", () => {
      const component = mount(<ProductItem item={item} />);
      expect(component).toMatchSnapshot();
    });
});
