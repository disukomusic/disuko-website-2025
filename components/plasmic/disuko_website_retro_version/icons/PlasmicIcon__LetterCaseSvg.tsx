// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LetterCaseSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LetterCaseSvgIcon(props: LetterCaseSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "icon icon-tabler icon-tabler-letter-case"
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

      <circle cx={"17.5"} cy={"15.5"} r={"3.5"}></circle>

      <path d={"M3 19V8.5a3.5 3.5 0 017 0V19m-7-6h7m11-1v7"}></path>
    </svg>
  );
}

export default LetterCaseSvgIcon;
/* prettier-ignore-end */
