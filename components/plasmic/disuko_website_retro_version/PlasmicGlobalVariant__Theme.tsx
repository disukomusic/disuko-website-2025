/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type ThemeValue = "classic";
export const ThemeContext = React.createContext<ThemeValue | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

export function useTheme() {
  return React.useContext(ThemeContext);
}

export default ThemeContext;
/* prettier-ignore-end */
