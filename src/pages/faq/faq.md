## About the SDK

<Accordion>

<AccordionItem header="What is the full editor? " isChevronIcon >

The full editor component allows you to embed Adobe Express as an iframe in their own applications. Users can work within this modal editor as they would in Adobe Express, and their designs can be saved back to the integrating application as images.

</AccordionItem>

<AccordionItem header="What are quick actions?" isChevronIcon >

Adobe-powered quick actions take the most complex tasks from our flagship apps -- like remove background -- and turns them into one-click tasks. The quick actions component is embedded onto your application as an iframe. Once the desired action is complete, the SDK provides two native export buttons to surface to users: 1) download the modified asset or 2) edit further in the full editor component. You can also configure your own custom export button to perform tasks such as saving the asset back into the application.

</AccordionItem>

<AccordionItem header="Do you have a mobile SDK?" isChevronIcon >

Our efforts are currently focused on desktop apps and web.

</AccordionItem>

<AccordionItem header="Do you support video editing?" isChevronIcon >

We currently have video quick actions available. As Adobe Express incorporates additional video editing capabilities, our partners and partner end-users will benefit from new features available in Adobe Express.

</AccordionItem>

<AccordionItem header="Do my users need an Adobe ID?" isChevronIcon >

Users will need to sign in using an existing Adobe ID, or create an account, in order to save projects created. Projects will be saved to the user’s Adobe Express account in a folder named after your integration. We’ve introduced a delayed login scenario for both the full editor and quick actions. This allows users to create and edit new projects before being prompted to login/create an account in order to save their project for later access.

Creating an account for Adobe Express is always free with premium upgrades available.  

</AccordionItem>

</Accordion>

## Implementing the SDK

<Accordion>

<AccordionItem header="Do I need to embed both the full editor and quick actions?" isChevronIcon >

No, the full editor and quick actions are separate components and developers can choose to only embed the editor (or vice versa) in their applications.

</AccordionItem>

<AccordionItem header="Is there a cost to use the SDK? " isChevronIcon >

There is currently no cost to access the Adobe Express Embed SDK.

</AccordionItem>

<AccordionItem header="What customizations are available in the SDK?" isChevronIcon >

The SDK allows you to customize the language settings for users. The full editor can be launched with pre-selected templates to browse based on template types (logos, posters) and canvas sizes (Youtube thumbnails, Twitter headers).

</AccordionItem>

<AccordionItem header="How do I get started? Do I need to apply?" isChevronIcon >

If you’re a developer ready to get started, read the [quickstart](https://developer.adobe.com/embed-sdk/docs/guides/) guide in our developer documentation. If you have any questions or would like to get in touch with our partnerships team, please fill out [this interest form](https://survey.adobe.com/jfe/form/SV_9LggYGfzm9w4Yaq) and a member of our team will get in contact.  

</AccordionItem>

<AccordionItem header="How does the full editor component provided by the SDK differ from the free/paid versions of [Adobe Express](https://adobe.com/express)? " isChevronIcon >

There are two functional differences in the embedded Adobe Express full editor compared to Adobe Express on the web:

* Content sharing: In an embedded experience, we assume that a user will save the outcome of their creative project back to the host application in order to continue work in the host application. We have disabled sharing capabilities in embedded Adobe Express experiences.  
* Content publishing: For the same reason above, a developer has the ability to pre-define the output type (file types, pixel size, etc.) of the Adobe Express project that is saved to the host application. For this reason, post scheduling and exporting multiple output types are disabled for the embedded Adobe Express editor.  

</AccordionItem>

<AccordionItem header="My user base includes minors/students. How can I be assured they get appropriate content?" isChevronIcon >

The embedded Adobe Express full editor can be setup to launch student safe content even before a student is signed into the embedded experience. More information about Adobe & Student Privacy can be found here: https://www.adobe.com/privacy/student-policy.html  

</AccordionItem>

</Accordion>
