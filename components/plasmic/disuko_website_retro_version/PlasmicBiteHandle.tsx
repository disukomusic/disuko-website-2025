// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: x4VgG6kzZCVuaqknYN7tgc
// Component: -7tromDQ_KOz

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

import Tilt from "@plasmicpkgs/react-parallax-tilt";
import { Reveal } from "@plasmicpkgs/react-awesome-reveal";
import YouTube from "@plasmicpkgs/react-youtube";

import { useScreenVariants as useScreenVariantsdmuurUfQuA6N } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: DmuurUFQuA6N/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: x4VgG6kzZCVuaqknYN7tgc/projectcss
import sty from "./PlasmicBiteHandle.module.css"; // plasmic-import: -7tromDQ_KOz/css

createPlasmicElementProxy;

export type PlasmicBiteHandle__VariantMembers = {};
export type PlasmicBiteHandle__VariantsArgs = {};
type VariantPropType = keyof PlasmicBiteHandle__VariantsArgs;
export const PlasmicBiteHandle__VariantProps = new Array<VariantPropType>();

export type PlasmicBiteHandle__ArgsType = {};
type ArgPropType = keyof PlasmicBiteHandle__ArgsType;
export const PlasmicBiteHandle__ArgProps = new Array<ArgPropType>();

export type PlasmicBiteHandle__OverridesType = {
  biteHandle?: Flex__<"div">;
  tilt?: Flex__<typeof Tilt>;
  section?: Flex__<"section">;
  youTube?: Flex__<typeof YouTube>;
  columns?: Flex__<"div">;
};

