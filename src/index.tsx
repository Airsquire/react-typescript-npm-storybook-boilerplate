import * as React from "react"

export interface SampleProps {
    sampleName: string
}

class Sample extends React.Component<SampleProps> {
  private static defaultProps = {
    sampleName: "Hello World"
  }
  render() {
    return (
      <div>
        {this.props.sampleName}
      </div>
    )
  }
}
export default Sample
