import { NavigationSection } from "./types";

export const navigation: NavigationSection[] = [
  {
    title: "Home",
    href: "/",
  },

  {
    title: "Products",
    children: [
      {
        title: "AI Solutions",
        description:
          "Intelligent AI-powered enterprise solutions tailored for business transformation.",
        href: "/products/ai-solutions",
      },
      {
        title: "Digital Transformation",
        description:
          "Accelerate modernization with cloud-native and digital engineering services.",
        href: "/products/digital-transformation",
      },
      {
        title: "Enterprise Automation",
        description:
          "Automate workflows, operations, and business processes using intelligent automation.",
        href: "/products/enterprise-automation",
      },
    ],
  },

  {
    title: "Solutions",
    children: [
      {
        title: "Artificial Intelligence",
        description:
          "Custom AI, Generative AI, ML and LLM-powered enterprise applications.",
        href: "/solutions/artificial-intelligence",
      },
      {
        title: "Cloud & DevOps",
        description:
          "Scalable cloud infrastructure, CI/CD pipelines and DevOps consulting.",
        href: "/solutions/cloud-devops",
      },
      {
        title: "Cyber Security",
        description:
          "Comprehensive enterprise security and governance solutions.",
        href: "/solutions/cyber-security",
      },
    ],
  },

  {
    title: "Industries",
    children: [
      {
        title: "Banking & Finance",
        description:
          "Modern digital platforms for BFSI organizations.",
        href: "/industries/bfsi",
      },
      {
        title: "Healthcare",
        description:
          "AI-driven healthcare and medical technology solutions.",
        href: "/industries/healthcare",
      },
      {
        title: "Manufacturing",
        description:
          "Smart manufacturing powered by AI, IoT and automation.",
        href: "/industries/manufacturing",
      },
    ],
  },

  {
    title: "Resources",
    children: [
      {
        title: "Blogs",
        description:
          "Insights, articles and technology updates from AP2L experts.",
        href: "/resources/blogs",
      },
      {
        title: "Case Studies",
        description:
          "Real-world customer success stories and business outcomes.",
        href: "/resources/case-studies",
      },
      {
        title: "Documentation",
        description:
          "Technical documentation, guides and developer resources.",
        href: "/resources/documentation",
      },
    ],
  },

  {
    title: "About",
    href: "/about",
  },

  {
    title: "Contact",
    href: "/contact",
  },
];