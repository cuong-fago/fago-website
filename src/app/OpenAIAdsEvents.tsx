"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    oaiq?: (...args: unknown[]) => void;
    __openAIAdsLastPageViewPath?: string;
  }
}

function measureOpenAIAds(...args: unknown[]) {
  try {
    window.oaiq?.(...args);
  } catch {
    // Ads measurement must never interrupt navigation or contact actions.
  }
}

function isContactRequestLink(link: HTMLAnchorElement) {
  const href = link.getAttribute("href")?.trim();

  if (!href) return false;
  if (href.toLowerCase().startsWith("tel:")) return true;

  try {
    const url = new URL(href, window.location.href);
    return (
      url.protocol === "https:" &&
      (url.hostname === "zalo.me" || url.hostname.endsWith(".zalo.me"))
    );
  } catch {
    return false;
  }
}

export default function OpenAIAdsEvents() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname || window.__openAIAdsLastPageViewPath === pathname) return;

    measureOpenAIAds("measure", "page_viewed", {
      type: "contents",
      contents: [
        {
          id: pathname,
          name: document.title || pathname,
          content_type: "page",
        },
      ],
    });

    window.__openAIAdsLastPageViewPath = pathname;
  }, [pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

      const link = event.target.closest("a[href]");
      if (!(link instanceof HTMLAnchorElement) || !isContactRequestLink(link)) {
        return;
      }

      measureOpenAIAds("measure", "lead_created", {
        type: "customer_action",
      });
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
