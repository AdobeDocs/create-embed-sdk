/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import React, { cloneElement, useEffect, useState } from "react";
import { css } from "@emotion/react";
import { HeroButtons } from "@adobe/gatsby-theme-aio/src/components/Hero";
import { Media } from "@adobe/gatsby-theme-aio/src/components/Media";
import PropTypes from "prop-types";
import {
  layoutColumns,
  DESKTOP_SCREEN_WIDTH,
  TABLET_SCREEN_WIDTH
} from "@adobe/gatsby-theme-aio/src/utils";
import classNames from "classnames";
import "@spectrum-css/typography";
import SpringImage from './springweb'

const counter = {
  2: 0,
  3: 0,
  4: 0,
};

const MIN_TABLET_SCREEN_WIDTH = '1023px'

const mediaCSS = css`
  & {
    display: inline;
    width: ${layoutColumns(6)};
    box-sizing: border-box;
    padding: var(--spectrum-global-dimension-size-200);

    @media screen and (max-width: ${TABLET_SCREEN_WIDTH}) {
      display: block;
      width: 100%;
    }
  }
`;

const Icons = ({ icons, isCentered }) =>
  icons
    ? cloneElement(icons, {
      css: css`
          list-style: none;
          padding: 0;
          margin-bottom: var(--spectrum-global-dimension-size-400) !important;
          display: flex;
          justify-content: ${isCentered ? "center" : "flex-start"};

          & li {
            display: flex;
            border-right: 1px solid var(--spectrum-global-color-gray-300);
            height: var(--spectrum-global-dimension-size-600);
            margin-right: var(--spectrum-global-dimension-size-150);
          }

          & li:last-of-type {
            padding-right: 0;
            border-right: none;
          }

          .gatsby-resp-image-wrapper {
            position: relative;
            width: var(--spectrum-global-dimension-size-800) !important;
          }

          .gatsby-resp-image-image {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            object-fit: contain;
          }
        `,
    })
    : null;

