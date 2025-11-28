import { Link } from "react-router";
import { colors } from "../styles/colors";
import Footer from "../components/Footer";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Black Marble Texture Background */}
                <div
                    className="absolute inset-0 opacity-40"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1615799998603-7c6270a45196?q=80&w=2400&auto=format&fit=crop')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black" />

                {/* Hero Content */}
                <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                    <h1
                        className="text-6xl md:text-8xl font-bold mb-8 tracking-tight leading-tight animate-fade-in-up"
                    >
                        Forging the Future of
                        <br />
                        <span style={{ color: colors.primary }}>
                            Architectural Surfaces
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto">
                        Precision-engineered materials for visionary architects and builders
                    </p>

                    <div className="flex gap-6 justify-center flex-wrap">
                        <a
                            href="#products"
                            className="px-10 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
                            style={{
                                backgroundColor: colors.primary,
                                color: colors.black,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = colors.black;
                                e.currentTarget.style.color = colors.primary;
                                e.currentTarget.style.outline = `2px solid ${colors.primary}`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = colors.primary;
                                e.currentTarget.style.color = colors.black;
                                e.currentTarget.style.outline = 'none';
                            }}
                        >
                            Explore Products
                        </a>

                        <a
                            href="#about"
                            className="px-10 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
                            style={{
                                backgroundColor: 'transparent',
                                color: colors.primary,
                                outline: `2px solid ${colors.primary}`,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = colors.primary;
                                e.currentTarget.style.color = colors.black;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.color = colors.primary;
                            }}
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={colors.primary}
                        strokeWidth="2"
                    >
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                </div>
            </section>

            {/* Product Highlights Section */}
            <section id="products" className="py-24 px-6" style={{ backgroundColor: colors.grayLight }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2
                            className="text-5xl md:text-6xl font-bold mb-6"
                            style={{ color: colors.black }}
                        >
                            Our Products
                        </h2>
                        <p className="text-xl" style={{ color: colors.gray600 }}>
                            Engineered materials that define modern architecture
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, index) => (
                            <ProductCard key={index} {...product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Heritage Section */}
            <section id="about" className="py-24 px-6 bg-black">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <p
                                className="text-sm font-semibold mb-4 tracking-widest"
                                style={{ color: colors.primary }}
                            >
                                SINCE 1999
                            </p>
                            <h2 className="text-5xl font-bold mb-6">
                                A Legacy of Innovation
                            </h2>
                            <p className="text-xl mb-6" style={{ color: colors.gray400 }}>
                                TerraForge is a subsidiary of AluBond, established in 1999.
                                For over two decades, we've been at the forefront of architectural
                                surface innovation.
                            </p>
                            <p className="text-lg mb-8" style={{ color: colors.gray400 }}>
                                Our materials have shaped skylines, defined spaces, and pushed
                                the boundaries of what's possible in modern construction.
                            </p>
                            <a
                                href="/about"
                                className="inline-block px-8 py-3 text-lg font-semibold transition-all duration-300"
                                style={{
                                    backgroundColor: 'transparent',
                                    color: colors.primary,
                                    outline: `2px solid ${colors.primary}`,
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = colors.primary;
                                    e.currentTarget.style.color = colors.black;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.color = colors.primary;
                                }}
                            >
                                Read Full Story
                            </a>
                        </div>

                        <div className="relative h-96 overflow-hidden rounded-lg">
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop"
                                alt="Modern Architecture"
                                className="w-full h-full object-cover"
                                style={{ filter: 'grayscale(50%)' }}
                            />
                            <div
                                className="absolute inset-0 opacity-30"
                                style={{ background: `linear-gradient(135deg, ${colors.primary}22, ${colors.secondary}22)` }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 px-6" style={{ backgroundColor: colors.grayLight }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2
                            className="text-5xl md:text-6xl font-bold mb-6"
                            style={{ color: colors.black }}
                        >
                            Our Services
                        </h2>
                        <p className="text-xl" style={{ color: colors.gray600 }}>
                            Comprehensive construction solutions from concept to completion
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            to="/contact"
                            className="inline-block px-10 py-4 text-lg font-semibold transition-all duration-300"
                            style={{
                                backgroundColor: colors.black,
                                color: colors.primary,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = colors.primary;
                                e.currentTarget.style.color = colors.black;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = colors.black;
                                e.currentTarget.style.color = colors.primary;
                            }}
                        >
                            Request Service Quote
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="py-24 px-6 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                            Featured Projects
                        </h2>
                        <p className="text-xl" style={{ color: colors.gray400 }}>
                            Discover how TerraForge materials transform spaces
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8">
                        {featuredProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            to="/projects"
                            className="inline-block px-10 py-4 text-lg font-semibold transition-all duration-300"
                            style={{
                                backgroundColor: colors.black,
                                color: colors.primary,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = colors.primary;
                                e.currentTarget.style.color = colors.black;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = colors.black;
                                e.currentTarget.style.color = colors.primary;
                            }}
                        >
                            View All Projects
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `repeating-linear-gradient(90deg, ${colors.primary}22 0px, transparent 2px, transparent 100px)`,
                        }}
                    />
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-5xl md:text-6xl font-bold mb-8">
                        Let's Build Something
                        <br />
                        <span style={{ color: colors.primary }}>Remarkable Together</span>
                    </h2>
                    <p className="text-xl mb-12" style={{ color: colors.gray400 }}>
                        Partner with TerraForge to bring your architectural vision to life
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block px-12 py-5 text-xl font-bold transition-all duration-300 hover:scale-105"
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
                        Contact Us
                    </Link>
                </div>
            </section>
        </div>
    );
}

