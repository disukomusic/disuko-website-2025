/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SunSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SunSvgIcon(props: SunSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "icon icon-tabler icon-tabler-sun"
      )}
      strokeWidth={"2"}
      stroke={"currentColor"}
      fill={"none"}
      strokeLinecap={"round"}
      strokeLinejoin={"round"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M0 0h24v24H0z"} fill={"none"} stroke={"none"}></path>

      <circle cx={"12"} cy={"12"} r={"4"}></circle>

      <path
        d={
          "M3 12h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7l-.7.7m0 11.4l.7.7m-12.1-.7l-.7.7"
        }
      ></path>
    </svg>
  );
}

export default SunSvgIcon;
/* prettier-ignore-end */
