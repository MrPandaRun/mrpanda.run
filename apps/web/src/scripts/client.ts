type Payload = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

function trackEvent(eventName: string, payload: Payload = {}): void {
  const eventData = {
    event: eventName,
    ...payload,
    timestamp: new Date().toISOString()
  };

  window.dataLayer?.push(eventData);
  window.gtag?.("event", eventName, payload);

  if (import.meta.env.DEV) {
    console.info("[analytics]", eventName, payload);
  }
}

function parsePayload(raw?: string): Payload {
  if (!raw) {
    return {};
  }

  try {
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object") {
      return parsed as Payload;
    }
  } catch {
    // noop
  }

  return {};
}

function setupTrackLinks() {
  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement | null;
    const element = target?.closest<HTMLElement>("[data-track-event]");

    if (!element) {
      return;
    }

    const name = element.dataset.trackEvent;

    if (!name) {
      return;
    }

    trackEvent(name, parsePayload(element.dataset.trackPayload));
  });
}

function setupResourceCopy() {
  const copiedText = "Copied";
  const defaultText = "Copy";
  const buttons = document.querySelectorAll<HTMLButtonElement>("[data-resource-copy]");

  buttons.forEach((button) => {
    button.addEventListener("click", async () => {
      if (!navigator.clipboard) {
        return;
      }

      const link = button.dataset.resourceLink;
      const title = button.dataset.resourceTitle;
      const type = button.dataset.resourceType;

      if (!link || !title || !type) {
        return;
      }

      const absoluteLink = link.startsWith("/")
        ? `${window.location.origin}${link}`
        : link;

      try {
        await navigator.clipboard.writeText(absoluteLink);

        trackEvent("resource_copy_click", {
          resource_title: title,
          resource_type: type
        });

        const label = button.querySelector<HTMLElement>("[data-copy-label]");

        if (label) {
          label.textContent = copiedText;
          window.setTimeout(() => {
            label.textContent = defaultText;
          }, 1200);
        }
      } catch {
        // noop
      }
    });
  });
}

function init() {
  setupTrackLinks();
  setupResourceCopy();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
