import type { PageContent } from "@/types/content";

export const homePage: PageContent = 
{
  "id": "home",
  "translationKey": "home",
  "locale": "en-US",
  "routeKind": "home",
  "slug": "",
  "url": "/",
  "pageType": "home",
  "presentation": {
    "shell": "home",
    "variant": "split-panel"
  },
  "h1": "Gears of War E Day Hub: Identity, Release, Platforms",
  "seoTitle": "Gears of War E Day: Release Date, Platforms and Story",
  "metaDescription": "Gears of War E Day is Xbox Game Studios' prequel shooter set on Emergence Day. Confirmed Oct 6 2026 release on Steam and Xbox Series X|S with Marcus Fenix and Dom.",
  "summary": "Gears of War E Day is the next mainline entry in the Gears of War franchise from Xbox Game Studios and The Coalition.",
  "hero": {
    "eyebrow": "Homepage",
    "subtitle": "A prequel cover shooter on Sera, launching October 6, 2026 on Steam and Xbox Series X|S.",
    "ctas": [
      {
        "label": "Release date",
        "href": "/release"
      },
      {
        "label": "Preorder",
        "href": "/preorder"
      }
    ]
  },
  "quickAnswer": "Gears of War E Day is the next mainline entry in the Gears of War franchise from Xbox Game Studios and The Coalition. It is a narrative prequel set on Sera during Emergence Day, when the Locust Horde first emerged underground. The confirmed launch date is October 6, 2026 on Steam (AppID 3010850) and Xbox Series X|S, with Marcus Fenix and Dom Santiago as returning protagonists. This hub is the starting point for Gears of War E Day identity, release timing, platforms and launch-window questions.",
  "keyFacts": [
    { "label": "Release date", "value": "October 6, 2026" },
    { "label": "Platforms", "value": "Steam (AppID 3010850) and Xbox Series X|S" },
    { "label": "Setting", "value": "Sera, during Emergence Day" },
    { "label": "Developer", "value": "The Coalition" }
  ],
  "modules": [
    {
        "id": "home-launch",
        "type": "data-table",
        "heading": "Confirmed launch facts",
        "columns": [
          { "key": "fact", "label": "Fact" },
          { "key": "value", "label": "Value" }
        ],
        "rows": [
          { "fact": "Release date", "value": "October 6, 2026" },
          { "fact": "Platforms", "value": "Steam (AppID 3010850) and Xbox Series X|S" },
          { "fact": "Setting", "value": "Sera, during Emergence Day" },
          { "fact": "Protagonists", "value": "Marcus Fenix and Dom Santiago" },
          { "fact": "Developer", "value": "The Coalition" },
          { "fact": "Publisher", "value": "Xbox Game Studios" },
          { "fact": "Source", "value": "This hub is the starting point for Gears of War E Day identity, release timing, platforms and launch-window questions." }
        ],
      }
    ],
  "faqIds": [
    "home-faq-1",
    "home-faq-2",
    "home-faq-3",
    "home-faq-4"
  ],
  "relatedPageIds": [
    "about",
    "release-status",
    "platforms",
    "preorder",
    "editions",
    "characters",
    "weapons",
    "locust"
  ],
  "schemaTypes": [
    "Article",
    "BreadcrumbList"
  ],
  "sourceStatus": "official",
  "lastReviewed": "2026-09-26"
}
;