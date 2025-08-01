/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: x4VgG6kzZCVuaqknYN7tgc
// Component: shKoGjSwLEEB

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

import { useScreenVariants as useScreenVariantsdmuurUfQuA6N } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: DmuurUFQuA6N/globalVariant
import { ThemeValue, useTheme } from "./PlasmicGlobalVariant__Theme"; // plasmic-import: 3K9IqsAFaaID/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: x4VgG6kzZCVuaqknYN7tgc/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: shKoGjSwLEEB/css

createPlasmicElementProxy;

export type PlasmicFooter__VariantMembers = {};
export type PlasmicFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter__OverridesType = {
  root?: Flex__<"div">;
  columns?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  rpsLink?: Flex__<"a"> & Partial<LinkProps>;
  dotgay?: Flex__<"a"> & Partial<LinkProps>;
  embedHtml?: Flex__<typeof Embed>;
};

export interface DefaultFooterProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;
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
    screen: useScreenVariantsdmuurUfQuA6N(),
    theme: useTheme()
  });

  return (
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
          ),
          [sty.rootglobal_theme_classic]: hasVariant(
            globalVariants,
            "theme",
            "classic"
          )
        }
      )}
    >
      <Stack__
        as={"div"}
        data-plasmic-name={"columns"}
        data-plasmic-override={overrides.columns}
        hasGap={true}
        className={classNames(projectcss.all, sty.columns, {
          [sty.columnsglobal_theme_classic]: hasVariant(
            globalVariants,
            "theme",
            "classic"
          )
        })}
      >
        <div className={classNames(projectcss.all, sty.column__fE1Co)}>
          <Stack__
            as={"div"}
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            <PlasmicLink__
              data-plasmic-name={"rpsLink"}
              data-plasmic-override={overrides.rpsLink}
              className={classNames(projectcss.all, projectcss.a, sty.rpsLink)}
              component={Link}
              href={"https://redpandastudios.net"}
              platform={"nextjs"}
              target={"_blank"}
            >
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__l9Yle)}
                displayHeight={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "64px"
                    : "48px"
                }
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "64px"
                    : "auto"
                }
                loading={"lazy"}
                src={{
                  src: "/plasmic/disuko_website_retro_version/images/rpsLogo2024Png.png",
                  fullWidth: 912,
                  fullHeight: 404,
                  aspectRatio: undefined
                }}
              />
            </PlasmicLink__>
          </Stack__>
        </div>
        <div className={classNames(projectcss.all, sty.column___7Zhwx)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___76Zlv,
              {
                [sty.textglobal_theme_classic___76ZlVeNktM]: hasVariant(
                  globalVariants,
                  "theme",
                  "classic"
                )
              }
            )}
          >
            {"\u00a9 Red Panda Studios 2024"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__kdu93,
              {
                [sty.textglobal_theme_classic__kdu93ENktM]: hasVariant(
                  globalVariants,
                  "theme",
                  "classic"
                )
              }
            )}
          >
            {"icons from tabler"}
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.column__e7FGn)}>
          <PlasmicLink__
            data-plasmic-name={"dotgay"}
            data-plasmic-override={overrides.dotgay}
            className={classNames(projectcss.all, projectcss.a, sty.dotgay)}
            component={Link}
            href={"https://www.ohhey.gay"}
            platform={"nextjs"}
            target={"_blank"}
          >
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img___0KnN)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"56px"}
              loading={"lazy"}
              src={{
                src: "/plasmic/disuko_website_retro_version/images/dotGayRgbPng.png",
                fullWidth: 210,
                fullHeight: 92,
                aspectRatio: undefined
              }}
            />
          </PlasmicLink__>
        </div>
        <div className={classNames(projectcss.all, sty.column__eh7Rf)}>
          <Embed
            data-plasmic-name={"embedHtml"}
            data-plasmic-override={overrides.embedHtml}
            className={classNames("__wab_instance", sty.embedHtml)}
            code={
              "<div>\r\n  <strong>last updated:</strong> <span id=\"commit-date\"></span>\r\n</div>\r\n<div id=\"latest-commit\"></div>\r\n\r\n<script>\r\n  const owner = 'disukomusic';\r\n  const repo = 'disuko-website-2025';\r\n  const branch = 'main';\r\n  const dateSpan = document.getElementById('commit-date');\r\n  const container = document.getElementById('latest-commit');\r\n\r\n  async function fetchLatestCommit() {\r\n    try {\r\n      const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits?sha=${branch}&per_page=1`);\r\n      const data = await response.json();\r\n\r\n      if (!data.length) {\r\n        container.innerHTML = '<p>No commits found.</p>';\r\n        return;\r\n      }\r\n\r\n      const commit = data[0];\r\n      const date = new Date(commit.commit.author.date);\r\n      const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;\r\n      const url = commit.html_url;\r\n      const title = commit.commit.message.split('\\n')[0];\r\n\r\n      dateSpan.textContent = formattedDate;\r\n      container.innerHTML = `<ul>\r\n          <li><a href=\"${url}\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>${title}</strong></a></li></ul>\r\n      `;\r\n    } catch (err) {\r\n      container.innerHTML = `<p>Error fetching commit: ${err.message}</p>`;\r\n    }\r\n  }\r\n\r\n  window.onload = function() {\r\n    fetchLatestCommit();\r\n  };\r\n</script>\r\n"
            }
          />
        </div>
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "columns", "freeBox", "rpsLink", "dotgay", "embedHtml"],
  columns: ["columns", "freeBox", "rpsLink", "dotgay", "embedHtml"],
  freeBox: ["freeBox", "rpsLink"],
  rpsLink: ["rpsLink"],
  dotgay: ["dotgay"],
  embedHtml: ["embedHtml"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  columns: "div";
  freeBox: "div";
  rpsLink: "a";
  dotgay: "a";
  embedHtml: typeof Embed;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter__VariantsArgs;
    args?: PlasmicFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFooter__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicFooter__ArgProps,
          internalVariantPropNames: PlasmicFooter__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    freeBox: makeNodeComponent("freeBox"),
    rpsLink: makeNodeComponent("rpsLink"),
    dotgay: makeNodeComponent("dotgay"),
    embedHtml: makeNodeComponent("embedHtml"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
