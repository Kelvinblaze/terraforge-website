import { Link } from "react-router";
import { colors } from "../styles/colors";
import { useState } from "react";
import Footer from "../components/Footer";

export default function ProjectsPage() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const openLightbox = (project: Project) => {
        setSelectedProject(project);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setTimeout(() => setSelectedProject(null), 300);
    };

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative py-32 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-6xl md:text-7xl font-bold mb-6">
                        Our <span style={{ color: colors.primary }}>Projects</span>
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: colors.gray400 }}>
                        Discover how TerraForge materials transform spaces around the world
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-6 border-t border-b" style={{ borderColor: colors.gray600 }}>
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <div key={index}>
                                <p className="text-5xl font-bold mb-2" style={{ color: colors.primary }}>
                                    {stat.value}
                                </p>
                                <p className="text-base" style={{ color: colors.gray400 }}>
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-24 px-6">
                <div className="max-w-[1800px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                {...project}
                                onClick={() => openLightbox(project)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {lightboxOpen && selectedProject && (
                <Lightbox project={selectedProject} onClose={closeLightbox} />
            )}

            {/* CTA Section */}
            <section className="py-24 px-6" style={{ backgroundColor: colors.grayLight }}>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl md:text-6xl font-bold mb-8" style={{ color: colors.black }}>
                        Start Your Project
                    </h2>
                    <p className="text-xl mb-12" style={{ color: colors.gray600 }}>
                        Let's collaborate to bring your architectural vision to life
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block px-12 py-5 text-xl font-bold transition-all duration-300 hover:scale-105"
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
                        Contact Team
                    </Link>
                </div>
            </section>
        </div>
    );
}

