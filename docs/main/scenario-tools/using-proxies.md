---
title: Using proxies
---

## What is a proxy server?
A proxy server acts as a gateway or middleman between you and the internet. It's an intermediary server separating you from the website you browse. They can be set up as a firewall or a web filter, acting as a layer of cybersecurity that prevents cyber attackers from entering a private network and protects your computer against malware and other cyber threats. Thus, proxy servers can add an extra layer of security, and privacy depending on your use case, needs, or company policy.

If you are using a proxy server, internet traffic flows through the proxy server on its way to the address you requested. The request then comes back through that same proxy server (there are exceptions to this rule), and then the proxy server forwards the data received from the website to you.

## How can you configure proxies?

The `scenario-tools` allow you to configure proxy settings if you are using proxies. In the `config` folder of the `scenario-tools` you will find a file named `settings.yml`. This file contains all settings for the tool, like input folders and csv settings. You can read more about this file [here](/main/scenario-tools/advanced-settings). To include your proxy settings, add those to the `settings.yml` file. In the `local.settings.yml` file you can add a setting with your proxy settings:

```
proxy_settings: 
    http: <YOUR_PROXY>
    https: <YOUR_SECURE_PROXY>
```

Now when you run the tools, the proxies will be automatically used to communicate with the ETM.

:::info Authenticated proxies
If you are using authenticated proxies, you can add include the required user name and password in the URLs in the settings file:

```
proxy_settings: 
    http: http://user:pass@proxy.sample.com:8080
    https: http://user:pass@secureproxy.sample.com:8080
```

Since your user name and password are _secret_ settings, make sure to only add those settings to `local.settings.yml`. This file will allow you to overwrite any of the settings from the `settings.yml`.
:::