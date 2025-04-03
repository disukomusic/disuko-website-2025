/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShirtSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShirtSvgIcon(props: ShirtSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "icon icon-tabler icon-tabler-shirt"
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

      <path
        d={
          "M15 4l6 2v5h-3v8a1 1 0 01-1 1H7a1 1 0 01-1-1v-8H3V6l6-2a3 3 0 006 0"
        }
      ></path>
    </svg>
  );
}

export default ShirtSvgIcon;
/* prettier-ignore-end */
