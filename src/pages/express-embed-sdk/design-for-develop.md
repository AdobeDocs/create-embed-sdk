import InitialSDK from './initial-sdk.md';
import ExpressEditorCodeBlock from "./express-editor-code-block.md"
import QuickActionCodeBlock from "./quick-action-code-block.md";
import TextToImageCodeBlock from "./text-to-image-code-block.md"
import ImageEditingCodeBlock from "./image-editing-code-block.md";

<DCSummaryBlock slots="heading , text , buttons"  background="rgb(31, 42, 73)" buttonPositionRight className="design-features-code-block" />

## Designed for developers

The Adobe Express Embed SDK integrates Adobe Express editing capabilities and content in your web application with just a few lines of code.

- [View documentation](https://developer.adobe.com/express/embed-sdk/docs/guides/)
- [Try the demo](https://demo.expressembed.com/)

<TabsBlock orientation="vertical" slots="heading, image, content" repeat="3"  theme="dark" className='bgBlue ' />

## Initialize SDK

![Code for initializing SDK](../images/initialize-SDK.svg)

<InitialSDK/>

### Full editor

![Code to invoke full editor](../images/Express-Editor.svg)

<ExpressEditorCodeBlock/>

### Quick actions

![Code to invoke quick actions](../images/quick-actions.svg)

<QuickActionCodeBlock/>

<!-- ### Text to image module

![Code to invoke full editor](../images/SX_AITextToImage_18_N.svg)

<TextToImageCodeBlock/>

### Image editing module

![Code to invoke quick actions](../images/SX_MediaFileEdit_18_N.svg)

<ImageEditingCodeBlock/> -->
