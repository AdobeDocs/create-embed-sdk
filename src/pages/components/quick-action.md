import "../../styles/main.css"
import QuickActionSDKDevelop from "../quick-action/quick-action-sdk-develop.md";
import img1 from '../images/Modal-image-1-resize-image.png'
import img2 from '../images/Modal-image-2-remove-background.png'
import img3 from '../images/Modal-image-3-convert-to-png.png'
import {AnimationTextBlock} from "../../components/AnimationTextBlock"
import AnimationVideo from "../videos/cropeed_full_seq.json";
import quickAction from '../videos/quickAction_Crop_Video.mp4'
import quick_Action_Image_resize from '../videos/quick_Action_Image_resize.mp4'
import quick_Action_Background_Remover from '../videos/Background_Remover.mp4'
import ImageVideoEditingBlock from "../quick-action/image-video-editing.md";
import ImageVideoContent from "../quick-action/image-video-mobile-content.md"

<Hero slots="heading, text" variant="fullwidth" videoSrcUrl={quickAction} className="quick-action-hero-block " isQuickAction/>

# Save your users time with one-click editing 

Adobe Express quick actions turn multi-step image and video editing tasks into one-click edits made directly on your site  

<AnnouncementBlock slots="heading, text, button" className="announcement-embed-editor quick-action snap"/>

### Professional quality results in a snap 

Frequently used design workflows, such as remove background or resize image, are turned into one-click quick actions powered by Adobe Photoshop and Adobe Premiere Pro.  

[Learn more](https://developer-stage.adobe.com/embed-sdk/docs/guides/quick_actions/)

<AnimationTextBlock slots="heading,text" heading="Resize image" theme="lightest" headerElementType="h2" textcontent="Resizing images is easy thanks to a wide array of standard and custom social media image size to choose form." variantsTypePrimary='secondary' videoSrcUrl={quick_Action_Image_resize} variantStyleFill = "outline" homeZigZag className="streamline_ability"/>

<AnimationTextBlock slots="heading,text" heading="Remove background"  theme="lightest" headerElementType="h2" textcontent="Powered by Adobe Photoshop, this quick action enables users to remove backgrounds and create dynamic images in one simple click."  variantsTypePrimary='secondary' variantStyleFill = "outline" videoSrcUrl={quick_Action_Background_Remover} isVideoReversed  homeZigZag className=" zigzag-cta-two streamline_ability "/>

<AnnouncementBlock slots="text, button" theme="lightest" className="announcement-embed-editor quick-action learn-more-action"/>

Learn more about embedding Adobe Express quick actions in your website

[View Documentation](https://developer.adobe.com/embed-sdk/docs/guides/quick_actions/)

<WrapperComponent slots="content" repeat="1" theme="lightest" className="image-video-editing"/>

<ImageVideoEditingBlock/>

<WrapperComponent slots="content" repeat="1" theme="lightest" className="mobile-view-content"/>

<ImageVideoContent/>

<AnimationTextBlock slots="heading,text,image" heading="Small code snippets, big impact" textcontent="Easily customize which quick action is loaded into your iframe by changing a single ID." image={img1} theme="lightest"  variantsTypePrimary="secondary" variantStyleFill = "outline" imagearray={[img1, img2, img3]}  homeZigZag className="zigzag-cta-two big-impact"/>

<TextBlock slots="heading,text" theme="light" headerElementType="h2" variantsTypePrimary='secondary' variantStyleFill = "outline" homeZigZag className="streamline_ability customer-experience"/>

### See them in action 

How do quick actions save users time? 

<WrapperComponent slots="content" repeat="1" theme="light" className="QuickActionSDKDevelop "/>

<QuickActionSDKDevelop/>

<SummaryBlock slots=" image , heading, text, buttons" className="getting-started quick-action-getting" />

![Getting Started](../images/Summary-Block-image.svg)

## Getting started

Ready to embed Adobe Express quick actions in your website? Just fill out our [form](https://survey.adobe.com/jfe/form/SV_9LggYGfzm9w4Yaq) and someone will be in touch

- [Get started](https://developer-stage.adobe.com/embed-sdk/docs/guides/quick_actions/)
<!-- - [Sample](https://github.com/AdobeDocs/cc-everywhere/tree/main/sample) -->
