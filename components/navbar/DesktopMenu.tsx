"use client";

import NavItem from "./NavItem";
import Dropdown, { DropdownItem } from "./Dropdown";

const products: DropdownItem[] = [
  {
    title: "SBOM Management",
    description:
      "Generate, analyze, compare and govern Software Bill of Materials.",
    href: "/sbom",
  },
  {
    title: "CBOM Management",
    description:
      "Discover cryptographic assets and prepare for post-quantum migration.",
    href: "/cbom",
  },
  {
    title: "Vulnerability Intelligence",
    description:
      "Correlate CVEs with your software components in real time.",
    href: "/vulnerabilities",
  },
];

const solutions: DropdownItem[] = [
  {
    title: "Supply Chain Security",
    description:
      "Gain complete visibility into your software supply chain.",
    href: "/solutions/supply-chain",
  },
  {
    title: "Compliance",
    description:
      "Meet NTIA, EO 14028, NIS2, CRA and other regulatory requirements.",
    href: "/solutions/compliance",
  },
  {
    title: "Cryptographic Agility",
    description:
      "Prepare applications for the post-quantum cryptography era.",
    href: "/solutions/crypto-agility",
  },
];

const resources: DropdownItem[] = [
  {
    title: "Documentation",
    description: "Developer documentation and API reference.",
    href: "/docs",
  },
  {
    title: "Blog",
    description: "Security insights, releases and engineering articles.",
    href: "/blog",
  },
  {
    title: "Case Studies",
    description: "Learn how organizations secure their software.",
    href: "/case-studies",
  },
];

export default function DesktopMenu() {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      <NavItem
        title="Home"
        href="/"
        active
      />

      <Dropdown
        title="Products"
        items={products}
      />

      <Dropdown
        title="Solutions"
        items={solutions}
      />

      <Dropdown
        title="Resources"
        items={resources}
      />

      <NavItem
        title="Pricing"
        href="/pricing"
      />

      <NavItem
        title="Company"
        href="/company"
      />

      <NavItem
        title="Contact"
        href="/contact"
      />
    </nav>
  );
}