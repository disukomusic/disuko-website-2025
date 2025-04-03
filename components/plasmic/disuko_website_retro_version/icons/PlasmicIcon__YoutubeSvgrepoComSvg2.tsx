/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type YoutubeSvgrepoComSvg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function YoutubeSvgrepoComSvg2Icon(
  props: YoutubeSvgrepoComSvg2IconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 310 310"}
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
          "M297.917 64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359 0-61.369 5.776-72.517 19.938C0 79.663 0 100.008 0 128.166v53.669c0 54.551 12.896 82.248 83.386 82.248h143.226c34.216 0 53.176-4.788 65.442-16.527C304.633 235.518 310 215.863 310 181.835v-53.669c0-29.695-.841-50.16-12.083-63.521zm-98.896 97.765l-65.038 33.991a9.997 9.997 0 01-14.632-8.863v-67.764a10 10 0 0114.609-8.874l65.038 33.772a10 10 0 01.023 17.738z"
        }
      ></path>
    </svg>
  );
}

export default YoutubeSvgrepoComSvg2Icon;
/* prettier-ignore-end */
