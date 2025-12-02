import { Link } from "react-router";
import { colors } from "../styles/colors";

export default function Footer() {
    return (
        <footer className="py-16 px-6 border-t bg-black text-white" style={{
            borderColor: colors.gray600
        }}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Logo */}
                    <div className="md:col-span-2 space-y-5">
                        {/* Logo */}
                        <div>
                            <Link to="/">
                                <div className="lg:w-[200px] w-[150px]">
                                    <img src="/logo/full.svg" alt="Terraforge Logo" className="w-full h-auto object-contain" />
                                </div>
                            </Link>
                        </div>
                        <p className="text-base mb-6" style={{ color: colors.gray400 }}>
                            A subsidiary of AluBond (Est. 1999)
                            <br />
                            Forging the future of architectural surfaces
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {['Products', 'Projects', 'About', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={`/${item.toLowerCase()}`}
                                        className="transition-colors duration-300"
                                        style={{ color: colors.gray400 }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = colors.primary}
                                        onMouseLeave={(e) => e.currentTarget.style.color = colors.gray400}
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2" style={{ color: colors.gray400 }}>
                            <li>hello@terraforgeco.com</li>
                            <li>+23480123456789, +23480123456789</li>
                            <li className="pt-4">
                                <div className="flex gap-4">
                                    {['LinkedIn', 'Instagram'].map((social) => (
                                        <a
                                            key={social}
                                            href="#"
                                            className="transition-colors duration-300"
                                            style={{ color: colors.gray400 }}
                                            onMouseEnter={(e) => e.currentTarget.style.color = colors.primary}
                                            onMouseLeave={(e) => e.currentTarget.style.color = colors.gray400}
                                        >
                                            {social}
                                        </a>
                                    ))}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    className="pt-8 border-t text-center text-sm"
                    style={{
                        borderColor: colors.gray600,
                        color: colors.gray400
                    }}
                >
                    <p>© {new Date().getFullYear()} TerraForge. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
