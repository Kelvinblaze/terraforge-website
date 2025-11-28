import { Link } from "react-router";
import { colors } from "../styles/colors";
import Footer from "../components/Footer";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative py-32 px-6 overflow-hidden">
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'grayscale(100%)',
                    }}
                />

                <div className="relative z-10 max-w-6xl mx-auto text-center">
                    <p
                        className="text-sm font-semibold mb-4 tracking-widest"
                        style={{ color: colors.primary }}
                    >
                        SINCE 1999
                    </p>
                    <h1 className="text-6xl md:text-7xl font-bold mb-6">
                        A Legacy of
                        <br />
                        <span style={{ color: colors.primary }}>Innovation</span>
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: colors.gray400 }}>
                        TerraForge is a proud subsidiary of AluBond, crafting the future of architectural surfaces for over two decades.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 px-6" style={{ backgroundColor: colors.grayLight }}>
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                        <div>
                            <h2 className="text-5xl font-bold mb-6" style={{ color: colors.black }}>
                                Our Heritage
                            </h2>
                            <p className="text-xl mb-6" style={{ color: colors.gray600 }}>
                                Founded in 1999 under the AluBond umbrella, TerraForge emerged from a vision to revolutionize architectural materials. What began as a commitment to aluminum composite excellence has evolved into a comprehensive platform for innovative surface solutions.
                            </p>
                            <p className="text-lg mb-6" style={{ color: colors.gray600 }}>
                                For over 25 years, we've pioneered materials that don't just meet industry standards—they set them. Our surfaces grace iconic structures across six continents, from soaring towers to intimate spaces.
                            </p>
                            <p className="text-lg" style={{ color: colors.gray600 }}>
                                Today, TerraForge stands at the intersection of tradition and innovation, honoring our heritage while forging new paths in sustainable, high-performance architectural materials.
                            </p>
                        </div>

                        <div className="relative h-[500px] overflow-hidden rounded-lg">
                            <img
                                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2400&auto=format&fit=crop"
                                alt="Manufacturing facility"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-24 px-6 bg-black">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6">
                            Our Journey
                        </h2>
                        <p className="text-xl" style={{ color: colors.gray400 }}>
                            Milestones that shaped architectural innovation
                        </p>
                    </div>

                    <div className="space-y-12">
                        {timeline.map((item, index) => (
                            <TimelineItem key={index} {...item} isRight={index % 2 !== 0} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Innovation Process */}
            <section className="py-24 px-6" style={{ backgroundColor: colors.grayLight }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: colors.black }}>
                            Innovation Process
                        </h2>
                        <p className="text-xl" style={{ color: colors.gray600 }}>
                            How we forge the materials of tomorrow
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {innovationSteps.map((step, index) => (
                            <InnovationCard key={index} {...step} number={index + 1} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="py-24 px-6 bg-black">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6">
                            Mission & Values
                        </h2>
                        <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.gray400 }}>
                            Guided by principles that drive excellence in every surface we create
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {values.map((value, index) => (
                            <ValueCard key={index} {...value} />
                        ))}
                    </div>

                    <div className="text-center p-12 rounded-lg" style={{ backgroundColor: colors.gray600 + '20' }}>
                        <h3 className="text-3xl font-bold mb-4" style={{ color: colors.primary }}>
                            Our Mission
                        </h3>
                        <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.gray400 }}>
                            To forge architectural surfaces that inspire, endure, and elevate—transforming spaces through relentless innovation, sustainable practices, and unwavering commitment to excellence.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6" style={{ backgroundColor: colors.grayLight }}>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl md:text-6xl font-bold mb-8" style={{ color: colors.black }}>
                        Ready to Build With Us?
                    </h2>
                    <p className="text-xl mb-12" style={{ color: colors.gray600 }}>
                        Experience the TerraForge difference in your next project
                    </p>
                    <div className="flex gap-6 justify-center flex-wrap">
                        <Link
                            to="/products"
                            className="px-12 py-5 text-xl font-bold transition-all duration-300 hover:scale-105"
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
                            Explore Products
                        </Link>
                        <Link
                            to="/contact"
                            className="px-12 py-5 text-xl font-bold transition-all duration-300 hover:scale-105"
                            style={{
                                backgroundColor: 'transparent',
                                color: colors.black,
                                outline: `2px solid ${colors.black}`,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = colors.black;
                                e.currentTarget.style.color = colors.primary;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.color = colors.black;
                            }}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}

