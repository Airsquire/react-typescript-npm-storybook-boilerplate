import * as Enzyme from "enzyme"
import * as Adapter from "enzyme-adapter-react-16"
Enzyme.configure({ adapter: new Adapter() })
import * as React from "react"
import Sample from "../"

describe("<Sample />", () => {
  it("renders Sample with Hello Airsquire", () => {
    const testDescription = "Hello Airsquire"
    const wrapper = Enzyme.shallow(
      <Sample
        sampleName= {testDescription}
      />
    )
    expect(wrapper.find("div").length).toBe(1)
    expect(wrapper.text()).toBe(testDescription)
  })
})