export interface DefaultBiteHandleProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicBiteHandle__RenderFunc(props: {
  variants: PlasmicBiteHandle__VariantsArgs;
  args: PlasmicBiteHandle__ArgsType;
  overrides: PlasmicBiteHandle__OverridesType;
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
    screen: useScreenVariantsdmuurUfQuA6N()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <title key="title">{PlasmicBiteHandle.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicBiteHandle.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicBiteHandle.pageMetadata.title}
        />
        <meta
          key="description"
          name="description"
          content={PlasmicBiteHandle.pageMetadata.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={PlasmicBiteHandle.pageMetadata.description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicBiteHandle.pageMetadata.description}
        />
        <meta
          key="og:image"
          property="og:image"
          content={PlasmicBiteHandle.pageMetadata.ogImageSrc}
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={PlasmicBiteHandle.pageMetadata.ogImageSrc}
        />
        <link rel="canonical" href={PlasmicBiteHandle.pageMetadata.canonical} />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"biteHandle"}
          data-plasmic-override={overrides.biteHandle}
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
            sty.biteHandle
          )}
        >
          <Tilt
            data-plasmic-name={"tilt"}
            data-plasmic-override={overrides.tilt}
            className={classNames("__wab_instance", sty.tilt)}
            glareEnable={false}
            tiltReverse={true}
            trackOnWindow={false}
          >
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img___7O6Mx)}
              displayHeight={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "auto"
                  : "306px"
              }
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "100%"
                  : "auto"
              }
              loading={"lazy"}
              src={{
                src: "/plasmic/disuko_website_retro_version/images/biteHandleLogoBeegPng.png",
                fullWidth: 3875,
                fullHeight: 1613,
                aspectRatio: undefined
              }}
            />
          </Tilt>
          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <Reveal
              cascade={false}
              className={classNames("__wab_instance", sty.reveal__wJB)}
              damping={0.5}
              effect={"bounce"}
              reverse={false}
              triggerOnce={true}
            >
              <YouTube
                data-plasmic-name={"youTube"}
                data-plasmic-override={overrides.youTube}
                className={classNames("__wab_instance", sty.youTube)}
                videoId={"T8scVcjPDDY"}
              />
            </Reveal>
          </section>
          <Reveal
            cascade={true}
            className={classNames("__wab_instance", sty.reveal__c3VlN)}
            direction={"down"}
            effect={"slide"}
            reverse={false}
            triggerOnce={true}
          >
            <div
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              className={classNames(projectcss.all, sty.columns)}
            >
              <div className={classNames(projectcss.all, sty.column___0D6Jd)}>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__wzWo
                  )}
                  component={Link}
                  href={"https://discord.gg/77KYqFb846\t"}
                  platform={"nextjs"}
                  target={"_blank"}
                >
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img___2Ejxt)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"25%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/disuko_website_retro_version/images/brandDiscordFilledPng.png",
                      fullWidth: 240,
                      fullHeight: 240,
                      aspectRatio: undefined
                    }}
                  />
                </PlasmicLink__>
              </div>
              <div className={classNames(projectcss.all, sty.column__dW1Ri)}>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__yrJh6
                  )}
                  component={Link}
                  href={"https://www.instagram.com/bitehandlerave/"}
                  platform={"nextjs"}
                  target={"_blank"}
                >
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__dWxn0)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"25%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/disuko_website_retro_version/images/brandInstagramPng.png",
                      fullWidth: 240,
                      fullHeight: 240,
                      aspectRatio: undefined
                    }}
                  />
                </PlasmicLink__>
              </div>
              <div className={classNames(projectcss.all, sty.column__sdwuf)}>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__wuLt7
                  )}
                  component={Link}
                  href={"https://www.twitch.tv/bitehandlerave"}
                  platform={"nextjs"}
                  target={"_blank"}
                >
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img___50Ux7)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"25%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/disuko_website_retro_version/images/brandTwitchPng.png",
                      fullWidth: 240,
                      fullHeight: 240,
                      aspectRatio: undefined
                    }}
                  />
                </PlasmicLink__>
              </div>
              <div className={classNames(projectcss.all, sty.column__zYuyL)}>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__bukkZ
                  )}
                  component={Link}
                  href={"https://www.youtube.com/@bitehandlerave"}
                  platform={"nextjs"}
                  target={"_blank"}
                >
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img___8O1Nh)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"25%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/disuko_website_retro_version/images/brandYoutubePng.png",
                      fullWidth: 240,
                      fullHeight: 240,
                      aspectRatio: undefined
                    }}
                  />
                </PlasmicLink__>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  biteHandle: ["biteHandle", "tilt", "section", "youTube", "columns"],
  tilt: ["tilt"],
  section: ["section", "youTube"],
  youTube: ["youTube"],
  columns: ["columns"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  biteHandle: "div";
  tilt: typeof Tilt;
  section: "section";
  youTube: typeof YouTube;
  columns: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBiteHandle__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBiteHandle__VariantsArgs;
    args?: PlasmicBiteHandle__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBiteHandle__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBiteHandle__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
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
          internalArgPropNames: PlasmicBiteHandle__ArgProps,
          internalVariantPropNames: PlasmicBiteHandle__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBiteHandle__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "biteHandle") {
    func.displayName = "PlasmicBiteHandle";
  } else {
    func.displayName = `PlasmicBiteHandle.${nodeName}`;
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

export const PlasmicBiteHandle = Object.assign(
  // Top-level PlasmicBiteHandle renders the root element
  withUsePlasmicAuth(makeNodeComponent("biteHandle")),
  {
    // Helper components rendering sub-elements
    tilt: makeNodeComponent("tilt"),
    section: makeNodeComponent("section"),
    youTube: makeNodeComponent("youTube"),
    columns: makeNodeComponent("columns"),

    // Metadata about props expected for PlasmicBiteHandle
    internalVariantProps: PlasmicBiteHandle__VariantProps,
    internalArgProps: PlasmicBiteHandle__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "BITE HANDLE 🔪",
      description:
        "Bite Handle is a balisong (butterfly knife) themed music event that features artists from the balisong community! ⚡",
      ogImageSrc:
        "https://site-assets.plasmic.app/6a3d3f8eef3b8e74a57a99129001545b.jpg",
      canonical: "https://disuko.gay/bitehandlerave"
    }
  }
);

export default PlasmicBiteHandle;
/* prettier-ignore-end */