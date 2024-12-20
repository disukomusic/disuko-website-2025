// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type YoutubeSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function YoutubeSvgrepoComSvgIcon(props: YoutubeSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 49 49"}
      xmlSpace={"preserve"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M39.256 6.5H9.744C4.371 6.5 0 10.885 0 16.274v16.451c0 5.39 4.371 9.774 9.744 9.774h29.512c5.373 0 9.744-4.385 9.744-9.774V16.274c0-5.389-4.371-9.774-9.744-9.774zM47 32.726c0 4.287-3.474 7.774-7.744 7.774H9.744C5.474 40.5 2 37.012 2 32.726V16.274C2 11.988 5.474 8.5 9.744 8.5h29.512c4.27 0 7.744 3.488 7.744 7.774v16.452z"
        }
      ></path>

      <path
        d={
          "M33.36 24.138l-13.855-8.115a1.002 1.002 0 00-1.505.863v16.229a1.002 1.002 0 001 1 1 1 0 00.505-.137l13.855-8.113a1 1 0 000-1.727zM20 31.37V18.63l10.876 6.371L20 31.37z"
        }
      ></path>
    </svg>
  );
}

export default YoutubeSvgrepoComSvgIcon;
/* prettier-ignore-end */
