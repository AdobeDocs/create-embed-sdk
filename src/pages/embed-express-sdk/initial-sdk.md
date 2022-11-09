<CodeBlock slots="heading, code" repeat="1" languages=" js" />

#### Node js

```js
await import("https://sdk.cc-embed.adobe.com/v1/CCEverywhere.js");

const embedSDK = window.CCCEverywhere.initialize({
    clientId: '<YOUR_CLIENT_ID>',
    appName: '<YOUR_APP_NAME>',
    redirectUri: '<YOUR_REDIRECT_URI>'
});

```