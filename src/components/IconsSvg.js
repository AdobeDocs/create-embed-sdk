import React from 'react';
import { css } from "@emotion/react";

export const CodeSnippetSVG = () =>
(
  <>
    <div>
      <div css={css`
                    top: 40px;
                    width: 80%;
                    box-sizing: border-box;
                    margin: auto;
                    background: white;
                    left: 8%!important;
                    padding: 15% 0%;
                    border-radius: 10px;
                    position: relative;
                    font-size: 12px;
                    letter-spacing: 1.2px;
          `}>
        <div css={css`
                  width: 95%!important;
                  position: absolute;
                  display: flex;
                  flex-direction: column;
                  top: 0px;
                  margin: 1% 8%;
                  text-align: left;
            `}>
          <div>
            <span css={css`color:#d2d3d9`}>1</span>
            <span css={css`color:#7f828f;padding-left: 7%`}>ccEverywhere.</span>
            <span css={css`color:#72b7f9`}>openQuickAction</span>
            <span css={css`color:#7f828f`}>{`(`}</span>
          </div>
          <div>
            <span css={css`color:#d2d3d9`}>2</span>
            <span css={css`padding-left: 17%`}>{`{`}</span>
          </div>
          <div class="wrapper">
            <div className="static-txt">
              <span css={css`color:#d2d3d9`}>3</span>
              <span css={css`color:#ca9ffc;padding-left: 50px;`} className="id-p25">id</span>
              <span css={css`color:#72b7f9`}>{`:`}</span>
            </div>
            <ul className='dynamic-txts'>
              <li><span>{`'image-resize'`}</span></li>
              <li><span>{`'remove-background'`}</span></li>
              <li><span>{`'convert-to-png'`}</span></li>
            </ul>
          </div>
          <div>
            <span css={css`color:#d2d3d9`}>4</span>
            <span css={css`padding-left: 17%`}>{`}`}</span>
          </div>
          <div>
            <span css={css`color:#d2d3d9`}>5</span>
            <span css={css`padding-left: 7%`}>{`)`}</span>
          </div>
        </div>

      </div>
    </div>
  </>

)
