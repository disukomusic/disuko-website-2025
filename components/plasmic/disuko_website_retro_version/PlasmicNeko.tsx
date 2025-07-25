/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: x4VgG6kzZCVuaqknYN7tgc
// Component: ESUbYUmzi1NH

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

import { Embed } from "@plasmicpkgs/plasmic-basic-components";
import WindowButton from "../../WindowButton"; // plasmic-import: KZYdo-R8GYAn/component
import { AntdPopover } from "@plasmicpkgs/antd5/skinny/registerPopover";

import { ThemeValue, useTheme } from "./PlasmicGlobalVariant__Theme"; // plasmic-import: 3K9IqsAFaaID/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: x4VgG6kzZCVuaqknYN7tgc/projectcss
import sty from "./PlasmicNeko.module.css"; // plasmic-import: ESUbYUmzi1NH/css

import NounPixelHeart10989631SvgIcon from "./icons/PlasmicIcon__NounPixelHeart10989631Svg"; // plasmic-import: tvndHRt1AD9R/icon

createPlasmicElementProxy;

export type PlasmicNeko__VariantMembers = {};
export type PlasmicNeko__VariantsArgs = {};
type VariantPropType = keyof PlasmicNeko__VariantsArgs;
export const PlasmicNeko__VariantProps = new Array<VariantPropType>();

export type PlasmicNeko__ArgsType = {};
type ArgPropType = keyof PlasmicNeko__ArgsType;
export const PlasmicNeko__ArgProps = new Array<ArgPropType>();

export type PlasmicNeko__OverridesType = {
  root?: Flex__<"div">;
  neko?: Flex__<typeof Embed>;
  windowButton?: Flex__<typeof WindowButton>;
  popover?: Flex__<typeof AntdPopover>;
  svg?: Flex__<"svg">;
};

