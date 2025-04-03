/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HeadphonesSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HeadphonesSvgIcon(props: HeadphonesSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "icon icon-tabler icon-tabler-headphones"
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

      <rect x={"4"} y={"13"} rx={"2"} width={"5"} height={"7"}></rect>

      <rect x={"15"} y={"13"} rx={"2"} width={"5"} height={"7"}></rect>

      <path d={"M4 15v-3a8 8 0 0116 0v3"}></path>
    </svg>
  );
}

export default HeadphonesSvgIcon;
/* prettier-ignore-end */
