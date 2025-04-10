/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: x4VgG6kzZCVuaqknYN7tgc
// Component: btpvylgp3L5R

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
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";

import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";

import { Reveal } from "@plasmicpkgs/react-awesome-reveal";
import Window from "../../Window"; // plasmic-import: BWjgdOwFY_OO/component
import WindowButton from "../../WindowButton"; // plasmic-import: KZYdo-R8GYAn/component
import { AntdPopover } from "@plasmicpkgs/antd5/skinny/registerPopover";

import { useScreenVariants as useScreenVariantsdmuurUfQuA6N } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: DmuurUFQuA6N/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: x4VgG6kzZCVuaqknYN7tgc/projectcss
import sty from "./PlasmicOopsie.module.css"; // plasmic-import: btpvylgp3L5R/css

import NounPixelHeart10989631SvgIcon from "./icons/PlasmicIcon__NounPixelHeart10989631Svg"; // plasmic-import: tvndHRt1AD9R/icon

createPlasmicElementProxy;

export type PlasmicOopsie__VariantMembers = {};
export type PlasmicOopsie__VariantsArgs = {};
type VariantPropType = keyof PlasmicOopsie__VariantsArgs;
export const PlasmicOopsie__VariantProps = new Array<VariantPropType>();

export type PlasmicOopsie__ArgsType = {};
type ArgPropType = keyof PlasmicOopsie__ArgsType;
export const PlasmicOopsie__ArgProps = new Array<ArgPropType>();

export type PlasmicOopsie__OverridesType = {
  root?: Flex__<"div">;
  reveal?: Flex__<typeof Reveal>;
  freeBox?: Flex__<"div">;
  window?: Flex__<typeof Window>;
  img?: Flex__<typeof PlasmicImg__>;
  windowButton?: Flex__<typeof WindowButton>;
  popover?: Flex__<typeof AntdPopover>;
  svg?: Flex__<"svg">;
};

export interface DefaultOopsieProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicOopsie__RenderFunc(props: {
  variants: PlasmicOopsie__VariantsArgs;
  args: PlasmicOopsie__ArgsType;
  overrides: PlasmicOopsie__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "popover.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsdmuurUfQuA6N()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <Reveal
            data-plasmic-name={"reveal"}
            data-plasmic-override={overrides.reveal}
            className={classNames("__wab_instance", sty.reveal)}
            effect={"bounce"}
            triggerOnce={true}
          >
            <div
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              className={classNames(projectcss.all, sty.freeBox)}
            >
              <Window
                data-plasmic-name={"window"}
                data-plasmic-override={overrides.window}
                className={classNames("__wab_instance", sty.window)}
                windowImage={
                  <PlasmicImg__
                    data-plasmic-name={"img"}
                    data-plasmic-override={overrides.img}
                    alt={""}
                    className={classNames(sty.img)}
                    displayHeight={"141px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/disuko_website_retro_version/images/junorPng.png",
                      fullWidth: 700,
                      fullHeight: 700,
                      aspectRatio: undefined
                    }}
                  />
                }
                windowText={
                  "Uh Oh! You just plugged in a random flash drive! You're lucky I'm not a hacker or else I could've taken your entire list of passwords and all of your bank info. Stay safe :)"
                }
                windowTitle={"Oopsie!"}
              />

              <WindowButton
                data-plasmic-name={"windowButton"}
                data-plasmic-override={overrides.windowButton}
                className={classNames("__wab_instance", sty.windowButton)}
              >
                <AntdPopover
                  data-plasmic-name={"popover"}
                  data-plasmic-override={overrides.popover}
                  arrow={true}
                  className={classNames("__wab_instance", sty.popover)}
                  content={null}
                  contentText={"Back To Main Website"}
                  defaultStylesClassName={classNames(
                    projectcss.root_reset,
                    projectcss.plasmic_default_styles,
                    projectcss.plasmic_mixins,
                    projectcss.plasmic_tokens,
                    plasmic_antd_5_hostless_css.plasmic_tokens,
                    plasmic_plasmic_rich_components_css.plasmic_tokens
                  )}
                  mouseEnterDelay={0}
                  mouseLeaveDelay={0}
                  onOpenChange={async (...eventArgs: any) => {
                    generateStateOnChangeProp($state, [
                      "popover",
                      "open"
                    ]).apply(null, eventArgs);
                  }}
                  open={generateStateValueProp($state, ["popover", "open"])}
                  placement={"right"}
                  popoverScopeClassName={sty["popover__popover"]}
                  title={null}
                  trigger={"hover"}
                >
                  <NounPixelHeart10989631SvgIcon
                    data-plasmic-name={"svg"}
                    data-plasmic-override={overrides.svg}
                    className={classNames(projectcss.all, sty.svg)}
                    role={"img"}
                  />
                </AntdPopover>
              </WindowButton>
            </div>
          </Reveal>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "reveal",
    "freeBox",
    "window",
    "img",
    "windowButton",
    "popover",
    "svg"
  ],
  reveal: [
    "reveal",
    "freeBox",
    "window",
    "img",
    "windowButton",
    "popover",
    "svg"
  ],
  freeBox: ["freeBox", "window", "img", "windowButton", "popover", "svg"],
  window: ["window", "img"],
  img: ["img"],
  windowButton: ["windowButton", "popover", "svg"],
  popover: ["popover", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  reveal: typeof Reveal;
  freeBox: "div";
  window: typeof Window;
  img: typeof PlasmicImg__;
  windowButton: typeof WindowButton;
  popover: typeof AntdPopover;
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicOopsie__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicOopsie__VariantsArgs;
    args?: PlasmicOopsie__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicOopsie__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicOopsie__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicOopsie__ArgProps,
          internalVariantPropNames: PlasmicOopsie__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicOopsie__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicOopsie";
  } else {
    func.displayName = `PlasmicOopsie.${nodeName}`;
  }
  return func;
}

function withUsePlasmicAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const WithUsePlasmicAuthComponent: React.FC<P> = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "x4VgG6kzZCVuaqknYN7tgc"
    });

    return (
      <PlasmicDataSourceContextProvider__
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user
        }}
      >
        <WrappedComponent {...props} />
      </PlasmicDataSourceContextProvider__>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const PlasmicOopsie = Object.assign(
  // Top-level PlasmicOopsie renders the root element
  withUsePlasmicAuth(makeNodeComponent("root")),
  {
    // Helper components rendering sub-elements
    reveal: makeNodeComponent("reveal"),
    freeBox: makeNodeComponent("freeBox"),
    window: makeNodeComponent("window"),
    img: makeNodeComponent("img"),
    windowButton: makeNodeComponent("windowButton"),
    popover: makeNodeComponent("popover"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicOopsie
    internalVariantProps: PlasmicOopsie__VariantProps,
    internalArgProps: PlasmicOopsie__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicOopsie;
/* prettier-ignore-end */
