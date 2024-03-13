<CodeBlock slots="heading, code" repeat="1" languages=" js" />

#### Node.js

```js
await import(https://cc-embed.adobe.com/sdk/v4/CCEverywhere.js);

(async () => {
    const { module }  = await window.CCEverywhere.initialize({ 
        clientId: ‘<YOUR_CLIENT_ID>’, 
        appName: ‘<YOUR_APP_NAME>’
    }, callbacks);
})();
```
