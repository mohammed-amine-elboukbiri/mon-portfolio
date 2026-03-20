import type { Certification } from "@/data/certifications";

function mmYYYY(s: string) {
    const [y, m] = s.split("-");
    return `${m}/${y}`;
}

export default function CertificationCard({ c }: { c: Certification }) {
    const today = new Date().toISOString().slice(0, 7);
    const isExpired =
        c.status === "expired" || (c.expiryDate ? c.expiryDate < today : false);

    return (
        <article
            className={`glass card-hover rounded-3xl p-5 ${
                isExpired ? "opacity-80" : ""
            }`}
            aria-label={`Certification ${c.title}`}
        >
            {c.image && (
                <div className="mb-4 flex justify-center rounded-2xl border border-white/10 bg-white/5 p-4">
                    <img
                        src={c.image}
                        alt={c.imageAlt ?? c.title}
                        width={256}
                        height={256}
                        loading="lazy"
                        className="h-24 w-24 object-contain"
                    />
                </div>
            )}

            <h3 className="text-lg font-bold leading-snug text-white">{c.title}</h3>

            <p className="mt-2 text-sm text-slate-400">
                {c.issuer} • {mmYYYY(c.issueDate)}
                {c.expiryDate ? ` → ${mmYYYY(c.expiryDate)}` : ""}
                {c.credentialId ? ` • ID ${c.credentialId}` : ""}
            </p>

            {c.skills?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                    {c.skills.map((skill) => (
                        <span key={skill} className="soft-badge">
              {skill}
            </span>
                    ))}
                </div>
            ) : null}

            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
                {c.credentialUrl && (
                    <a
                        className="btn-secondary"
                        href={c.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Voir le certificat ${c.title}`}
                    >
                        Voir le certificat
                    </a>
                )}

                {isExpired && (
                    <span className="rounded-full border border-red-400/30 bg-red-500/10 px-3 py-1 text-red-300">
            Expirée
          </span>
                )}

                {c.status === "revoked" && (
                    <span className="rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-amber-300">
            Révoquée
          </span>
                )}
            </div>
        </article>
    );
}