/// <reference types="react" />
import * as React from "react";
export interface InterfaceSampleProps {
    sampleName: string;
}
declare class Sample extends React.Component<InterfaceSampleProps> {
    private static defaultProps;
    render(): JSX.Element;
}
export default Sample;