export interface DefaultNekoProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNeko__RenderFunc(props: {
  variants: PlasmicNeko__VariantsArgs;
  args: PlasmicNeko__ArgsType;
  overrides: PlasmicNeko__OverridesType;
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
    theme: useTheme()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicNeko.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicNeko.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicNeko.pageMetadata.title}
        />
      </Head>

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
            sty.root,
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
        >
          <Embed
            data-plasmic-name={"neko"}
            data-plasmic-override={overrides.neko}
            className={classNames("__wab_instance", sty.neko)}
            code={
              '\r\n\r\n<!DOCTYPE html>\r\n<html lang="en">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n</head>\r\n<body>\r\n\r\n    <script>\r\n                    // oneko.js: https://github.com/adryd325/oneko.js\r\n\r\n            (function oneko() {\r\n\r\n            const isReducedMotion =\r\n                window.matchMedia(`(prefers-reduced-motion: reduce)`) === true ||\r\n                window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;\r\n\r\n            if (isReducedMotion) return;\r\n\r\n            const nekoEl = document.createElement("div");\r\n\r\n            let nekoPosX = 32;\r\n            let nekoPosY = 32;\r\n\r\n            let mousePosX = 0;\r\n            let mousePosY = 0;\r\n\r\n            let frameCount = 0;\r\n            let idleTime = 0;\r\n            let idleAnimation = null;\r\n            let idleAnimationFrame = 0;\r\n\r\n            const nekoSpeed = 10;\r\n            const spriteSets = {\r\n                idle: [[-3, -3]],\r\n                alert: [[-7, -3]],\r\n                scratchSelf: [\r\n                [-5, 0],\r\n                [-6, 0],\r\n                [-7, 0],\r\n                ],\r\n                scratchWallN: [\r\n                [0, 0],\r\n                [0, -1],\r\n                ],\r\n                scratchWallS: [\r\n                [-7, -1],\r\n                [-6, -2],\r\n                ],\r\n                scratchWallE: [\r\n                [-2, -2],\r\n                [-2, -3],\r\n                ],\r\n                scratchWallW: [\r\n                [-4, 0],\r\n                [-4, -1],\r\n                ],\r\n                tired: [[-3, -2]],\r\n                sleeping: [\r\n                [-2, 0],\r\n                [-2, -1],\r\n                ],\r\n                N: [\r\n                [-1, -2],\r\n                [-1, -3],\r\n                ],\r\n                NE: [\r\n                [0, -2],\r\n                [0, -3],\r\n                ],\r\n                E: [\r\n                [-3, 0],\r\n                [-3, -1],\r\n                ],\r\n                SE: [\r\n                [-5, -1],\r\n                [-5, -2],\r\n                ],\r\n                S: [\r\n                [-6, -3],\r\n                [-7, -2],\r\n                ],\r\n                SW: [\r\n                [-5, -3],\r\n                [-6, -1],\r\n                ],\r\n                W: [\r\n                [-4, -2],\r\n                [-4, -3],\r\n                ],\r\n                NW: [\r\n                [-1, 0],\r\n                [-1, -1],\r\n                ],\r\n            };\r\n\r\n            function init() {\r\n                nekoEl.id = "oneko";\r\n                nekoEl.ariaHidden = true;\r\n                nekoEl.style.width = "32px";\r\n                nekoEl.style.height = "32px";\r\n                nekoEl.style.position = "fixed";\r\n                nekoEl.style.pointerEvents = "none";\r\n                nekoEl.style.imageRendering = "pixelated";\r\n                nekoEl.style.left = `${nekoPosX - 16}px`;\r\n                nekoEl.style.top = `${nekoPosY - 16}px`;\r\n                nekoEl.style.zIndex = Number.MAX_VALUE;\r\n\r\n                let nekoFile = "https://github.com/adryd325/oneko.js/blob/main/oneko.gif?raw=true"\r\n                const curScript = document.currentScript\r\n                if (curScript && curScript.dataset.cat) {\r\n                nekoFile = curScript.dataset.cat\r\n                }\r\n                nekoEl.style.backgroundImage = `url(${nekoFile})`;\r\n\r\n                document.body.appendChild(nekoEl);\r\n\r\n                document.addEventListener("mousemove", function (event) {\r\n                mousePosX = event.clientX;\r\n                mousePosY = event.clientY;\r\n                });\r\n\r\n                window.requestAnimationFrame(onAnimationFrame);\r\n                localStorage.setItem("nekoCreated", true);\r\n            }\r\n\r\n            let lastFrameTimestamp;\r\n\r\n            function onAnimationFrame(timestamp) {\r\n                // Stops execution if the neko element is removed from DOM\r\n                if (!nekoEl.isConnected) {\r\n                return;\r\n                }\r\n                if (!lastFrameTimestamp) {\r\n                lastFrameTimestamp = timestamp;\r\n                }\r\n                if (timestamp - lastFrameTimestamp > 100) {\r\n                lastFrameTimestamp = timestamp\r\n                frame()\r\n                }\r\n                window.requestAnimationFrame(onAnimationFrame);\r\n            }\r\n\r\n            function setSprite(name, frame) {\r\n                const sprite = spriteSets[name][frame % spriteSets[name].length];\r\n                nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;\r\n            }\r\n\r\n            function resetIdleAnimation() {\r\n                idleAnimation = null;\r\n                idleAnimationFrame = 0;\r\n            }\r\n\r\n            function idle() {\r\n                idleTime += 1;\r\n\r\n                // every ~ 20 seconds\r\n                if (\r\n                idleTime > 10 &&\r\n                Math.floor(Math.random() * 200) == 0 &&\r\n                idleAnimation == null\r\n                ) {\r\n                let avalibleIdleAnimations = ["sleeping", "scratchSelf"];\r\n                if (nekoPosX < 32) {\r\n                    avalibleIdleAnimations.push("scratchWallW");\r\n                }\r\n                if (nekoPosY < 32) {\r\n                    avalibleIdleAnimations.push("scratchWallN");\r\n                }\r\n                if (nekoPosX > window.innerWidth - 32) {\r\n                    avalibleIdleAnimations.push("scratchWallE");\r\n                }\r\n                if (nekoPosY > window.innerHeight - 32) {\r\n                    avalibleIdleAnimations.push("scratchWallS");\r\n                }\r\n                idleAnimation =\r\n                    avalibleIdleAnimations[\r\n                    Math.floor(Math.random() * avalibleIdleAnimations.length)\r\n                    ];\r\n                }\r\n\r\n                switch (idleAnimation) {\r\n                case "sleeping":\r\n                    if (idleAnimationFrame < 8) {\r\n                    setSprite("tired", 0);\r\n                    break;\r\n                    }\r\n                    setSprite("sleeping", Math.floor(idleAnimationFrame / 4));\r\n                    if (idleAnimationFrame > 192) {\r\n                    resetIdleAnimation();\r\n                    }\r\n                    break;\r\n                case "scratchWallN":\r\n                case "scratchWallS":\r\n                case "scratchWallE":\r\n                case "scratchWallW":\r\n                case "scratchSelf":\r\n                    setSprite(idleAnimation, idleAnimationFrame);\r\n                    if (idleAnimationFrame > 9) {\r\n                    resetIdleAnimation();\r\n                    }\r\n                    break;\r\n                default:\r\n                    setSprite("idle", 0);\r\n                    return;\r\n                }\r\n                idleAnimationFrame += 1;\r\n            }\r\n\r\n            function frame() {\r\n                frameCount += 1;\r\n                const diffX = nekoPosX - mousePosX;\r\n                const diffY = nekoPosY - mousePosY;\r\n                const distance = Math.sqrt(diffX ** 2 + diffY ** 2);\r\n\r\n                if (distance < nekoSpeed || distance < 48) {\r\n                idle();\r\n                return;\r\n                }\r\n\r\n                idleAnimation = null;\r\n                idleAnimationFrame = 0;\r\n\r\n                if (idleTime > 1) {\r\n                setSprite("alert", 0);\r\n                // count down after being alerted before moving\r\n                idleTime = Math.min(idleTime, 7);\r\n                idleTime -= 1;\r\n                return;\r\n                }\r\n\r\n                let direction;\r\n                direction = diffY / distance > 0.5 ? "N" : "";\r\n                direction += diffY / distance < -0.5 ? "S" : "";\r\n                direction += diffX / distance > 0.5 ? "W" : "";\r\n                direction += diffX / distance < -0.5 ? "E" : "";\r\n                setSprite(direction, frameCount);\r\n\r\n                nekoPosX -= (diffX / distance) * nekoSpeed;\r\n                nekoPosY -= (diffY / distance) * nekoSpeed;\r\n\r\n                nekoPosX = Math.min(Math.max(16, nekoPosX), window.innerWidth - 16);\r\n                nekoPosY = Math.min(Math.max(16, nekoPosY), window.innerHeight - 16);\r\n\r\n                nekoEl.style.left = `${nekoPosX - 16}px`;\r\n                nekoEl.style.top = `${nekoPosY - 16}px`;\r\n            }\r\n\r\n            init();\r\n            })();\r\n    </script>\r\n\r\n</body>\r\n</html>\r\n'
            }
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
                plasmic_plasmic_rich_components_css.plasmic_tokens,
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
              mouseEnterDelay={0}
              mouseLeaveDelay={0}
              onOpenChange={async (...eventArgs: any) => {
                generateStateOnChangeProp($state, ["popover", "open"]).apply(
                  null,
                  eventArgs
                );
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
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "neko", "windowButton", "popover", "svg"],
  neko: ["neko"],
  windowButton: ["windowButton", "popover", "svg"],
  popover: ["popover", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  neko: typeof Embed;
  windowButton: typeof WindowButton;
  popover: typeof AntdPopover;
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNeko__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNeko__VariantsArgs;
    args?: PlasmicNeko__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNeko__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNeko__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicNeko__ArgProps,
          internalVariantPropNames: PlasmicNeko__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNeko__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNeko";
  } else {
    func.displayName = `PlasmicNeko.${nodeName}`;
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

export const PlasmicNeko = Object.assign(
  // Top-level PlasmicNeko renders the root element
  withUsePlasmicAuth(makeNodeComponent("root")),
  {
    // Helper components rendering sub-elements
    neko: makeNodeComponent("neko"),
    windowButton: makeNodeComponent("windowButton"),
    popover: makeNodeComponent("popover"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicNeko
    internalVariantProps: PlasmicNeko__VariantProps,
    internalArgProps: PlasmicNeko__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "neko",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicNeko;
/* prettier-ignore-end */
