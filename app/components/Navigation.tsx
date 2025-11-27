import { Link, useLocation } from "react-router";
import { colors } from "../styles/colors";
import { useState } from "react";

export default function Navigation() {
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const isActive = (path: string) => {
        if (path === "/") {
            return location.pathname === "/";
        }
        return location.pathname.startsWith(path);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b" style={{ borderColor: colors.gray600 }}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/">
                        <div className="lg:w-[200px] w-[150px]">
                            <img src="/logo/full.svg" alt="Terraforge Logo" className="w-full h-auto object-contain" />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="text-base font-semibold transition-colors duration-300 relative group"
                                style={{
                                    color: isActive(link.path) ? colors.primary : 'white'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.color = colors.primary}
                                onMouseLeave={(e) => {
                                    if (!isActive(link.path)) {
                                        e.currentTarget.style.color = 'white';
                                    }
                                }}
                            >
                                {link.label}
                                {isActive(link.path) && (
                                    <span
                                        className="absolute -bottom-2 left-0 right-0 h-0.5"
                                        style={{ backgroundColor: colors.primary }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <Link
                        to="/contact"
                        className="hidden md:block px-6 py-3 text-base font-semibold transition-all duration-300"
                        style={{
                            backgroundColor: colors.primary,
                            color: colors.black,
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = colors.secondary;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = colors.primary;
                        }}
                    >
                        Get Quote
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-3xl"
                        style={{ color: colors.primary }}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? "×" : "☰"}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-6 border-t" style={{ borderColor: colors.gray600 }}>
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="text-lg font-semibold py-2 transition-colors duration-300"
                                    style={{
                                        color: isActive(link.path) ? colors.primary : 'white'
                                    }}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                className="px-6 py-3 text-center text-base font-semibold transition-all duration-300 mt-4"
                                style={{
                                    backgroundColor: colors.primary,
                                    color: colors.black,
                                }}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Get Quote
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/products", label: "Products" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
];
