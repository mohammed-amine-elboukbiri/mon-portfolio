export type Project = {
    title: string;
    description: string;
    stack: string[];
    github?: string;
    demo?: string;
};

export const projects: Project[] = [
    {
        title:
            "Développement d’une application web institutionnelle de l’ENCG El Jadida",
        description:
            "Travail sur la conception, le développement et la mise en ligne du site.",
        stack: ["HTML", "CSS", "Laravel (PHP)"],
    },

    {
        title: "Gestion de stock",
        description:
            "Application web développée avec Spring Boot, Thymeleaf et MySQL permettant de gérer un système de gestion de stock.",
        stack: ["Java", "Spring Boot", "Thymeleaf", "MySQL"],
        github:
            "https://github.com/mohammed-amine-elboukbiri/Mini-Projet---Gestion-de-Stock.git",
    },

    {
        title: "StudentHub Application",
        description:
            "Application web complète de gestion des étudiants avec Spring Boot (backend) et React (frontend), connectée à MySQL.",
        stack: ["Spring Boot", "React", "MySQL"],
        github:
            "https://github.com/mohammed-amine-elboukbiri/StudentHub-Application-Full-Stack-de-gestion-des-etudiants-avec-Spring-Boot-React-et-MySQL.git",
    },

    {
        title: "Système de gestion d’utilisateurs et produits",
        description:
            "Application web de gestion d'inventaire avec Jakarta EE, architecture MVC et Hibernate comme ORM.",
        stack: ["Java", "Jakarta EE", "Hibernate", "JSP/Servlet"],
        github:
            "https://github.com/mohammed-amine-elboukbiri/Systeme-de-Gestion-d-Utilisateurs-et-de-Produits-avec-JSP-Servlet-et-Hibernate.git",
    },

    {
        title: "Gestion de Restaurant",
        description:
            "Application desktop de gestion de restaurant avec Java Swing, gestion des commandes, statistiques et notifications email.",
        stack: ["Java", "Swing", "MySQL", "JDBC", "JFreeChart", "Java Mail"],
        github: "https://github.com/OTHMANE-ELM/Gestion-Restaurant.git",
    },

];