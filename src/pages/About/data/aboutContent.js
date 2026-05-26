/**
 * About page content — edit this file to update copy and team details.
 * Team photos: add images to /public/team/ and set each member's `image` path.
 */

export const aboutHero = {
  label: "About Verkoni",
  title: "We build intelligent systems for ambitious teams.",
  description:
    "Verkoni is an AI automation and software studio founded on a simple belief: technology should remove friction, not create it. We partner with businesses to design, build, and scale solutions that last.",
};

export const mission = {
  label: "Our mission",
  title: "Make powerful technology accessible and actionable.",
  paragraphs: [
    "Businesses today are buried in manual work, disconnected tools, and legacy systems that slow everyone down. We exist to change that—by building automation and software that teams actually use.",
    "From first workflow audit to production deployment, we stay focused on measurable outcomes: time saved, errors reduced, and products shipped on schedule.",
  ],
  vision:
    "A world where every team—regardless of size—can operate with the efficiency of a world-class engineering organization.",
};

export const values = [
  {
    title: "Engineering-first",
    description:
      "We ship production systems—not slide decks. Every solution is built to perform, integrate, and scale.",
  },
  {
    title: "AI with purpose",
    description:
      "Automation only matters when it saves time and drives outcomes. We focus on high-impact workflows first.",
  },
  {
    title: "Partnership mindset",
    description:
      "We work alongside your team with clear communication, transparent timelines, and long-term support.",
  },
  {
    title: "Radical clarity",
    description:
      "No jargon, no black boxes. You always know what we're building, why, and what comes next.",
  },
];

export const stats = [
  { value: "2024", label: "Founded" },
  { value: "50+", label: "Projects delivered" },
  { value: "12+", label: "Industries served" },
];

export const culture = {
  label: "How we work",
  title: "Small team. Big ownership.",
  points: [
    "Direct access to the people building your product—no layers of account management.",
    "Weekly demos and async updates so you're never guessing about progress.",
    "Documentation and handoff built in from day one, not bolted on at the end.",
  ],
};

/**
 * Team hierarchy — edit names, roles, bios, and images below.
 * Founders share one card (use `founders.image` for a joint photo).
 */
export const teamHierarchy = {
  founders: {
    title: "Founders",
    image: "/founders.png",
    members: [
      {
        id: "founder-1",
        name: "Rahul C Biradar",
        role: "Co-founder",
        bio: "Leads strategy, client partnerships, and product vision.",
        linkedin: "https://www.linkedin.com/in/rahul-biradar-05b68b263/",
        email: "rahulbiradar7134@gmail.com",
      },
      {
        id: "founder-2",
        name: "Nagesh S Kumbar",
        role: "Co-founder",
        bio: "Architects technical solutions and oversees engineering delivery.",
        linkedin: "https://www.linkedin.com/in/nageshkumbar980/",
        email: "nageshkumbar70@gmail.com",
      },
    ],
  },
  strategists: [
    {
      id: "tech-strategist",
      role: "Tech Strategist",
      name: "Hemalatha M",
      bio: "Shapes technical direction, architecture decisions, and innovation roadmap.",
      image: "",
      linkedin: "https://www.linkedin.com/in/hemalatha-m-604211212/",
      email: "hemalatha.m@verkoni.com",
    },
    {
      id: "community-strategist",
      role: "Community Strategist",
      name: "Radhika A M",
      bio: "Builds partnerships, community presence, and client relationships.",
      image: "",
      linkedin: "https://www.linkedin.com/in/radhika-a-m-604211212/",
      email: "radhika.a.m@verkoni.com",
    },
  ],
  contributors: [
    {
      id: "founding-engineer",
      role: "Founding Engineer",
      name: "Keerthan Gowda C",
      bio: "Ships automation systems and product features across the stack.",
      image: "/Keerthan.png",
      linkedin: "",
      email: "",
    },
    {
      id: "social-media-team",
      role: "Social Media Team",
      name: "Ayan",
      nameRight: "Qayyum",
      bio: "Owns content, campaigns, and brand voice across digital channels.",
      image: "/Social_media2.png",
      // isTeam: true,
      wide: true,
      linkedin: "",
      email: "",
    },
  ],
};

export const aboutCta = {
  title: "Want to work with us?",
  description:
    "Whether you're exploring automation or planning a full product build, we'd love to hear from you.",
  primaryLabel: "Get in touch",
  primaryHref: "/contact",
  secondaryLabel: "View our work",
  secondaryHref: "/",
  secondaryHash: "services",
};
