// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandYoutubeSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandYoutubeSvgIcon(props: BrandYoutubeSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "icon icon-tabler icon-tabler-brand-youtube"
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

      <rect x={"3"} y={"5"} width={"18"} height={"14"} rx={"4"}></rect>

      <path d={"M10 9l5 3-5 3z"}></path>
    </svg>
  );
}

export default BrandYoutubeSvgIcon;
/* prettier-ignore-end */
