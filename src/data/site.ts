import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "Gears of War: E-Day Hub",
  brandMark: "GED",
  gameName: "Gears of War: E-Day",
  domain: "gearsofware-day.pro",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://gearsofware-day.pro").replace(/\/$/, ""),
  description:
    "A pre-launch US English search hub for Gears of War: E-Day — release date, platforms, editions, preorder, characters, weapons, Locust faction, multiplayer and co-op coverage during the 10-day launch window.",
  tagline: "Release date, preorder, characters, weapons, Locust, multiplayer and co-op coverage for Gears of War: E-Day.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "Gears of War: E-Day Hub",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Steam store page (AppID 3010850)",
      href: "https://store.steampowered.com/app/3010850",
      description: "Official Steam listing for Gears of War: E-Day.",
    },
    {
      label: "Xbox Wire US press",
      href: "https://news.xbox.com/gears-of-war-e-day/",
      description: "Publisher confirmation, release window and platform set.",
    },
    {
      label: "Xbox Developer Direct 2026 reveal",
      href: "https://news.xbox.com/xbox-developer-direct-january-2026-gears-of-war-e-day/",
      description: "Campaign scope, character list, weapons and co-op details.",
    },
  ],
  disclaimer:
    "Editorial reference hub for Gears of War: E-Day. Facts are sourced from official press and store listings as of 2026-09-26.",
};
