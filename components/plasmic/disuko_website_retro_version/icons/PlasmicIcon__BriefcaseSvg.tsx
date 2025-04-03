/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BriefcaseSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BriefcaseSvgIcon(props: BriefcaseSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "icon icon-tabler icon-tabler-briefcase"
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

      <rect x={"3"} y={"7"} width={"18"} height={"13"} rx={"2"}></rect>

      <path
        d={"M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2m-4 5v.01M3 13a20 20 0 0018 0"}
      ></path>
    </svg>
  );
}

export default BriefcaseSvgIcon;
/* prettier-ignore-end */
