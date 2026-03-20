import { Mail, Phone, Github, Linkedin, MapPin, Briefcase } from "lucide-react";

const contactItems = [
    {
        title: "Email",
        value: "mohamedamineelboukbiri@gmail.com",
        href: "mailto:mohamedamineelboukbiri@gmail.com",
        icon: Mail,
    },
    {
        title: "Phone",
        value: "+212 777208828",
        href: "tel:+212777208828",
        icon: Phone,
    },
    {
        title: "GitHub",
        value: "github.com/mohammed-amine-elboukbiri",
        href: "https://github.com/mohammed-amine-elboukbiri",
        icon: Github,
    },
    {
        title: "LinkedIn",
        value: "linkedin.com/in/mohammed-amine-elboukbiri-b4a332365",
        href: "https://www.linkedin.com/in/mohammed-amine-elboukbiri-b4a332365/",
        icon: Linkedin,
    },
];

export default function Contact() {
    return (
        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mb-10">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                    Let&apos;s Talk
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Contact
                </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.05fr_1.45fr]">
                {/* Left side */}
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-md sm:p-8">
                    <h3 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
                        Contact
                    </h3>

                    <p className="mb-8 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                        Available for a PFE internship in web development, backend
                        engineering, and automation-focused projects.
                    </p>

                    <div className="space-y-5">
                        <div className="rounded-2xl border border-white/10 bg-black/20 p-5 transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.06]">
                            <div className="mb-3 flex items-center gap-3">
                                <Briefcase className="h-5 w-5 text-cyan-400" />
                                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400">
                                    Looking For
                                </p>
                            </div>
                            <p className="text-base leading-7 text-slate-300">
                                A final-year internship where product quality and backend
                                execution are both important.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-black/20 p-5 transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.06]">
                            <div className="mb-3 flex items-center gap-3">
                                <MapPin className="h-5 w-5 text-cyan-400" />
                                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400">
                                    Base
                                </p>
                            </div>
                            <p className="text-base leading-7 text-slate-300">
                                Casablanca, Maroc
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right side */}
                <div className="grid gap-5">
                    {contactItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <a
                                key={item.title}
                                href={item.href}
                                target={item.href.startsWith("http") ? "_blank" : undefined}
                                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                                className="group flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.07] sm:p-6"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                                        <Icon className="h-5 w-5" />
                                    </div>

                                    <div>
                                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400">
                                            {item.title}
                                        </p>
                                        <p className="break-all text-lg font-medium text-white sm:text-xl">
                                            {item.value}
                                        </p>
                                    </div>
                                </div>

                                <span className="ml-4 shrink-0 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition duration-300 group-hover:border-cyan-400/30 group-hover:text-cyan-400">
                  Open
                </span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}