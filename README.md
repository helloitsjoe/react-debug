# DOM Debug

A debug panel for the DOM

```js
import { createDebug } from "dom-debug";

const debug = createDebug({ enabled: true, classes: ["foo"] });

debug("Hello");
```

When `enabled`, calling `debug(message)` will print the message into a debug panel and log it to the console. Click the debug panel to hide it. Pass in `classes` to add additional classes to the panel, or `hiddenClass` to override the default `hidden` class. Default classes:

- Panel: `debug-panel`
- Title: `debug-panel__title`
- Hidden: `debug-panel__hidden`
- Messages: `debug-panel__message`

When `enabled` is false, messages will be logged to the console.
