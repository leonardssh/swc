// @filename: file.tsx
// @jsx: preserve
// @noLib: true
// @skipLibCheck: true
// @libFiles: react.d.ts,lib.d.ts
import _extends from "@swc/helpers/src/_extends.mjs";
const React = require('react');
export default function Component(props) {
    return(// Error extra property
    /*#__PURE__*/ React.createElement(AnotherComponent, _extends({}, props, {
        Property1: true
    })));
};
function AnotherComponent({ property1  }) {
    return /*#__PURE__*/ React.createElement("span", null, property1);
}