// Project Card Component
function ProjectCard({ name, location, image, products, year, architect, onClick }: Project & { onClick: () => void }) {
    return (
        <div
            className="group relative overflow-hidden cursor-pointer h-[500px]"
            onClick={onClick}
        >
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-95 transition-opacity duration-500"
                style={{ backgroundColor: colors.black }}
            />

            <div className="absolute inset-0 p-12 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p
                    className="text-sm font-semibold mb-3 tracking-widest uppercase"
                    style={{ color: colors.primary }}
                >
                    {location}
                </p>
                <h3
                    className="text-5xl font-bold mb-4"
                    style={{ color: colors.primary }}
                >
                    {name}
                </h3>
                <p className="text-lg mb-2" style={{ color: colors.gray400 }}>
                    {architect}
                </p>
                <p className="text-base mb-6" style={{ color: colors.gray400 }}>
                    Completed {year}
                </p>

                <div className="mb-8">
                    <p className="text-sm mb-2" style={{ color: colors.gray400 }}>
                        Products Used:
                    </p>
                    <div className="flex gap-2 flex-wrap justify-center">
                        {products.map((product, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 text-xs font-semibold"
                                style={{
                                    backgroundColor: colors.primary + '20',
                                    color: colors.primary,
                                }}
                            >
                                {product}
                            </span>
                        ))}
                    </div>
                </div>

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

// Lightbox Component
function Lightbox({ project, onClose }: { project: Project; onClose: () => void }) {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-6 animate-fade-in"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
            onClick={onClose}
        >
            <button
                className="absolute top-8 right-8 text-4xl font-bold transition-colors duration-300 z-10"
                style={{ color: colors.primary }}
                onClick={onClose}
            >
                ×
            </button>

            <div
                className="max-w-6xl w-full max-h-[90vh] overflow-auto rounded-lg"
                style={{ backgroundColor: colors.gray600 + '10' }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative h-[500px]">
                    <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="p-12">
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <p
                                className="text-sm font-semibold mb-2 tracking-widest uppercase"
                                style={{ color: colors.primary }}
                            >
                                {project.location}
                            </p>
                            <h2 className="text-5xl font-bold mb-4">{project.name}</h2>
                            <p className="text-xl" style={{ color: colors.gray400 }}>
                                {project.architect}
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl font-bold" style={{ color: colors.primary }}>
                                {project.year}
                            </p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-2xl font-bold mb-4">Project Description</h3>
                        <p className="text-lg leading-relaxed" style={{ color: colors.gray400 }}>
                            {project.description}
                        </p>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-2xl font-bold mb-4">Products Used</h3>
                        <div className="flex gap-3 flex-wrap">
                            {project.products.map((product, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 text-sm font-semibold"
                                    style={{
                                        backgroundColor: colors.primary + '20',
                                        color: colors.primary,
                                    }}
                                >
                                    {product}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div>
                            <p className="text-sm mb-1" style={{ color: colors.gray400 }}>
                                Square Footage
                            </p>
                            <p className="text-2xl font-bold">{project.sqft}</p>
                        </div>
                        <div>
                            <p className="text-sm mb-1" style={{ color: colors.gray400 }}>
                                Project Type
                            </p>
                            <p className="text-2xl font-bold">{project.type}</p>
                        </div>
                        <div>
                            <p className="text-sm mb-1" style={{ color: colors.gray400 }}>
                                Completion
                            </p>
                            <p className="text-2xl font-bold">{project.year}</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <Link
                            to="/contact"
                            className="flex-1 px-8 py-4 text-center text-lg font-semibold transition-all duration-300"
                            style={{
                                backgroundColor: colors.primary,
                                color: colors.black,
                            }}
                        >
                            Start Similar Project
                        </Link>
                        <Link
                            to="/products"
                            className="flex-1 px-8 py-4 text-center text-lg font-semibold transition-all duration-300"
                            style={{
                                backgroundColor: 'transparent',
                                color: colors.primary,
                                outline: `2px solid ${colors.primary}`,
                            }}
                        >
                            View Products
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Types
interface Project {
    name: string;
    location: string;
    image: string;
    products: string[];
    year: string;
    architect: string;
    description: string;
    sqft: string;
    type: string;
}

// Data
const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "60", label: "Countries" },
    { value: "1000+", label: "Architects Trust Us" },
    { value: "25", label: "Years Experience" },
];

const projects: Project[] = [
    {
        name: "Nexus Tower",
        location: "Dubai, UAE",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop",
        products: ["Titanium Series", "Obsidian Edge"],
        year: "2024",
        architect: "Foster + Partners",
        description: "A 75-story mixed-use tower featuring TerraForge's Titanium Series on the facade and Obsidian Edge glass throughout. The building's distinctive silhouette is enhanced by the interplay of brushed metal and black glass, creating a striking presence on Dubai's skyline.",
        sqft: "2.1M sq ft",
        type: "Commercial Tower",
    },
    {
        name: "Zenith Plaza",
        location: "Singapore",
        image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2400&auto=format&fit=crop",
        products: ["Carbon Noir", "Steel Matrix"],
        year: "2023",
        architect: "Zaha Hadid Architects",
        description: "An iconic retail and entertainment complex showcasing Carbon Noir's textured surfaces combined with Steel Matrix geometric patterns. The fluid architectural forms are accentuated by the material transitions, creating dynamic visual interest throughout the day.",
        sqft: "850K sq ft",
        type: "Retail Complex",
    },
    {
        name: "Aurora Museum",
        location: "Oslo, Norway",
        image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2400&auto=format&fit=crop",
        products: ["Marble Fusion", "Crystal Clear"],
        year: "2023",
        architect: "Snøhetta",
        description: "A contemporary art museum featuring Marble Fusion's natural aesthetics and Crystal Clear glass walls that maximize natural light. The design creates a seamless connection between the exhibits and the stunning Norwegian landscape beyond.",
        sqft: "450K sq ft",
        type: "Cultural",
    },
    {
        name: "Vertex Complex",
        location: "Tokyo, Japan",
        image: "https://images.unsplash.com/photo-1492666673592-3b7e0a0b7f90?q=80&w=2400&auto=format&fit=crop",
        products: ["Graphene Shield", "Copper Patina"],
        year: "2024",
        architect: "Kengo Kuma & Associates",
        description: "A sustainable office complex utilizing next-generation Graphene Shield panels for superior strength-to-weight ratio, complemented by Copper Patina accents that will develop a unique living finish over time.",
        sqft: "1.2M sq ft",
        type: "Office Complex",
    },
    {
        name: "Marina Heights",
        location: "Sydney, Australia",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2400&auto=format&fit=crop",
        products: ["Zinc Alloy Pro", "Concrete Refined"],
        year: "2022",
        architect: "BIG - Bjarke Ingels Group",
        description: "A luxury residential tower featuring Zinc Alloy Pro's self-healing finish for longevity and Concrete Refined for thermal mass benefits. The materials work together to create a sustainable, low-maintenance facade.",
        sqft: "680K sq ft",
        type: "Residential",
    },
    {
        name: "Tech Campus Beta",
        location: "San Francisco, USA",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop",
        products: ["Bamboo Composite", "Terra Cotta Modern"],
        year: "2023",
        architect: "NBBJ",
        description: "An eco-conscious tech campus showcasing sustainable Bamboo Composite and Terra Cotta Modern surfaces. The carbon-negative materials align with the client's environmental commitments while providing stunning visual appeal.",
        sqft: "950K sq ft",
        type: "Corporate Campus",
    },
    {
        name: "Elevate Mall",
        location: "Seoul, South Korea",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2400&auto=format&fit=crop",
        products: ["Steel Matrix", "Obsidian Edge"],
        year: "2024",
        architect: "MVRDV",
        description: "A vertical shopping experience featuring Steel Matrix's geometric patterns creating dramatic visual effects throughout the 12-story atrium, paired with Obsidian Edge glass for maximum natural light penetration.",
        sqft: "1.5M sq ft",
        type: "Retail",
    },
    {
        name: "Horizon Convention",
        location: "Abu Dhabi, UAE",
        image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2400&auto=format&fit=crop",
        products: ["Titanium Series", "Carbon Noir"],
        year: "2022",
        architect: "HOK",
        description: "A world-class convention center utilizing Titanium Series for weather resistance in harsh desert conditions, complemented by Carbon Noir's UV-stable finish that maintains its appearance year after year.",
        sqft: "2.8M sq ft",
        type: "Convention Center",
    },
];