/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LinkSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LinkSvgIcon(props: LinkSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "icon icon-tabler icon-tabler-link"
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

      <path d={"M10 14a3.5 3.5 0 005 0l4-4a3.5 3.5 0 00-5-5l-.5.5"}></path>

      <path d={"M14 10a3.5 3.5 0 00-5 0l-4 4a3.5 3.5 0 005 5l.5-.5"}></path>
    </svg>
  );
}

export default LinkSvgIcon;
/* prettier-ignore-end */
