# Webhook Alerts for Reportr

### How to add it to your instance?

Add `reportr-alerts-webhook` to the `package.json` and load it in your Reportr configuration:

```js
reportr.configure({
    alerts: [
        require("reportr-alerts-webhook")()
    ]
});
```
