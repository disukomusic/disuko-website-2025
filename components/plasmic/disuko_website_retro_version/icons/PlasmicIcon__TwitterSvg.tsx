/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TwitterSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TwitterSvgIcon(props: TwitterSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 32 32"}
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
          "M31.937 6.093a13.359 13.359 0 01-3.765 1.032 6.603 6.603 0 002.885-3.631 13.683 13.683 0 01-4.172 1.579 6.56 6.56 0 00-11.178 5.973c-5.453-.255-10.287-2.875-13.52-6.833a6.458 6.458 0 00-.891 3.303 6.555 6.555 0 002.916 5.457 6.518 6.518 0 01-2.968-.817v.079a6.567 6.567 0 005.26 6.437 6.758 6.758 0 01-1.724.229c-.421 0-.823-.041-1.224-.115a6.59 6.59 0 006.14 4.557 13.169 13.169 0 01-8.135 2.801 13.01 13.01 0 01-1.563-.088 18.656 18.656 0 0010.079 2.948c12.067 0 18.661-9.995 18.661-18.651 0-.276 0-.557-.021-.839a13.132 13.132 0 003.281-3.396z"
        }
      ></path>
    </svg>
  );
}

export default TwitterSvgIcon;
/* prettier-ignore-end */
