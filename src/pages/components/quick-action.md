import "../../styles/main.css"
import QuickActionSDKDevelop from "../quick-action/quick-action-sdk-develop.md";
import img1 from '../images/Modal-image-1-resize-image.png'
import img2 from '../images/Modal-image-2-remove-background.png'
import img3 from '../images/Modal-image-3-convert-to-png.png'
import {AnimationTextBlock} from "../../components/AnimationTextBlock"
import quickAction from '../videos/quickAction_Crop_Video.mp4'
import quick_Action_Image_resize from '../videos/quick_Action_Image_resize.mp4'
import quick_Action_Background_Remover from '../videos/Background_Remover.mp4'
import ImageVideoEditingBlock from "../quick-action/image-video-editing.md";
import ImageVideoContent from "../quick-action/image-video-mobile-content.md"

<Hero slots="heading, text" variant="fullwidth" videoSrcUrl={quickAction} className="quick-action-hero-block" isQuickAction/>

# Save your users time with one-click editing 

Adobe Express quick actions turn multi-step image and video editing tasks into one-click edits made directly on your site  

<AnnouncementBlock slots="heading, text, button" className="announcement-embed-editor quick-action snap"/>

### Professional quality results in a snap 

Frequently used design workflows, such as remove background or resize image, are turned into one-click quick actions powered by Adobe Photoshop and Adobe Premiere Pro.  

[Learn more](https://developer.adobe.com/embed-sdk/docs/guides/quick_actions/)

<TextBlock slots="heading,text" videoUrl={quick_Action_Image_resize} variantsTypePrimary='secondary' variantStyleFill = "outline" homeZigZag position="left" className="quickaction-video resize-video"/>

### Resize image

Resizing images is easy thanks to a wide array of standard and custom social media image size to choose form.

<TextBlock slots="heading,text" videoUrl={quick_Action_Background_Remover} variantsTypePrimary='secondary' variantStyleFill = "outline" homeZigZag position="right" className="quickaction-video resize-video streamline_ability "/>

### Remove background

Powered by Adobe Photoshop, this quick action enables users to remove backgrounds and create dynamic images in one simple click.

<AnnouncementBlock slots="text, button" theme="lightest" className="announcement-embed-editor quick-action learn-more-action"/>

Learn more about embedding Adobe Express quick actions in your website

[View Documentation](https://developer.adobe.com/embed-sdk/docs/guides/quick_actions/)

<WrapperComponent slots="content" repeat="1" theme="lightest" className="image-video-editing"/>

<ImageVideoEditingBlock/>

<WrapperComponent slots="content" repeat="1" theme="lightest" className="mobile-view-content"/>

<ImageVideoContent/>

<AnimationTextBlock slots="heading,text,image" heading="Small code snippets, big impact" textcontent="Easily customize which quick action is loaded into your iframe by changing a single ID." image={img1} theme="lightest"  variantsTypePrimary="secondary" variantStyleFill = "outline" imagearray={[img1, img2, img3]}  homeZigZag className="big-impact"/>

<TextBlock slots="heading,text" theme="light" headerElementType="h2" variantsTypePrimary='secondary' variantStyleFill = "outline" homeZigZag className="streamline_ability customer-experience"/>

### See them in action 

How do quick actions save users time? 

<WrapperComponent slots="content" repeat="1" theme="light" className="QuickActionSDKDevelop "/>

<QuickActionSDKDevelop/>

<TextBlock slots="image,heading,text,buttons" headerElementType="h2" variantsTypePrimary='secondary' variantStyleFill = "outline"   homeZigZag className="getStarted quick-action-getstart"/>

![Getting Started](../images/Summary-Block-image.svg)

## Getting started

Embed quick actions in your website today to give your users access to powerful editing tools.

- [Quickstart guide](https://developer.adobe.com/embed-sdk/docs/guides/quick_actions/)
- [Try the sample](https://github.com/AdobeDocs/cc-everywhere/tree/main/sample)
 
