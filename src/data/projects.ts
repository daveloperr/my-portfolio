// data/projects.ts

export type Project = {
    id: number;
    title: string;
    year: string;
    slug: string;
    link?: string;

    deliverables: string[];
    overview: string[];
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
        overview: [
            "InnovationOne Inc. is a full-service digital marketing agency and the dedicated digital arm of United Neon Media Group (UNMG). The project involved designing and developing a corporate web platform that reflects the company's brand identity while providing a seamless and engaging user experience.",

            "I worked on the project as a UI Designer and Full-Stack Developer during my internship at United Neon Advertising Inc. My responsibilities included designing the user interface, establishing the visual design system, translating branding into intuitive user experiences, and developing both the front-end and back-end architecture."
        ],

        techStack: ["Figma", "React.js", "TypeScript", "Tailwind CSS", "PHP", "MySQL", "Firebase", "Framer Motion", "Embla Carousel"],
        roles: ["UI Designer", "Full Stack Developer"],
        description: "Designed and developed a new website for InnovationOne Inc. by successfully executing their updated brand identity guidelines into an intuitive user interface.",
        imageUrl: "/innov_front.webp",
        layout: [
            { type: "full", images: ["/innov_front.webp"] },
            { type: "split", images: ["/assets/innov/innov1.webp", "/assets/innov/innov2.webp"] },
            { type: "full", images: ["/assets/innov/mobile_mockup.webp"] },
            { type: "full", images: ["/assets/innov/innov3.webp"] },
            { type: "split", images: ["/assets/innov/innov5.webp", "/assets/innov/innov6.webp"] },
            { type: "full", images: ["/assets/innov/innov4.webp"] },



        ],
    },
    {
        id: 2,
        title: " Asset Management",
        link: "https://its.unmg.com.ph/login",

        year: "2026",
        slug: "unai",
        deliverables: ["Web Development"],
        overview: [
            "The Asset Management Portal is an internal web platform developed for the IT Department of United Neon Advertising Inc. It allows the team to manage and track company assets, including device information, employee assignments, asset statuses, and inventory records. The system centralizes asset data, improving visibility, accountability, and operational efficiency.",

            "I worked on the project as a Full-Stack Developer. My responsibilities included debugging and enhancing existing modules, developing front-end and back-end features, conducting user testing, and managing data entries using Python and Excel. I collaborated closely with the IT team to ensure the platform met operational requirements and streamlined asset management workflows."

        ],
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
        overview: [
            "The CloudConstruct is a web-based construction project management system developed for DRL Construction Services to digitalize project monitoring and workflows. The platform enables engineers and project managers to track construction progress, generate digital estimates and billing proposals, manage material requests, create project reports, and export records for documentation. It also provides project insights through visual dashboards displaying billing summaries, projected profits, and budget allocations.",


            "I served as the Lead Full-Stack Developer and System Architect. My responsibilities included gathering requirements from stakeholders, designing technical solutions, defining the overall system architecture, and developing core features. I worked closely with the client throughout the project to ensure the system addressed business needs while improving operational efficiency and decision-making."
        ],
        techStack: ["React", "Next.js"],
        roles: ["Full Stack Developer"],
        description: "Developed a construction project management platform featuring built-in cost estimation and progress billing modules.",
        imageUrl: "/drl_front.webp",
        layout: [
            { type: "full", images: ["/drl_front.webp"] },
            { type: "split", images: ["/assets/drl/drl1.webp", "/assets/drl/drl5.webp"] },
            { type: "full", images: ["/assets/drl/drl4.webp"] },
            { type: "full", images: ["/assets/drl/login_mockup.webp"] },
            { type: "split", images: ["/assets/drl/drl2.webp", "/assets/drl/drl3.webp"] },
            { type: "full", images: ["/assets/drl/billing_mockup.webp"] },


        ],
    },
    {
        id: 4,
        title: "Makeup E-commerce",
        year: "2025",
        slug: "makeup",
        deliverables: ["Web Design", "Web Development"],
        overview: [
            "The Beauty E-Commerce Platform is a full-stack e-commerce case study designed to simulate a modern online retail experience for beauty and skincare products. The platform includes secure user authentication, product catalog management, shopping cart functionality, and transactional workflows, providing a complete end-to-end e-commerce experience.",

            "I worked on the project as a UI Designer and Full-Stack Developer. My role involved designing the user interface, implementing responsive front-end experiences, integrating database systems, enforcing backend data validation, and developing secure transaction workflows. The project focused on creating a striking visual and user-friendly shopping experience while following modern web development best practices."
        ],
        techStack: ["React", "Node.js"],
        roles: ["UI Designer", "Full Stack Developer"],
        description: "Developed a full-stack beauty e-commerce case study, focusing on database integration, strict backend data validation, and secure transactional workflows.",
        imageUrl: "/celestial_front.webp",
        layout: [
            { type: "full", images: ["/celestial_front.webp"] },
            { type: "split", images: ["/assets/celestial/cl2.webp", "/assets/celestial/cl4.webp"] },

            { type: "full", images: ["/assets/celestial/celestial_mobile.webp"] },
            { type: "full", images: ["/assets/celestial/cl3.webp"] },

            { type: "split", images: ["/assets/celestial/cl5.webp", "/assets/celestial/cl1.webp"] },
            { type: "full", images: ["/assets/celestial/celestial_macbook.webp"] },




        ],
    },
    {
        id: 5,
        title: "Kitchen E-commerce",
        year: "2024",
        slug: "kitchenware",
        deliverables: ["Web Design", "Web Development"],
        overview: [
            "The Kitchen E-Commerce Platform is a full-stack e-commerce case study developed for a kitchenware and home essentials retailer. The platform allows customers to browse products, manage their shopping carts, and complete purchases securely. The system was designed to replicate the functionality of a modern online retail platform.",

            "I worked on the project as a UI Designer and Full-Stack Developer. My responsibilities included designing intuitive user interfaces, developing responsive front-end components, implementing secure user authentication, integrating product and inventory management systems, and building shopping cart and checkout functionalities. The project emphasized usability, performance, and scalable architecture to support a seamless online shopping experience."
        ],
        techStack: ["React", "Node.js"],
        roles: ["Full Stack Developer"],
        description: "Built a full-stack e-commerce web application case study, implementing user authentication, product catalogs, and a responsive shopping cart interface.",
        imageUrl: "/kitchen_front.webp",
        layout: [
            { type: "full", images: ["/kitchen_front.webp"] },
            { type: "split", images: ["/assets/kitchencomfort/k4.webp", "/assets/kitchencomfort/k2.webp"] },
            { type: "full", images: ["/assets/kitchencomfort/kitchen_mockup.webp"] },
            { type: "split", images: ["/assets/kitchencomfort/k1.webp", "/assets/kitchencomfort/k3.webp"] },

        ]
    },
];

export default projects;