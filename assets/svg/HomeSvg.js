import * as React from "react";
import Svg, { Path } from "react-native-svg";
const HomeSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      width: 30,
      height: 30,
      overflow: "visible",
      fill: "rgb(149, 149, 149)",
    }}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M0 0h24v24H0z" fill="none" />
    <Path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </Svg>
);
export default HomeSvg;