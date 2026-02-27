import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Cloud Adoption Strategies That Minimize Operational Risk",
    paragraph:
      "A practical framework for assessing readiness, sequencing migrations, and building governance for sustainable cloud modernization.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Aisha Carter",
      image: "/images/blog/author-03.png",
      designation: "Cloud Strategy Lead",
    },
    tags: ["cloud"],
    publishDate: "2026",
  },
  {
    id: 2,
    title: "Cybersecurity Best Practices for Growing Organizations",
    paragraph:
      "Learn the controls, processes, and monitoring standards that strengthen resilience against modern cyber threats.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Michael Patel",
      image: "/images/blog/author-02.png",
      designation: "Security Consulting Director",
    },
    tags: ["security"],
    publishDate: "2026",
  },
  {
    id: 3,
    title: "Digital Transformation Case Studies and Modern Architecture Trends",
    paragraph:
      "See how enterprise teams modernize platforms with domain-driven architecture, DevOps acceleration, and data-informed decisioning.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Elena Ruiz",
      image: "/images/blog/author-03.png",
      designation: "Enterprise Architecture Principal",
    },
    tags: ["transformation"],
    publishDate: "2026",
  },
];
export default blogData;
