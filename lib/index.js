"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Sample extends React.Component {
    render() {
        return (React.createElement("div", null, this.props.sampleName));
    }
}
Sample.defaultProps = {
    sampleName: "Hello World"
};
exports.default = Sample;
//# sourceMappingURL=index.js.map