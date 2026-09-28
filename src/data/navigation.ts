import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/release", labels: { "en-US": "Launch & Status" } },
  { href: "/editions", labels: { "en-US": "Editions & Price" } },
  { href: "/story", labels: { "en-US": "Story & Characters" } },
  { href: "/gameplay", labels: { "en-US": "Gameplay" } },
  { href: "/system-requirements", labels: { "en-US": "System & Store" } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/about", labels: { "en-US": "About" } },
  { href: "/release", labels: { "en-US": "Release Date" } },
  { href: "/preorder", labels: { "en-US": "Preorder" } },
  { href: "/platforms", labels: { "en-US": "Platforms" } },
  { href: "/characters", labels: { "en-US": "Characters" } },
  { href: "/weapons", labels: { "en-US": "Weapons" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}
