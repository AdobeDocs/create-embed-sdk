import React from 'react';
import { css } from "@emotion/react";

export const CodeSnippetSVG = ({ count }) => {

  return (
    <div css={css`height:70%`} >
      <div css={css`height:70%`}>
        <div css={css`
                      top: 40px;
                      width: 100%;
                      box-sizing: border-box;
                      margin: auto;
                      background: white;
                      left: 0% !important;
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
            <div class={`wrapper image-resize count-${Math.floor(count)}`} >
              <div>
                <span css={css`color:#d2d3d9`}>3</span>
                <span css={css`color:#ca9ffc;padding-left: 100px;font-size:15px`} className="id-p25">id</span>
                <span css={css`color:#72b7f9`}>{`:`}</span>
              </div>
              <p class="line-1 anim-typewriter"><span>'image-resize'</span></p>
            </div>
            <div class={`wrapper remove-background count-${Math.floor(count)}`}>
              <div>
                <span css={css`color:#d2d3d9`}>3</span>
                <span css={css`color:#ca9ffc;padding-left:100px;font-size:15px`} className="id-p25">id</span>
                <span css={css`color:#72b7f9`}>{`:`}</span>
              </div>
              <p class="line-1 anim-typewriter"><span>'remove-background'</span></p>
            </div>
            <div class={`wrapper convert-png count-${Math.floor(count)} `}>
              <div>
                <span css={css`color:#d2d3d9`}>3</span>
                <span css={css`color:#ca9ffc;padding-left:100px;font-size:15px`} className="id-p25">id</span>
                <span css={css`color:#72b7f9`}>{`:`}</span>
              </div>
              <p class="line-1 anim-typewriter"><span>'convert-to-png'</span></p>
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
    </div >

  )
}
