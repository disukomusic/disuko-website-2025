// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandDiscordSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandDiscordSvgIcon(props: BrandDiscordSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "icon icon-tabler icon-tabler-brand-discord"
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

      <circle cx={"9"} cy={"12"} r={"1"}></circle>

      <circle cx={"15"} cy={"12"} r={"1"}></circle>

      <path d={"M7.5 7.5c3.5-1 5.5-1 9 0m-9.5 9c3.5 1 6.5 1 10 0"}></path>

      <path
        d={
          "M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.667.5-5.833-1.5-11.5-1.457-1.015-3-1.34-4.5-1.5l-1 2.5M8.5 17c0 1-1.356 3-1.832 3-1.429 0-2.698-1.667-3.333-3-.635-1.667-.476-5.833 1.428-11.5C6.151 4.485 7.545 4.16 9 4l1 2.5"
        }
      ></path>
    </svg>
  );
}

export default BrandDiscordSvgIcon;
/* prettier-ignore-end */
