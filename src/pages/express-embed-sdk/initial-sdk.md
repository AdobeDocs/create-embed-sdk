<CodeBlock slots="heading, code" repeat="1" languages=" js" />

#### Node.js

```js
await import(“https://sdk.cc-embed.adobe.com/v3/CCEverywhere.js”);

(async () => {
    const embedSDK = await window.CCEverywhere.initialize({ 
    clientId: ‘<YOUR_CLIENT_ID>’, 
    appName: ‘<YOUR_APP_NAME>’
    });
})();
```