const Links = ({ links, isCentered, isLinksGroups = false }) =>
  links
    ? cloneElement(links, {
      css: css`
          list-style: none;
          padding: 0;
          display: flex;
          justify-content: ${isCentered ? "center" : "flex-start"};
          ${!isLinksGroups ? "" : "flex-wrap: wrap;"}
          margin-top: ${isCentered || isLinksGroups
          ? "var(--spectrum-global-dimension-size-200) !important;"
          : "var(--spectrum-global-dimension-size-600) !important;"};
          & li {
            display: flex;
            align-items: center;
            ${isLinksGroups
          ? `border-radius: 10px; 
                border:solid 1.8px;
                margin-right: var(--spectrum-global-dimension-size-200);
                height: var(--spectrum-global-dimension-size-300);
                margin-top: var(--spectrum-global-dimension-size-100);
                background-color: #F7F7F7;
                `
          : "height: var(--spectrum-global-dimension-size-400)"};
          }

          & li a {
            white-space: nowrap;           
            ${isLinksGroups
          ? `margin: var(--spectrum-global-dimension-size-100); 
              color: currentColor;
              text-decoration: none;
              font-size: var(--spectrum-global-dimension-size-175);`
          : "margin-right: var(--spectrum-global-dimension-size-600);"};
          }

          & li:last-of-type a {
            margin-right: ${isLinksGroups ? "var(--spectrum-global-dimension-size-100)" : "0"}
          }

          & li:hover{
            ${isLinksGroups ?
          `background-color: var(--spectrum-button-primary-m-background-color-hover, var(--spectrum-global-color-gray-800));
            border-color: var(--spectrum-button-primary-m-border-color-hover, var(--spectrum-global-color-gray-800));            color: var(--spectrum-button-primary-m-text-color-hover, var(--spectrum-global-color-gray-50));`
          : ""}
          }        
          & li:hover a{
            ${isLinksGroups ? `
            color: var(--spectrum-button-primary-m-text-color-hover, var(--spectrum-global-color-gray-50));
            text-decoration: none;`
          : ""}
          }

          .gatsby-resp-image-wrapper {
            max-width: none !important;
            width: 100% !important;
            height: 100% !important;
          }

          .gatsby-resp-image-wrapper {
            width: var(--spectrum-global-dimension-size-400) !important;
            margin-left: 0 !important;
            margin-right: var(--spectrum-global-dimension-size-150) !important;
          }

          .gatsby-resp-image-image {
            object-fit: contain;
          }
          
          @media screen and (max-width: ${TABLET_SCREEN_WIDTH}) {
            flex-direction: ${isLinksGroups ? "initial" : "column"};
            align-items: ${isCentered ? "center" : "left"};          

            li {
              margin-top: var(--spectrum-global-dimension-size-100);              
            }

            li a {
              ${isLinksGroups
          ? "font-size: var(--spectrum-global-dimension-size-130);` "
          : `margin-right: 0;`
        }
            }
          }

          @media screen and (max-width: 767px) {
            ${isLinksGroups ? `width: min-content` : ""}
          }
        `,
    })
    : null;

const AnimationTextBlock = ({
  className,
  heading,
  subHeading,
  textcontent,
  links,
  buttons,
  buttonArray,
  linksGroups,
  icons,
  image,
  assetImg,
  video,
  theme = "lightest",
  width = "100%",
  isCentered = false,
  primaryOutline = false,
  headerElementType = "h3",
  imageOnly = false,
  imgWidth = "50%",
  isPrimaryBtn = false,
  variantsTypePrimary = 'accent',
  variantsTypeSecondary = 'secondary',
  variantStyleFill = "fill",
  variantStyleOutline = "outline",
  hasCodeBlock = false,
  homeZigZag = false,
  isbuttonGroups = false,
  imagearray = [],
  videoSrcUrl = "",
  isVideoReversed = false,
  ...props
}) => {
  const Element = headerElementType;

  let initColumns = 100 / parseFloat(width);

  if (width === "33%") {
    width = `${(100 / 3).toFixed(2)}%`;
    initColumns = 3;
  }

  const [columns] = useState(initColumns);

  useEffect(() => {
    return () => {
      if (typeof counter[columns] !== "undefined") {
        counter[columns]--;
      }
    };
  }, [columns]);

  if (width !== "100%") {
    isCentered = true;
  }

  const isReversed =
    props.slots.endsWith("image") || props.slots.endsWith("video") || isVideoReversed;
  return (
    <section
      className={classNames(className, `spectrum--${theme}`)}
      css={css`
          width: 100%;
          background: var(--spectrum-global-color-gray-100);
        `}
    >
      <div
        css={css`
            width: ${DESKTOP_SCREEN_WIDTH};
            box-sizing: border-box;
            margin: auto;
            padding: var(--spectrum-global-dimension-size-1000) 0;

            @media screen and (max-width: ${DESKTOP_SCREEN_WIDTH}) {
              width: 100%;

              // & > div {
              //   flex-direction: column !important;
              // }
            }
          `}
      >
        <div
          css={css`
              display: flex;
              align-items: center;
              flex-direction: ${imageOnly
              ? "column"
              : isReversed
                ? "row-reverse"
                : "row"};

              @media screen and (max-width: ${MIN_TABLET_SCREEN_WIDTH}) {
                flex-direction: column;
              }
            `}
        >
          {imagearray.length > 0 &&
            <p className="spectrum-Body spectrum-Body--sizeM css-1wz4ws2-css-Paragraph"><span className="gatsby-resp-image-wrapper" >
              <span className="gatsby-resp-image-background-image quickActionCodeSnippetBGImg" ></span>
              <picture style={{ display: "none" }}>
                <img className="gatsby-resp-image-image" src={image} alt="EMPTY_ALT" title="EMPTY_ALT" loading="lazy" />
              </picture>
            </span>
              <SpringImage slides={imagearray} />
            </p>
          }

          {video && <Media css={mediaCSS} video={video} />}

          {videoSrcUrl !== "" &&
            <div className="reizeQuickActionVideo">
              <video name="media_resize" id="resize_Quick_Action_Id" loop className="resizeQuickActionViedo" type="video/mp4" preload="auto" autoPlay muted>
                <source src={videoSrcUrl} type="video/mp4" />
              </video>
            </div>
          }
          {!imageOnly && <div
            css={css`
                ${hasCodeBlock ? `width: 70%;` : `width: 50%;`}
                display: flex;
                flex-direction: column;
                justify-content: center;
                text-align: left;
                box-sizing: border-box;
                padding: 0 var(--spectrum-global-dimension-size-400);

                @media screen and (max-width: ${TABLET_SCREEN_WIDTH}) {
                  width: 100%;
                  margin: var(--spectrum-global-dimension-size-400) 0;
                }
              `}
          >
            <Icons icons={icons} isCentered={isCentered} />

            {heading && (
              <Element
                className="spectrum-Heading spectrum-Heading--sizeM"
                css={css`
                    margin-top: 0 !important;
                    margin-bottom: var(
                      --spectrum-global-dimension-size-200
                    ) !important;

                    & + p {
                      margin-top: 0 !important;
                    }
                  `}
              >
                {heading}
              </Element>
            )}
            {subHeading && !linksGroups && (
              <h3
                className="spectrum-Heading spectrum-Heading--sizeM"
                css={css`
                font-size: var(
                  --spectrum-global-dimension-size-225
                ) !important;
                  margin-bottom: var(
                    --spectrum-global-dimension-size-200
                  ) !important;

                  & ~ p {
                    margin-top: 0;
                    margin-bottom: 0 !important;
                  }
                `}
              >
                {subHeading}
              </h3>
            )}
            <p class="spectrum-Body spectrum-Body--sizeM css-tq6n67-Paragraph">{textcontent}</p>

            <div css={css`
            display: flex;
            flex-direction: row;
            text-align: left;
            box-sizing: border-box;
            padding:5% 0;
            gap:5%;
          `}>
              {buttonArray?.map((data) => {
                return (
                  <a href="https://adobe.io" rel="noreferrer" target="_blank" style={{ textDecoration: "none" }}>
                    <button class="spectrum-Button spectrum-Button--sizeM spectrum-Button--outline spectrum-Button--accent" >
                      <span class="spectrum-Button-label">{data.label}</span>
                    </button>
                  </a>
                )
              })}
            </div>

            {subHeading && linksGroups && (
              <h3
                className="spectrum-Heading spectrum-Heading--sizeM"
                css={css`
                  font-size: var(
                    --spectrum-global-dimension-size-225
                  ) !important;                  
                  margin-top: var(
                    --spectrum-global-dimension-size-200
                  ) !important;

                  & ~ p {
                    margin-top: 0;
                    margin-bottom: 0 !important;
                  }
                `}
              >
                {subHeading.props.children}
              </h3>
            )}

            {linksGroups && (
              <Links links={linksGroups} isCentered={isCentered} isLinksGroups />
            )}

            <HeroButtons
              buttons={buttons}
              styles={[variantStyleFill, variantStyleOutline]}
              variants={[variantsTypePrimary, variantsTypeSecondary]}
              heading={homeZigZag ? heading?.props?.children : ''}
              css={css`
                  margin-top: var(--spectrum-global-dimension-size-200);
                `}
            />

            <Links links={links} isCentered={isCentered} />
          </div>}
        </div>
      </div>
    </section>
  );
}

AnimationTextBlock.propTypes = {
  heading: PropTypes.string,
  links: PropTypes.element,
  icons: PropTypes.element,
  buttons: PropTypes.element,
  linksGroups: PropTypes.element,
  image: PropTypes.string,
  buttonArray: PropTypes.array,
  video: PropTypes.element,
  theme: PropTypes.string,
  width: PropTypes.oneOf(["100%", "50%", "33%", "25%"]),
  isCentered: PropTypes.bool,
  headerElementType: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  imageOnly: PropTypes.bool,
  primaryOutline: PropTypes.bool,
  hasCodeBlock: PropTypes.bool,
  imgWidth: PropTypes.string,
  homeZigZag: PropTypes.bool,
  isbuttonGroups: PropTypes.bool,
  imagearray: PropTypes.array,
  videoSrcUrl: PropTypes.string,
  isVideoReversed: PropTypes.bool
};

export { AnimationTextBlock };
