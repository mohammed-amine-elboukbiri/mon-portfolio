import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { profile } from "@/data/profile";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Accueil | {profile.name}</title>
                <meta
                    name="description"
                    content="Portfolio de Mohammed Amine EL BOUKBIRI, étudiant et développeur full stack."
                />
            </Helmet>

            <section className="section-spacing">
                <div className="glass-strong hero-card rounded-[2rem] p-6 md:p-8">
                    <div className="max-w-3xl">
            <span className="soft-badge mb-4">
              Mohammed Amine EL BOUKBIRI • Développeur Full Stack
            </span>

                        <h1 className="section-title">
                            Salut, moi c’est{" "}
                            <span className="gradient-text">{profile.name}</span>
                        </h1>

                        <p className="mt-4 text-lg text-slate-300 md:text-xl">
                            {profile.role}
                        </p>

                        <p className="mt-6 max-w-2xl text-slate-400 leading-8">
                            {profile.about}
                        </p>

                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <Link to="/projects" className="btn-primary">
                                Voir mes projets
                            </Link>
                            <Link to="/contact" className="btn-secondary">
                                Me contacter
                            </Link>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {["React", "Spring Boot", "Java", "MySQL"].map((item) => (
                                <span key={item} className="soft-badge">
                  {item}
                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid-cards md:grid-cols-3">
                    <div className="glass card-hover rounded-[1.5rem] p-6">
                        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                            Profil
                        </p>
                        <h2 className="panel-title mt-3">Étudiant & Développeur</h2>
                        <p className="panel-text mt-4">
                            Curieux, sérieux et autonome, je développe mes compétences en
                            programmation pour construire des applications modernes,
                            performantes et bien structurées.
                        </p>
                    </div>

                    <div className="glass card-hover rounded-[1.5rem] p-6">
                        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                            Localisation
                        </p>
                        <h2 className="panel-title mt-3">{profile.location}</h2>
                        <p className="panel-text mt-4">
                            Disponible pour un stage en développement web et pour participer
                            à des projets académiques ou professionnels.
                        </p>
                    </div>

                    <div className="glass card-hover rounded-[1.5rem] p-6">
                        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                            Contact
                        </p>
                        <h2 className="panel-title mt-3 break-all">{profile.email}</h2>
                        <p className="panel-text mt-4">
                            N’hésite pas à me contacter pour un stage, une collaboration ou
                            un projet.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}