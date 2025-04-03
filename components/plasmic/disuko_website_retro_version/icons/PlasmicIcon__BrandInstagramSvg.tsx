/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandInstagramSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandInstagramSvgIcon(props: BrandInstagramSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "icon icon-tabler icon-tabler-brand-instagram"
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

      <rect x={"4"} y={"4"} width={"16"} height={"16"} rx={"4"}></rect>

      <circle cx={"12"} cy={"12"} r={"3"}></circle>

      <path d={"M16.5 7.5v.001"}></path>
    </svg>
  );
}

export default BrandInstagramSvgIcon;
/* prettier-ignore-end */
