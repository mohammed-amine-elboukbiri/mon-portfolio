import {
    Atom,
    Braces,
    Code2,
    Database,
    FileCode2,
    Layers3,
    Server,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const frontendSkills = [
    { name: "React", icon: Atom },
    { name: "JavaScript", icon: Braces },
    { name: "HTML", icon: FileCode2 },
    { name: "CSS", icon: Code2 },
];

const backendSkills = [
    { name: "JEE", icon: Server },
    { name: "Spring Boot", icon: Layers3 },
    { name: "MySQL", icon: Database },
    { name: "Oracle", icon: Database },
    { name: "Base de données", icon: Database },
];

function SkillCard({
                       name,
                       icon: Icon,
                   }: {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
}) {
    return (
        <div className="glass card-hover rounded-[1.5rem] p-6">
            <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
                    <Icon className="h-7 w-7 text-slate-200" />
                </div>

                <div>
                    <h3 className="panel-title">{name}</h3>
                    <p className="text-sm text-slate-400">Technologie</p>
                </div>
            </div>
        </div>
    );
}

export default function Skills() {
    return (
        <>
            <Helmet>
                <title>Compétences | Mohammed Amine EL BOUKBIRI</title>
                <meta
                    name="description"
                    content="Compétences techniques en front-end, back-end et bases de données."
                />
            </Helmet>

            <section className="section-spacing">
                <div>
                    <h1 className="section-title">Compétences</h1>
                    <p className="section-subtitle mt-3">
                        Voici les technologies que j’utilise pour créer des applications web
                        modernes, des interfaces interactives et des solutions back-end
                        solides.
                    </p>
                </div>

                <div className="section-spacing">
                    <div>
                        <h2 className="panel-title text-2xl mb-5">Front-end</h2>
                        <div className="grid-cards sm:grid-cols-2 xl:grid-cols-4">
                            {frontendSkills.map((skill) => (
                                <SkillCard
                                    key={skill.name}
                                    name={skill.name}
                                    icon={skill.icon}
                                />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="panel-title text-2xl mb-5">
                            Back-end & Base de données
                        </h2>
                        <div className="grid-cards sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                            {backendSkills.map((skill) => (
                                <SkillCard
                                    key={skill.name}
                                    name={skill.name}
                                    icon={skill.icon}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}