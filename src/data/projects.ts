// data/projects.ts

export type Project = {
    id: number;
    title: string;
    year: string;
    slug: string;
    link?: string;

    deliverables: string[];
    description: string;
    techStack?: string[];
    roles?: string[];
    imageUrl: string;
    layout: {
        type: "full" | "split";
        images: string[];
    }[];
};

const projects: Project[] = [
    {
        id: 1,
        title: "InnovationOne Inc.",
        link: "https://innovationone.com.ph/",
        year: "2026",
        slug: "innovationone",
        deliverables: ["Web Design & Development", "Web Responsiveness"],
        techStack: ["Figma", "React.js", "TypeScript", "Tailwind CSS", "PHP", "MySQL", "Firebase", "Framer Motion", "Embla Carousel"],
        roles: ["UI Designer", "Full Stack Developer"],
        description: "Designed and developed a new website for InnovationOne Inc. by successfully executing their updated brand identity guidelines into an intuitive user interface.",
        imageUrl: "/innov_front.jpg",
        layout: [
            { type: "full", images: ["/innov_front.jpg"] },
            { type: "split", images: ["/assets/innov/innov1.webp", "/assets/innov/innov2.webp"] },
            { type: "full", images: ["/assets/innov/mobile_mockup.webp"] },
            { type: "full", images: ["/assets/innov/innov4.webp"] },
            { type: "split", images: ["/assets/innov/innov5.webp", "/assets/innov/innov6.webp"] },
            { type: "full", images: ["/assets/innov/innov3.webp"] },



        ],
    },
    {
        id: 2,
        title: " Asset Management",
        year: "2026",
        slug: "unai",
        deliverables: ["Web Development"],
        techStack: ["React", "Node.js"],
        roles: ["Full Stack Developer"],
        description: "Enhanced the United Neon Advertising Inc. ISTI Asset Management platform by debugging code and building out non-functional features to deliver a seamless, fully operational user interface",
        imageUrl: "/Asset.webp",
        layout: [
            { type: "full", images: ["/Asset.webp"] },
            { type: "split", images: ["/assets/unai/unai1.webp", "/assets/unai/unai2.webp"] },
            { type: "full", images: ["/assets/unai/unai5.webp"] },
            { type: "split", images: ["/assets/unai/unai3.webp", "/assets/unai/unai4.webp"] },



        ],
    },
    {
        id: 3,
        title: "DRL Construction",
        link: "https://drive.google.com/file/d/1GwIEKC9AqFpyULz0k7wZcq_d7lt4xnGh/view?usp=sharing",
        year: "2025-2026",
        slug: "drl",
        deliverables: ["Web Design", "Web Development"],
        techStack: ["React", "Next.js"],
        roles: ["Full Stack Developer"],
        description: "Developed a construction project management platform featuring built-in cost estimation and progress billing modules.",
        imageUrl: "/drl_front.webp",
        layout: [
            { type: "full", images: ["/drl_front.webp"] },
            { type: "full", images: ["/assets/drl/drl4.webp"] },
            { type: "split", images: ["/assets/drl/drl1.webp", "/assets/drl/drl5.webp"] },
            { type: "full", images: ["/assets/drl/billing_mockup.webp"] },

            { type: "split", images: ["/assets/drl/drl2.webp", "/assets/drl/drl3.webp"] },
            { type: "full", images: ["/assets/drl/drl6.webp"] },


        ],
    },
    {
        id: 4,
        title: "Makeup E-commerce",
        year: "2025",
        slug: "makeup",
        deliverables: ["Web Design", "Web Development"],
        techStack: ["React", "Node.js"],
        roles: ["UI Designer", "Full Stack Developer"],
        description: "Developed a full-stack beauty e-commerce case study, focusing on database integration, strict backend data validation, and secure transactional workflows.",
        imageUrl: "/celestial_front.webp",
        layout: [
            { type: "full", images: ["/celestial_front.webp"] },
            { type: "full", images: ["/assets/celestial/cl3.webp"] },
            { type: "split", images: ["/assets/celestial/cl2.webp", "/assets/celestial/cl4.webp"] },
            { type: "full", images: ["/assets/celestial/cl5.webp"] },
            { type: "full", images: ["/assets/celestial/celestial_mobile.webp"] },
            { type: "split", images: ["/assets/celestial/celestial_macbook.webp", "/assets/celestial/cl1.webp"] },


        ],
    },
    {
        id: 5,
        title: "Kitchen E-commerce",
        year: "2024",
        slug: "kitchenware",
        deliverables: ["Web Design", "Web Development"],
        techStack: ["React", "Node.js"],
        roles: ["Full Stack Developer"],
        description: "Built a full-stack e-commerce web application case study, implementing user authentication, product catalogs, and a responsive shopping cart interface.",
        imageUrl: "/kitchen_front.webp",
        layout: [
            { type: "full", images: ["/kitchen_front.webp"] },
            { type: "full", images: ["/assets/kitchencomfort/k4.webp"] },
            { type: "split", images: ["/assets/kitchencomfort/k2.webp", "/assets/kitchencomfort/k1.webp"] },
            { type: "full", images: ["/assets/kitchen/kitchen4.webp"] },
            { type: "full", images: ["/assets/kitchencomfort/k3.webp"] },
            { type: "full", images: ["/assets/kitchencomfort/kitchen_macbook.webp"] },

        ],
    },
];

export default projects;