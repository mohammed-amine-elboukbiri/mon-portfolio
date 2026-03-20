import { Link, NavLink, Outlet } from "react-router-dom";

const links = [
    { to: "/", label: "Accueil" },
    { to: "/projects", label: "Projets" },
    { to: "/skills", label: "Compétences" },
    { to: "/education", label: "Formation" },
    { to: "/certifications", label: "Certifications" },
    { to: "/contact", label: "Contact" },
];

export default function RootLayout() {
    return (
        <div className="page-shell min-h-screen">
            <div className="bg-orb bg-orb-1" />
            <div className="bg-orb bg-orb-2" />
            <div className="bg-orb bg-orb-3" />

            <header className="topbar">
                <div className="container-app">
                    <div className="topbar-inner">
                        <Link to="/" className="brand">
                            <span className="brand-dot" />
                            <span className="gradient-text">Mohammed Amine EL BOUKBIRI</span>
                        </Link>

                        <nav className="hidden md:flex items-center gap-2">
                            {links.map((link) => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? "active" : ""}`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </nav>
                    </div>
                </div>
            </header>

            <main className="container-app py-8 md:py-14">
                <Outlet />
            </main>

            <footer className="footer-line mt-16">
                <div className="container-app flex flex-col items-center justify-center py-8 text-sm text-slate-400">
                    <p className="text-center">
                        © 2026 Mohammed Amine EL BOUKBIRI. Tous droits réservés.
                    </p>
                </div>
            </footer>
        </div>
    );
}