// Timeline Item Component
function TimelineItem({ year, title, description, image, isRight }: TimelineItemProps) {
    return (
        <div className={`md:flex block gap-8 items-center  space-y-5 md:space-y-0 ${isRight ? 'md:flex-row-reverse' : ''}`}>
            <div className="flex-1">
                <div className={`${isRight ? 'md:text-right' : ''}`}>
                    <p
                        className="text-2xl font-bold mb-2"
                        style={{ color: colors.primary }}
                    >
                        {year}
                    </p>
                    <h3 className="text-3xl font-bold mb-4">{title}</h3>
                    <p className="text-lg" style={{ color: colors.gray400 }}>
                        {description}
                    </p>
                </div>
            </div>

            <div className="w-20 h-20 shrink-0 rounded-full md:flex items-center justify-center hidden" style={{ backgroundColor: colors.primary }}>
                <div className="w-8 h-8 rounded-full" style={{ backgroundColor: colors.black }} />
            </div>

            <div className="flex-1">
                <div className="h-64 rounded-lg overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}

// Innovation Card Component
function InnovationCard({ number, title, description, icon }: InnovationCardProps) {
    return (
        <div className="text-center p-6">
            <div
                className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-3xl font-bold"
                style={{
                    backgroundColor: colors.black,
                    color: colors.primary,
                }}
            >
                {number}
            </div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: colors.black }}>
                {title}
            </h3>
            <p className="text-base" style={{ color: colors.gray600 }}>
                {description}
            </p>
        </div>
    );
}

// Value Card Component
function ValueCard({ title, description, icon }: ValueCardProps) {
    return (
        <div
            className="p-8 rounded-lg transition-all duration-300 hover:scale-105"
            style={{
                backgroundColor: colors.gray600 + '20',
                borderLeft: `4px solid ${colors.primary}`,
            }}
        >
            <h3 className="text-2xl font-bold mb-4" style={{ color: colors.primary }}>
                {title}
            </h3>
            <p className="text-base" style={{ color: colors.gray400 }}>
                {description}
            </p>
        </div>
    );
}

// Types
interface TimelineItemProps {
    year: string;
    title: string;
    description: string;
    image: string;
    isRight?: boolean;
}

interface InnovationCardProps {
    number: number;
    title: string;
    description: string;
    icon: string;
}

interface ValueCardProps {
    title: string;
    description: string;
    icon: string;
}

// Data
const timeline = [
    {
        year: "1999",
        title: "AluBond Founded",
        description: "The journey begins with AluBond's establishment, pioneering aluminum composite panels for modern architecture.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2400&auto=format&fit=crop",
    },
    {
        year: "2005",
        title: "TerraForge Launch",
        description: "TerraForge emerges as AluBond's premium division, dedicated to advanced architectural surface solutions.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2400&auto=format&fit=crop",
    },
    {
        year: "2012",
        title: "Global Expansion",
        description: "Opening facilities across Asia and Europe, bringing innovation to international markets.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop",
    },
    {
        year: "2018",
        title: "Sustainable Innovation",
        description: "Launch of eco-friendly product line, reducing environmental impact by 40% while maintaining performance.",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2400&auto=format&fit=crop",
    },
    {
        year: "2025",
        title: "Future Forward",
        description: "Leading the industry with AI-assisted design tools and carbon-neutral manufacturing processes.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2400&auto=format&fit=crop",
    },
];

const innovationSteps = [
    {
        title: "Research",
        description: "Deep analysis of market needs, material science breakthroughs, and architectural trends.",
        icon: "🔬",
    },
    {
        title: "Design",
        description: "Collaborative development with architects and engineers to prototype solutions.",
        icon: "✏️",
    },
    {
        title: "Testing",
        description: "Rigorous quality control across durability, sustainability, and performance metrics.",
        icon: "🔍",
    },
    {
        title: "Deploy",
        description: "Global distribution with full technical support and installation guidance.",
        icon: "🚀",
    },
];

const values = [
    {
        title: "Innovation",
        description: "Continuously pushing boundaries in material science and manufacturing excellence.",
        icon: "💡",
    },
    {
        title: "Sustainability",
        description: "Committed to eco-friendly practices that protect our planet for future generations.",
        icon: "🌱",
    },
    {
        title: "Excellence",
        description: "Uncompromising quality in every surface, backed by decades of expertise.",
        icon: "⭐",
    },
];