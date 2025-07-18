/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: x4VgG6kzZCVuaqknYN7tgc
// Component: dS2R33xrvHt2

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { Embed } from "@plasmicpkgs/plasmic-basic-components";

import { ThemeValue, useTheme } from "./PlasmicGlobalVariant__Theme"; // plasmic-import: 3K9IqsAFaaID/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: x4VgG6kzZCVuaqknYN7tgc/projectcss
import sty from "./PlasmicSnowflakes.module.css"; // plasmic-import: dS2R33xrvHt2/css

createPlasmicElementProxy;

export type PlasmicSnowflakes__VariantMembers = {};
export type PlasmicSnowflakes__VariantsArgs = {};
type VariantPropType = keyof PlasmicSnowflakes__VariantsArgs;
export const PlasmicSnowflakes__VariantProps = new Array<VariantPropType>();

export type PlasmicSnowflakes__ArgsType = {};
type ArgPropType = keyof PlasmicSnowflakes__ArgsType;
export const PlasmicSnowflakes__ArgProps = new Array<ArgPropType>();

export type PlasmicSnowflakes__OverridesType = {
  snowflakes?: Flex__<typeof Embed>;
};

export interface DefaultSnowflakesProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSnowflakes__RenderFunc(props: {
  variants: PlasmicSnowflakes__VariantsArgs;
  args: PlasmicSnowflakes__ArgsType;
  overrides: PlasmicSnowflakes__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    theme: useTheme()
  });

  return (
    <Embed
      data-plasmic-name={"snowflakes"}
      data-plasmic-override={overrides.snowflakes}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.snowflakes,
        {
          [projectcss.global_theme_classic]: hasVariant(
            globalVariants,
            "theme",
            "classic"
          ),
          [projectcss.global_theme_classic]: hasVariant(
            globalVariants,
            "theme",
            "classic"
          )
        }
      )}
      code={
        '\r\n\r\n\r\n\r\n<!DOCTYPE html>\r\n<html lang="en">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n    <style>\r\n        @keyframes snowflakes-fall {\r\n            0% { top: -10% }\r\n            100% { top: 100% }\r\n        }\r\n\r\n        @keyframes snowflakes-shake {\r\n            0%, 100% {\r\n                transform: translateX(0);\r\n            }\r\n            50% {\r\n                transform: translateX(80px);\r\n            }\r\n        }\r\n\r\n        .snowflake {\r\n            position: fixed;\r\n            top: -10%;\r\n            z-index: 9999;\r\n            user-select: none;\r\n            cursor: default;\r\n            animation-name: snowflakes-fall, snowflakes-shake;\r\n            animation-duration: 10s, 3s;\r\n            animation-timing-function: linear, ease-in-out;\r\n            animation-iteration-count: infinite, infinite;\r\n            animation-play-state: running, running;\r\n        }\r\n\r\n        .snowflakes {\r\n            /* Add additional styles for the snowflake container if needed */\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n    <div class="snowflakes">\r\n        <div class="snowflake"><img src="https://i5.glitter-graphics.org/pub/638/638145bltz6zqhdo.gif"/></div>\r\n        <div class="snowflake"><img src="https://i.ibb.co/q92vdYH/IMG-5494.gif"/></div>\r\n        <div class="snowflake"><img src="https://i5.glitter-graphics.org/pub/638/638145bltz6zqhdo.gif"/></div>\r\n        <div class="snowflake"><img src="https://i.ibb.co/q92vdYH/IMG-5494.gif"/></div>\r\n        <div class="snowflake"><img src="https://i5.glitter-graphics.org/pub/638/638145bltz6zqhdo.gif"/></div>\r\n        <div class="snowflake"><img src="https://i.ibb.co/q92vdYH/IMG-5494.gif"/></div>\r\n        <div class="snowflake"><img src="https://i5.glitter-graphics.org/pub/638/638145bltz6zqhdo.gif"/></div>\r\n        <div class="snowflake"><img src="https://i.ibb.co/q92vdYH/IMG-5494.gif"/></div>\r\n    </div>\r\n</body>\r\n</html>\r\n'
      }
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  snowflakes: ["snowflakes"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  snowflakes: typeof Embed;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSnowflakes__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSnowflakes__VariantsArgs;
    args?: PlasmicSnowflakes__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSnowflakes__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSnowflakes__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicSnowflakes__ArgProps,
          internalVariantPropNames: PlasmicSnowflakes__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSnowflakes__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "snowflakes") {
    func.displayName = "PlasmicSnowflakes";
  } else {
    func.displayName = `PlasmicSnowflakes.${nodeName}`;
  }
  return func;
}

export const PlasmicSnowflakes = Object.assign(
  // Top-level PlasmicSnowflakes renders the root element
  makeNodeComponent("snowflakes"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicSnowflakes
    internalVariantProps: PlasmicSnowflakes__VariantProps,
    internalArgProps: PlasmicSnowflakes__ArgProps
  }
);

export default PlasmicSnowflakes;
/* prettier-ignore-end */
