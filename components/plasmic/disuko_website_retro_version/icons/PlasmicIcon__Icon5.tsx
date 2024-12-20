// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon5Icon(props: Icon5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      xmlSpace={"preserve"}
      viewBox={"0 0 256 256"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M174.725 4.779l-24.223 41.956L126.28 88.69c-2.593 4.493.65 10.113 5.84 10.113h30.53c-8.388 68.539-66.912 121.81-137.684 121.81a5.014 5.014 0 00-5.013 5.014v23.668a5.015 5.015 0 005.013 5.01c89.369 0 163.064-68.341 171.6-155.508h32.442c5.19 0 8.433-5.617 5.84-10.113L210.624 46.73 186.4 4.78c-2.593-4.496-9.082-4.496-11.675 0z"
        }
        fill={"currentColor"}
        fillRule={"nonzero"}
        opacity={"1"}
      ></path>
    </svg>
  );
}

export default Icon5Icon;
/* prettier-ignore-end */