// Service Card Component
function ServiceCard({ name, description, features, image }: Service) {
    return (
        <div
            className="group relative overflow-hidden rounded-lg transition-all duration-500"
            style={{ backgroundColor: colors.black }}
        >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                    className="absolute inset-0 transition-opacity duration-500 opacity-40 group-hover:opacity-60"
                    style={{
                        background: `linear-gradient(to top, ${colors.black}, transparent)`
                    }}
                />
            </div>

            {/* Content */}
            <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#E6FF0A] transition-colors duration-300">
                    {name}
                </h3>
                <p className="text-base mb-6" style={{ color: colors.gray400 }}>
                    {description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <svg
                                className="w-5 h-5 shrink-0 mt-0.5"
                                fill="none"
                                stroke={colors.primary}
                                strokeWidth="2.5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm" style={{ color: colors.gray400 }}>
                                {feature}
                            </span>
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <button
                    className="w-full px-6 py-3 text-sm font-semibold transition-all duration-300"
                    style={{
                        backgroundColor: 'transparent',
                        color: colors.primary,
                        outline: `1px solid ${colors.primary}`,
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = colors.primary;
                        e.currentTarget.style.color = colors.black;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = colors.primary;
                    }}
                >
                    Learn More
                </button>
            </div>
        </div>
    );
}

// Product Card Component
function ProductCard({ name, category, image, description }: Product) {
    return (
        <div
            className="group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-500 h-96"
            style={{ backgroundColor: colors.black }}
        >
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div
                className="absolute inset-0 transition-opacity duration-500 opacity-60 group-hover:opacity-80"
                style={{
                    background: `linear-gradient(to top, ${colors.black}, transparent)`
                }}
            />

            <div className="absolute inset-0 p-8 flex flex-col justify-end transition-all duration-500">
                <p
                    className="text-sm font-semibold mb-2 tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ color: colors.primary }}
                >
                    {category}
                </p>
                <h3 className="text-3xl font-bold mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {name}
                </h3>
                <p
                    className="text-base mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
                    style={{ color: colors.gray400 }}
                >
                    {description}
                </p>
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <button
                        className="px-6 py-2 text-sm font-semibold transition-all duration-300"
                        style={{
                            backgroundColor: colors.primary,
                            color: colors.black,
                        }}
                    >
                        Request Quote
                    </button>
                    <button
                        className="px-6 py-2 text-sm font-semibold transition-all duration-300"
                        style={{
                            backgroundColor: 'transparent',
                            color: colors.primary,
                            outline: `1px solid ${colors.primary}`,
                        }}
                    >
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}

// Project Card Component
function ProjectCard({ name, location, image }: Project) {
    return (
        <div className="group relative overflow-hidden rounded-lg cursor-pointer h-96">
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-90 transition-opacity duration-500"
                style={{ backgroundColor: colors.black }}
            />

            <div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3
                    className="text-4xl font-bold mb-4"
                    style={{ color: colors.primary }}
                >
                    {name}
                </h3>
                <p className="text-xl mb-6" style={{ color: colors.gray400 }}>
                    {location}
                </p>
                <button
                    className="px-8 py-3 text-base font-semibold transition-all duration-300"
                    style={{
                        backgroundColor: 'transparent',
                        color: colors.primary,
                        outline: `2px solid ${colors.primary}`,
                    }}
                >
                    View Project Details
                </button>
            </div>
        </div>
    );
}

// Data Types
interface Service {
    name: string;
    description: string;
    features: string[];
    image: string;
}

interface Product {
    name: string;
    category: string;
    image: string;
    description: string;
}

interface Project {
    name: string;
    location: string;
    image: string;
}

// Sample Data
const services: Service[] = [
    {
        name: "Road Construction",
        description: "Expert road construction and infrastructure development with cutting-edge materials and engineering excellence.",
        features: [
            "Highway and expressway construction",
            "Urban road development",
            "Asphalt and concrete paving",
            "Road maintenance and rehabilitation",
        ],
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2400&auto=format&fit=crop",
    },
    {
        name: "Building Construction",
        description: "Complete building construction services from foundation to finishing, delivering exceptional quality and architectural precision.",
        features: [
            "Commercial building construction",
            "Residential development",
            "High-rise structures",
            "Renovation and remodeling",
        ],
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2400&auto=format&fit=crop",
    },
    {
        name: "Infrastructure Development",
        description: "Comprehensive infrastructure solutions including bridges, tunnels, and large-scale civil engineering projects.",
        features: [
            "Bridge and tunnel construction",
            "Water treatment facilities",
            "Industrial facilities",
            "Public works projects",
        ],
        image: "https://images.unsplash.com/photo-1590481216019-6ce8a9fdaf98?q=80&w=2400&auto=format&fit=crop",
    },
];

const products: Product[] = [
    {
        name: "Titanium Series",
        category: "PREMIUM PANELS",
        image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=2400&auto=format&fit=crop",
        description: "Ultra-durable composite panels with brushed titanium finish",
    },
    {
        name: "Carbon Noir",
        category: "TEXTURED SURFACES",
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2400&auto=format&fit=crop",
        description: "Deep black textured finish with carbon fiber reinforcement",
    },
    {
        name: "Marble Fusion",
        category: "NATURAL STONE",
        image: "https://images.unsplash.com/photo-1615799998603-7c6270a45196?q=80&w=2400&auto=format&fit=crop",
        description: "Engineered marble composite with natural veining",
    },
    {
        name: "Steel Matrix",
        category: "INDUSTRIAL",
        image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=2400&auto=format&fit=crop",
        description: "Stainless steel panels with geometric pattern design",
    },
    {
        name: "Obsidian Edge",
        category: "PREMIUM GLASS",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2400&auto=format&fit=crop",
        description: "Tempered glass with obsidian-inspired black finish",
    },
    {
        name: "Concrete Refined",
        category: "ARCHITECTURAL",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2400&auto=format&fit=crop",
        description: "Lightweight concrete composite with smooth finish",
    },
];

const featuredProjects: Project[] = [
    {
        name: "Nexus Tower",
        location: "Dubai, UAE",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop",
    },
    {
        name: "Zenith Plaza",
        location: "Singapore",
        image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2400&auto=format&fit=crop",
    },
    {
        name: "Aurora Museum",
        location: "Oslo, Norway",
        image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2400&auto=format&fit=crop",
    },
    {
        name: "Vertex Complex",
        location: "Tokyo, Japan",
        image: "https://images.unsplash.com/photo-1492666673592-3b7e0a0b7f90?q=80&w=2400&auto=format&fit=crop",
    },
];