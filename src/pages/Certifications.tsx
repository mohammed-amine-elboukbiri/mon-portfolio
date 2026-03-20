import { Helmet } from "react-helmet-async";
import CertificationCard from "@/components/CertificationCard";
import { certifications } from "@/data/certifications";

export default function Certifications() {
    return (
        <>
            <Helmet>
                <title>Certifications | Mohammed Amine EL BOUKBIRI</title>
                <meta
                    name="description"
                    content="Retrouvez mes certifications techniques et professionnelles."
                />
            </Helmet>

            <section className="space-y-8">
                <div>
                    <h1 className="section-title">Certifications</h1>
                    <p className="section-subtitle mt-3">
                        Mes badges et certifications dans les domaines du cloud, du
                        développement et des technologies modernes.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {certifications.map((c) => (
                        <CertificationCard key={`${c.title}-${c.issueDate}`} c={c} />
                    ))}
                </div>
            </section>
        </>
    );
}