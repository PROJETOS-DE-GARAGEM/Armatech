import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ChevronDown = (props) => (
  <Svg
    style={{
        xmlns: "http://www.w3.org/2000/svg",
        width: 20,
        height: 20,
        fill:"#2c2c2c",
    }}
    viewBox="0 0 20 20"
    {...props}
  >
    <Path
      d="M10 14a.997.997 0 01-.707-.293l-5-5a.999.999 0 111.414-1.414L10 11.586l4.293-4.293a.999.999 0 111.414 1.414l-5 5A.997.997 0 0110 14z"
    />
  </Svg>
);
export default ChevronDown;