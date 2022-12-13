import "../styles/main.css"
import QuickActionSDKDevelop from "./quick-action/quick-action-sdk-develop.md";
import img1 from './images/Modal-image-1-resize-image.png'
import img2 from './images/Modal-image-2-remove-background.png'
import img3 from './images/Modal-image-3-convert-to-png.png'
import {AnimationTextBlock} from "../components/AnimationTextBlock"
import AnimationVideo from "./videos/cropeed_full_seq.json";
import quickAction from './videos/quickAction_Crop_Video.mp4'
import quick_Action_Image_resize from './videos/quick_Action_Image_resize.mp4'
import quick_Action_Background_Remover from './videos/Background_Remover.mp4'
import ImageVideoEditingBlock from "./quick-action/image-video-editing.md";
import ImageVideoContent from "./quick-action/image-video-mobile-content.md"


<Hero slots="heading, text" variant="fullwidth" videoSrcUrl={quickAction} className="quick-action-hero-block " isQuickAction/>

# Make image and video editing a snap with Quick Actions

Quick Actions, powered by Adobe Photoshop and Premiere, make short work of multi-step editing tasks.

<AnnouncementBlock slots="heading, text, button" className="announcement-embed-editor quick-action"/>

### What are Quick Actions?

Adobe Quick Actions are powerful design tools developers can customize and embed within their applications so end users can create confidently.

[Try the demo](https://adobe.io)

<WrapperComponent slots="content" repeat="1" theme="lightest" className="image-video-editing"/>

<ImageVideoEditingBlock/>

<WrapperComponent slots="content" repeat="1" theme="lightest" className="mobile-view-content"/>

<ImageVideoContent/>

<AnimationTextBlock slots="heading,text,image" heading="Small code snippets, big impact" textcontent="Easily customize which Quick Action is loaded into your iframe by changing a single ID." image={img1} theme="lightest"  variantsTypePrimary="secondary" variantStyleFill = "outline" imagearray={[img1, img2, img3]}  homeZigZag className="zigzag-cta-two big-impact"/>

<AnimationTextBlock slots="heading,text" heading="Resize image" theme="lightest" headerElementType="h2" textcontent="Make resizing images easy thanks to a wide array of standard and custom social media post image sizes to choose from." variantsTypePrimary='secondary' videoSrcUrl={quick_Action_Image_resize} variantStyleFill = "outline" homeZigZag className="streamline_ability"/>

<AnimationTextBlock slots="heading,text" heading="Remove background"  theme="lightest" headerElementType="h2" textcontent="Powered by Adobe Photoshop, this Quick Action enables users to remove backgrounds and create dynamic images in one simple click."  variantsTypePrimary='secondary' variantStyleFill = "outline" videoSrcUrl={quick_Action_Background_Remover} isVideoReversed  homeZigZag className=" zigzag-cta-two streamline_ability "/>

<AnnouncementBlock slots="text, button" theme="lightest" className="announcement-embed-editor quick-action learn-more-action"/>

Learn more about using embedded Quick Actions

[View Documentation](/quick-action)

<TextBlock slots="heading,text" theme="light" headerElementType="h2" variantsTypePrimary='secondary' variantStyleFill = "outline" homeZigZag className="streamline_ability customer-experience"/>

### Quick Action deployments

How are Quick Actions enabling users to work dynamically within their applications?

<WrapperComponent slots="content" repeat="1" theme="light" className="QuickActionSDKDevelop "/>

<QuickActionSDKDevelop/>

<SummaryBlock slots=" image , heading, text, buttons" className="getting-started quick-action-getting" />

![Getting Started](./images/Summary-Block-image.svg)

## Getting started

`Ready to embed Adobe Express Quick Actions on your platform? Our team can connect with you on your use case, just fill out our form. <https://survey.adobe.com/jfe/form/SV_9LggYGfzm9w4Yaq >`

- [Get started](https://adobe.io)
- [Try the demo](https://adobe.io)