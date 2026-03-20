import { ExternalLink, Github } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { projects } from "../data/projects";

export default function Projects() {
    return (
        <>
            <Helmet>
                <title>Projets | Mohammed Amine EL BOUKBIRI</title>
                <meta
                    name="description"
                    content="Découvrez les projets réalisés par Mohammed Amine EL BOUKBIRI en développement web, backend et automatisation."
                />
            </Helmet>

            <section className="space-y-8">
                <div className="space-y-3">
                    <p className="section-kicker">MY WORK</p>
                    <h1 className="section-title">Projets</h1>
                    <p className="section-subtitle max-w-2xl">
                        Une sélection de projets réalisés en développement web, backend et
                        automatisation.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {projects.map((p, index) => (
                        <article key={index} className="card-panel p-6 space-y-5">
                            <div className="space-y-3">
                                <h2 className="text-2xl font-semibold text-white">{p.title}</h2>
                                <p className="text-slate-300 leading-relaxed">{p.description}</p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {p.stack.map((tech, i) => (
                                    <span key={i} className="skill-chip">
                    {tech}
                  </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-3 pt-2">
                                {p.demo && (
                                    <a
                                        href={p.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn-secondary"
                                    >
                                        <ExternalLink size={16} />
                                        <span>Voir le projet</span>
                                    </a>
                                )}

                                {p.github && (
                                    <a
                                        href={p.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn-primary"
                                    >
                                        <Github size={16} />
                                        <span>GitHub</span>
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </>
    );
}