export interface FooterLink {
  title: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const footerSections: FooterSection[] = [
  {
    title: "Products",
    links: [
      {
        title: "AI Solutions",
        href: "/products/ai-solutions",
      },
      {
        title: "Digital Transformation",
        href: "/products/digital-transformation",
      },
      {
        title: "Enterprise Automation",
        href: "/products/enterprise-automation",
      },
    ],
  },
  {
    title: "Solutions",
    links: [
      {
        title: "Artificial Intelligence",
        href: "/solutions/artificial-intelligence",
      },
      {
        title: "Cloud & DevOps",
        href: "/solutions/cloud-devops",
      },
      {
        title: "Cyber Security",
        href: "/solutions/cyber-security",
      },
    ],
  },
  {
    title: "Industries",
    links: [
      {
        title: "Healthcare",
        href: "/industries/healthcare",
      },
      {
        title: "Banking & Finance",
        href: "/industries/bfsi",
      },
      {
        title: "Manufacturing",
        href: "/industries/manufacturing",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        title: "Blogs",
        href: "/resources/blogs",
      },
      {
        title: "Case Studies",
        href: "/resources/case-studies",
      },
      {
        title: "Documentation",
        href: "/resources/documentation",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        title: "About",
        href: "/about",
      },
      {
        title: "Contact",
        href: "/contact",
      },
      {
        title: "Book Demo",
        href: "/book-demo",
      },
    ],
  },
];