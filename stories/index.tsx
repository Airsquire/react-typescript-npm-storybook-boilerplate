import { text, withKnobs } from "@storybook/addon-knobs/react"
import { storiesOf } from "@storybook/react"
import * as React from "react"
import Sample from "../"
const SampleStory = storiesOf("Sample", module)
SampleStory.addDecorator(withKnobs)
SampleStory.add("default", () => {
  const sampleText = text("Label", "Hello Airsquire")
  return (
    <Sample
      sampleName={sampleText}
    />
  )
})
