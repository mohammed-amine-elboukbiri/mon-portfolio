export type Certification = {
    title: string;
    issuer: string;
    issueDate: string;        // "YYYY-MM"
    expiryDate?: string;      // "YYYY-MM"
    credentialId?: string;
    credentialUrl?: string;
    skills?: string[];
    tags?: string[];
    image?: string;           // "/certs/aws-saa.webp"
    imageAlt?: string;        // "Badge AWS SAA"
    status?: "active" | "expired" | "revoked";
};

export const certifications: Certification[] = [
    {
        title: "Hibernate & JPA",
        issuer: "MLIAEdu",
        issueDate: "2026-03",
        credentialUrl: "https://mliaedu.toubkalit.com/verify-certificate/28-7f4e7e34-06b3-45fc-ab65-afee61d97529-466636",
        skills: ["Hibernate", "JPA", "Java"],
        tags: ["Backend", "ORM"],
        image: "/certs/hibernate.png",
        imageAlt: "Certificat Hibernate JPA",
        status: "active"
    },
    {
        title: "Développement Front-End moderne avec React",
        issuer: "MLIAEdu",
        issueDate: "2026-03",
        credentialUrl: "https://mliaedu.toubkalit.com/verify-certificate/26-7f4e7e34-06b3-45fc-ab65-afee61d97529-762109",
        skills: ["React", "JavaScript", "HTML", "CSS"],
        tags: ["Frontend", "React"],
        image: "/certs/react.png",
        imageAlt: "Certificat Développement Front-End moderne avec React",
        status: "active"
    }
];