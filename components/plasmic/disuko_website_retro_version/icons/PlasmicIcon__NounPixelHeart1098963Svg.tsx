/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NounPixelHeart1098963SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NounPixelHeart1098963SvgIcon(
  props: NounPixelHeart1098963SvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 100 125"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M20 33.7v-8h-8.6v24.1H20v-8zm17.1-8h8.6v-8.1H20v8.1h8.5zM20 49.8h8.6v8H20zm25.7-24.1h8.6v8.1h-8.6zm0 48.3h8.6v8h-8.6z"
        }
      ></path>

      <path
        d={
          "M71.5 25.7H80v-8.1H54.3v8.1h8.6zm-8.6 32.2h8.6v8h-8.6zm8.6-8.1h8.6v8h-8.6zM80 25.7v24.1h8.6V25.7zM54.3 65.9h8.6V74h-8.6zm-25.8-8h8.6v8h-8.6zm8.6 8h8.6V74h-8.6z"
        }
      ></path>

      <text
        x={"0"}
        y={"115"}
        fill={"currentColor"}
        fontSize={"5"}
        fontWeight={"bold"}
        fontFamily={
          "'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
        }
      >
        Created by Juliette Wang
      </text>

      <text
        x={"0"}
        y={"120"}
        fill={"currentColor"}
        fontSize={"5"}
        fontWeight={"bold"}
        fontFamily={
          "'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
        }
      >
        from the Noun Project
      </text>
    </svg>
  );
}

export default NounPixelHeart1098963SvgIcon;
/* prettier-ignore-end */
