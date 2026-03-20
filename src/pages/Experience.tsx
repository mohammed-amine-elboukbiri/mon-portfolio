import { Helmet } from "react-helmet-async";

export default function Experience() {
    return (
        <>
            <Helmet>
                <title>Parcours | Mohammed Amine EL BOUKBIRI</title>
                <meta
                    name="description"
                    content="Mon parcours académique, mes expériences et mes réalisations."
                />
            </Helmet>

            <section className="section-spacing">
                <div>
                    <h1 className="section-title">Parcours</h1>
                    <p className="section-subtitle mt-3">
                        Une vue d’ensemble de mes expériences, projets marquants et étapes
                        importantes de mon parcours.
                    </p>
                </div>

                <div className="glass-strong rounded-[2rem] p-6 md:p-8">
                    <div className="timeline">
                        <div className="timeline-item">
                            <h3 className="panel-title">Stage / Expérience 1</h3>
                            <p className="mt-1 text-sm text-slate-400">
                                2025 — Entreprise / École
                            </p>
                            <p className="mt-3 panel-text">
                                Décris ici brièvement ton rôle, les technologies utilisées et le
                                résultat obtenu.
                            </p>
                        </div>

                        <div className="timeline-item">
                            <h3 className="panel-title">Projet marquant</h3>
                            <p className="mt-1 text-sm text-slate-400">
                                2024 — Application web
                            </p>
                            <p className="mt-3 panel-text">
                                Ajoute ici un projet important de ton parcours avec une courte
                                description.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}