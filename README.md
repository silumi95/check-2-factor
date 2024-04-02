# Two Factor Authentication

This is a test written using WebdriverIO to test two-factor authentication on a (https://wordpress.com/) site.

## Setup

Install Node version 20.11.1

```
npm install
```

## Run Test

```
npm run wdio
```

## Considerations

- Since we are using existing websites, it is necessary to use XPath instead of specific properties like classes or IDs.
- Since this is an external site, waits were added to ensure the flow continues smoothly.
