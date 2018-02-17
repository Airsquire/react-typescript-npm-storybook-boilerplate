import * as React from "react"

export interface InterfaceSampleProps {
    sampleName: string
}

class Sample extends React.Component<InterfaceSampleProps> {
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
