import "../styles/main.css"
import AnimationVideo from "./videos/Adobe_DCP_Marquee_Animation.json";
import {AnimationTextBlock} from "../components/AnimationTextBlock"
import WhyIntegrateSDK from "./embed-express-sdk/why-integrate-express-embed-sdk.md";
import DesignForDeveloper from "./embed-express-sdk/design-for-develop.md"
import VideoCrop from './videos/home_page_text_crop.mp4'
import img1 from './images/background-remove-layer-2-pexels-thyrone.png'
import img2 from './images/Quick action icon 1.svg'
import img3 from './images/Quick action icon 2.svg'
import img4 from './images/Video-Crop-still-frame.png'
import img5 from './images/Crop-objects.svg'
import img6 from './images/Quick action icon 3.svg'
import img7 from './images/Quick action icon 4.svg'

<Hero slots="image, icon, heading, text" variant="halfwidth" imagearray={[img1, img2, img3, img4, img5, img6, img7]} isCustomAnimation className="embed-adobe "/>

![Adobe Express](./images/background-remove-layer-1-pexels-thyrone-paas-transparent.png)

![Adobe Express](./images/Adobe-Express-logo-RGB.png)

# Unlock your users’ creativity 

Put the right creative tools and content in the hands of your users with the Adobe Express Embed SDK – including the full editor and quick actions.

<DCSummaryBlock slots="text, buttons" theme="dark"  buttonPositionRight btnVariant="cta" className="How-to-get-started  ms-pa-page hero-below-compo ms-pa-summary-blade tryForFree" />

Embed powerful Adobe Express capabilities into any website with Adobe Express Embed SDK, a customizable JavaScript library.

- [Read More](https://developer-stage.adobe.com/embed-sdk/docs/)

<TextBlock slots="image, heading,text,buttons" theme="lightest" headerElementType="h2" variantsTypePrimary='secondary' variantStyleFill = "outline" homeZigZag className="streamline_ability  express-editor"/>

![Express Editor](./images/Product-blade-block-one-image.png)
    
### Make standout content with the Adobe Express full editor 

Users can quickly and easily create content from thousands of beautiful templates and design assets for social media content, logos, and more. It only takes a few lines of code to embed the full editor in any website. 

- [Learn more](components/express-editor/)

<AnimationTextBlock slots="heading,text" heading="One-click edits with Adobe Express quick actions "  theme="lightest"  headerElementType="h2" buttonArray={[{ label:"Learn more", link:"components/quick-action/"}]} textcontent=" Quick actions turn multistep design workflows into just a few clicks, making removing backgrounds, resizing images and merging videos faster than ever – all powered by Adobe Photoshop and Adobe Premiere Pro. Enable these powerful shortcuts in any website in minutes. "  variantsTypePrimary='secondary' variantStyleFill = "outline" videoSrcUrl={VideoCrop} isVideoReversed  homeZigZag className="zigzag-cta-two streamline_ability video-text-block"/>

<TitleBlock slots="heading" theme="lightest" className="sdk-title-block"/>

Why integrate the Adobe Express Embed SDK?

<WrapperComponent slots="content" repeat="1" theme="light" className="QuickActionSDKDevelop "/>

<WhyIntegrateSDK/>

<WrapperComponent slots="content" repeat="1" theme="lightest" className="resource-card "/>

<DesignForDeveloper/>

<SummaryBlock slots=" image , heading, text, buttons" className="getting-started sdk-getting-block" />

![Getting Started](./images/Summary-Block-image.svg)

## Getting started

Unlock Adobe Express editing capabilities for your users by embedding the SDK in your website. Read our developer quickstart guide or try the sample to get started.

- [Get started](https://developer.adobe.com/embed-sdk/docs/guides/)
<!-- - [Sample](https://github.com/AdobeDocs/cc-everywhere/tree/main/sample) -->
