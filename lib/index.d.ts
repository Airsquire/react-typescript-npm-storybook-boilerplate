/// <reference types="react" />
import * as React from "react";
export interface SampleProps {
    sampleName: string;
}
declare class Sample extends React.Component<SampleProps> {
    private static defaultProps;
    render(): JSX.Element;
}
export default Sample;
