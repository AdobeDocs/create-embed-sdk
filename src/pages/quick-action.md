import "../styles/main.css"
import AnimationVideo from "./videos/Adobe_DCP_Marquee_Animation.json";
import QuickActionSDKDevelop from "./quick-action/quick-action-sdk-develop.md";
import QuickAction from './quick-action/quick-action.md';
import img1 from './images/Modal-image-1-resize-image.png'
import img2 from './images/Modal-image-2-remove-background.png'
import img3 from './images/Modal-image-3-convert-to-png.png'
import {AnimationTextBlock} from "../components/AnimationTextBlock"

<Hero slots="heading, text, assetsImg" customLayout variant="video" animationVideo={AnimationVideo} className=" express-editor-hero-block  Hero-Banner"/>

# Make image and video editing a snap with Quick Actions

Quick actions, powered by Adobe Photoshop and Premiere, make short work of multi-step editing tasks.

homeheroAssertImage

<AnnouncementBlock slots="heading, text, button" className="announcement-embed-editor quick-action"/>

### What are Quick Actions?

Adobe Quick Actions are powerful tools developers can customize and embed within their applications so end users can create confidently.

[Try the demo](https://adobe.io)

<WrapperComponent slots="content" theme="lightest" className="editing-content" />

<QuickAction/>

<AnimationTextBlock slots="heading,text,image" heading="Small Code Snippets, Big Impact" textcontent="Easily customize which Quick Action is loaded into your iframe by changing a single ID." image={img1} theme="lightest"  variantsTypePrimary="secondary" variantStyleFill = "outline" imagearray={[img1, img2, img3]}  homeZigZag className="zigzag-cta-two big-impact"/>

<TextBlock slots="image, heading,text" theme="lightest" headerElementType="h2" variantsTypePrimary='secondary' variantStyleFill = "outline" homeZigZag className="streamline_ability"/>

![EMPTY_ALT](./images/Resize-Image-Main_PosterImage.png)

### Resize Image

Make resizing images easy thanks to a wide array of standard and custom social media post image sizes to choose from.

<TextBlock slots="heading,text,image" theme="lightest" headerElementType="h2" variantsTypePrimary='secondary' variantStyleFill = "outline"   homeZigZag className=" zigzag-cta-two streamline_ability remove-bg"/>

### Remove Background

Powered by Adobe Photoshop, enable users to remove backgrounds and create dynamic images in one simple click.

![EMPTY_ALT](./images/Background-Remover_PosterImage.png)

<AnnouncementBlock slots="text, button" theme="lightest" className="announcement-embed-editor quick-action learn-more-action"/>

Learn more about using embedded Quick Actions

[View Documentation](https://adobe.io)

<TextBlock slots="heading,text" theme="light" headerElementType="h2" variantsTypePrimary='secondary' variantStyleFill = "outline" homeZigZag className="streamline_ability customer-experience"/>

### Quick Action Deployments

How are Quick Actions enabling users to work dynamically within their applications?

<WrapperComponent slots="content" repeat="1" theme="light" className="acrobat letter breakout QuickActionSDKDevelop "/>

<QuickActionSDKDevelop/>

<SummaryBlock slots=" image , heading, text, buttons" className="getting-started" />

![Getting Started](./images/Summary-Block-image.svg)

## Getting Started

Ready to embed Adobe Express Quick Actions on your platform? Our team can connect with you on your use case, just fill out our form. 

- [Get Started](https://adobe.io)
- [Try the demo](https://adobe.io)