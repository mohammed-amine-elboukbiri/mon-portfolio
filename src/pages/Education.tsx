export default function Education() {
    const education = [
        {
            period: "2025 - 2026",
            title: "Licence : Systèmes Informatiques Répartis (SIR)",
        },
        {
            period: "2023 - 2025",
            title:
                "Math Informatique Physique Chimie – Faculté des Sciences et Techniques Gueliz, Marrakech",
        },
        {
            period: "2022 - 2023",
            title: "Bac Science Physique – École Tanwir",
        },
    ];

    return (
        <section className="mx-auto max-w-5xl px-4 py-16">
            {/* Title */}
            <div className="mb-12 text-center">
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
                    Education
                </p>
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    Formation
                </h2>
                <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-cyan-400/40" />
            </div>

            {/* List */}
            <div className="space-y-6">
                {education.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.07]"
                    >
                        <p className="mb-2 text-sm font-semibold text-cyan-400">
                            {item.period}
                        </p>

                        <p className="text-lg font-medium text-white leading-relaxed">
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}