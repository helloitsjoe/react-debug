type DebugFn = (...args: string[]) => void;

export function createDebug({
  enabled = false,
  classes = [],
  hiddenClass = "debug-panel__hidden",
  logger = console.log,
}: {
  enabled?: boolean;
  classes?: string[];
  hiddenClass?: string;
  logger?: DebugFn;
} = {}): DebugFn {
  if (!enabled) return logger;

  const debugPanel = document.createElement("div");
  debugPanel.id = "debug-panel";
  debugPanel.classList.add("debug-panel", ...classes);
  debugPanel.innerHTML = `<title class="debug-panel__title">Debug</title>`;
  debugPanel.onclick = () => {
    debugPanel.classList.toggle(hiddenClass);
  };
  document.body.appendChild(debugPanel);

  function debug(...args: string[]) {
    logger(...args);
    debugPanel.innerHTML += `<pre class="debug-panel__message">${args.join(
      " ",
    )}</pre>`;
  }

  return debug;
}
