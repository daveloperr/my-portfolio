const projects = [
    {
        id: 1,
        title: "InnovationOne Inc.",
        year: "2026",
        slug: "innovationone",
        deliverables: ["Web Design", "Web Development"],
        stack: ["React", "W"],

        description: "Designed and developed a new website for InnovationOne Inc. by successfully executing their updated brand identity guidelines into an intuitive user interface.",
        imageUrl: "/innov_front.jpg",
        layout: [
            // ↓ EDIT THIS PER PROJECT
            // "full"  = 1 big photo spanning full width
            // "split" = 2 photos side by side
            // just change the order and types to get your layout
            { type: "full", images: ["/innov_front.jpg"] },
            { type: "split", images: ["/innov_2.jpg", "/innov_3.jpg"] },
            { type: "split", images: ["/innov_4.jpg", "/innov_5.jpg"] },
        ]
    },
    {
        id: 2,
        title: "UNAI Asset Management",
        year: "2026",
        slug: "unai",
        deliverables: ["Web Development"],
        description: "Enhanced the UNAI Asset Management platform by debugging code and building out non-functional features to deliver a seamless, fully operational user interface",
        imageUrl: "/Asset.webp",
        layout: [
            { type: "split", images: ["/asset_1.jpg", "/asset_2.jpg"] },
            { type: "full", images: ["/asset_3.jpg"] },
            { type: "split", images: ["/asset_4.jpg", "/asset_5.jpg"] },
        ]
    },
    {
        id: 3,
        title: "DRL Construction Services",
        year: "2025-2026",
        slug: "drl",
        deliverables: ["Web Design", "Web Development"],
        description: "Developed a construction project management platform featuring built-in cost estimation and progress billing modules.",
        imageUrl: "/capstone.jpg",
        layout: [
            { type: "full", images: ["/capstone_1.jpg"] },
            { type: "full", images: ["/capstone_2.jpg"] },
            { type: "split", images: ["/capstone_3.jpg", "/capstone_4.jpg"] },
        ]
    },
    {
        id: 4,
        title: "Makeup E-commerce Platform",
        year: "2025",
        slug: "makeup",
        deliverables: ["Web Design", "Web Development"],
        description: "Developed a full-stack beauty e-commerce case study, focusing on database integration, strict backend data validation, and secure transactional workflows.",
        imageUrl: "/celestial.jpg",
        layout: [
            { type: "split", images: ["/celestial_1.jpg", "/celestial_2.jpg"] },
            { type: "split", images: ["/celestial_3.jpg", "/celestial_4.jpg"] },
            { type: "full", images: ["/celestial_5.jpg"] },
        ]
    },
    {
        id: 5,
        title: "Kitchenware E-commerce Platform",
        year: "2024",
        slug: "kitchenware",
        deliverables: ["Web Design", "Web Development"],
        description: "Built a full-stack e-commerce web application case study, implementing user authentication, product catalogs, and a responsive shopping cart interface.",
        
        imageUrl: "/kitchen.jpg",
        layout: [
            { type: "full", images: ["/kitchen_1.jpg"] },
            { type: "split", images: ["/kitchen_2.jpg", "/kitchen_3.jpg"] },
            { type: "full", images: ["/kitchen_4.jpg"] },
        ]
    },
];

export default projects;