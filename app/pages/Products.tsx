import { Link } from "react-router";
import { colors } from "../styles/colors";
import { useState } from "react";
import Footer from "../components/Footer";

export default function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProducts = selectedCategory === "All"
        ? products
        : products.filter(p => p.category === selectedCategory);

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative py-32 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-6xl md:text-7xl font-bold mb-6">
                        Our <span style={{ color: colors.primary }}>Products</span>
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: colors.gray400 }}>
                        Premium architectural surfaces engineered for performance, designed for beauty
                    </p>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-12 px-6 border-t border-b" style={{ borderColor: colors.gray600 }}>
                <div className="max-w-7xl mx-auto">
                    <div className="flex gap-4 justify-center flex-wrap">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className="px-8 py-3 text-base font-semibold transition-all duration-300"
                                style={{
                                    backgroundColor: selectedCategory === category ? colors.primary : 'transparent',
                                    color: selectedCategory === category ? colors.black : colors.primary,
                                    outline: `2px solid ${colors.primary}`,
                                }}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-24 px-6" style={{ backgroundColor: colors.grayLight }}>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredProducts.map((product, index) => (
                            <ProductCard key={index} {...product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Specifications Section */}
            <section className="py-24 px-6 bg-black">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6">
                            Why Choose TerraForge?
                        </h2>
                        <p className="text-xl" style={{ color: colors.gray400 }}>
                            Industry-leading specifications across all product lines
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {specifications.map((spec, index) => (
                            <SpecCard key={index} {...spec} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6" style={{ backgroundColor: colors.grayLight }}>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl md:text-6xl font-bold mb-8" style={{ color: colors.black }}>
                        Need Help Choosing?
                    </h2>
                    <p className="text-xl mb-12" style={{ color: colors.gray600 }}>
                        Our team of experts is ready to help you find the perfect solution for your project
                    </p>
                    <div className="flex gap-6 justify-center flex-wrap">
                        <Link
                            to="/contact"
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
                            Request Quote
                        </Link>
                        <a
                            href="#"
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
                            Download Catalog
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Product Card Component
function ProductCard({ name, category, image, description, specs }: Product) {
    return (
        <div
            className="group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-500 h-[450px]"
            style={{ backgroundColor: colors.black }}
        >
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div
                className="absolute inset-0 transition-opacity duration-500 opacity-60 group-hover:opacity-90"
                style={{
                    background: `linear-gradient(to top, ${colors.black}, transparent)`
                }}
            />

            <div className="absolute inset-0 p-6 flex flex-col justify-end transition-all duration-500">
                <p
                    className="text-xs font-semibold mb-2 tracking-widest uppercase"
                    style={{ color: colors.primary }}
                >
                    {category}
                </p>
                <h3 className="text-2xl font-bold mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {name}
                </h3>
                <p
                    className="text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
                    style={{ color: colors.gray400 }}
                >
                    {description}
                </p>

                {/* Specs */}
                <div className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                    <div className="space-y-1">
                        {specs.map((spec, index) => (
                            <p key={index} className="text-xs" style={{ color: colors.gray400 }}>
                                • {spec}
                            </p>
                        ))}
                    </div>
                </div>

                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <button
                        className="flex-1 px-4 py-2 text-sm font-semibold transition-all duration-300"
                        style={{
                            backgroundColor: colors.primary,
                            color: colors.black,
                        }}
                    >
                        Request Quote
                    </button>
                    <button
                        className="flex-1 px-4 py-2 text-sm font-semibold transition-all duration-300"
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

// Spec Card Component
function SpecCard({ title, value, icon }: SpecCardProps) {
    return (
        <div
            className="p-8 rounded-lg text-center transition-all duration-300 hover:scale-105"
            style={{
                backgroundColor: colors.gray600 + '20',
            }}
        >
            <div className="text-5xl mb-4">{icon}</div>
            <h3 className="text-3xl font-bold mb-2" style={{ color: colors.primary }}>
                {value}
            </h3>
            <p className="text-base" style={{ color: colors.gray400 }}>
                {title}
            </p>
        </div>
    );
}

// Types
interface Product {
    name: string;
    category: string;
    image: string;
    description: string;
    specs: string[];
}

interface SpecCardProps {
    title: string;
    value: string;
    icon: string;
}

// Data
const categories = ["All", "Premium Panels", "Textured Surfaces", "Natural Stone", "Industrial", "Premium Glass", "Architectural"];

const products: Product[] = [
    {
        name: "Titanium Series",
        category: "Premium Panels",
        image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=2400&auto=format&fit=crop",
        description: "Ultra-durable composite panels with brushed titanium finish",
        specs: ["Fire-rated A1 class", "Weather resistant", "20-year warranty"],
    },
    {
        name: "Carbon Noir",
        category: "Textured Surfaces",
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2400&auto=format&fit=crop",
        description: "Deep black textured finish with carbon fiber reinforcement",
        specs: ["High impact resistance", "UV stable", "Low maintenance"],
    },
    {
        name: "Marble Fusion",
        category: "Natural Stone",
        image: "https://images.unsplash.com/photo-1615799998603-7c6270a45196?q=80&w=2400&auto=format&fit=crop",
        description: "Engineered marble composite with natural veining",
        specs: ["Natural aesthetics", "Uniform quality", "Easy installation"],
    },
    {
        name: "Steel Matrix",
        category: "Industrial",
        image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=2400&auto=format&fit=crop",
        description: "Stainless steel panels with geometric pattern design",
        specs: ["Corrosion resistant", "High strength", "Recyclable"],
    },
    {
        name: "Obsidian Edge",
        category: "Premium Glass",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2400&auto=format&fit=crop",
        description: "Tempered glass with obsidian-inspired black finish",
        specs: ["Safety tempered", "Thermal insulation", "Sound dampening"],
    },
    {
        name: "Concrete Refined",
        category: "Architectural",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2400&auto=format&fit=crop",
        description: "Lightweight concrete composite with smooth finish",
        specs: ["Lightweight design", "Thermal mass", "Sustainable"],
    },
    {
        name: "Copper Patina",
        category: "Premium Panels",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2400&auto=format&fit=crop",
        description: "Aged copper finish with natural patina development",
        specs: ["Living finish", "Antimicrobial", "Unique aging"],
    },
    {
        name: "Zinc Alloy Pro",
        category: "Industrial",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2400&auto=format&fit=crop",
        description: "Commercial-grade zinc alloy for high-traffic applications",
        specs: ["Heavy-duty", "Self-healing finish", "40-year lifespan"],
    },
    {
        name: "Terra Cotta Modern",
        category: "Architectural",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2400&auto=format&fit=crop",
        description: "Contemporary take on classic terra cotta facade systems",
        specs: ["Breathable", "Natural clay", "Timeless appeal"],
    },
    {
        name: "Graphene Shield",
        category: "Premium Panels",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop",
        description: "Next-gen panels infused with graphene for superior strength",
        specs: ["Ultra-lightweight", "200x stronger", "Conductive"],
    },
    {
        name: "Bamboo Composite",
        category: "Natural Stone",
        image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2400&auto=format&fit=crop",
        description: "Sustainable bamboo fiber composite with wood aesthetics",
        specs: ["Eco-friendly", "Rapid renewable", "Carbon negative"],
    },
    {
        name: "Crystal Clear",
        category: "Premium Glass",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2400&auto=format&fit=crop",
        description: "Ultra-clear low-iron glass with maximum transparency",
        specs: ["91% light transmission", "UV protection", "Easy clean coating"],
    },
];

const specifications = [
    {
        title: "Durability Rating",
        value: "A+",
        icon: "🛡️",
    },
    {
        title: "Warranty Coverage",
        value: "25 Years",
        icon: "⏱️",
    },
    {
        title: "Installation Speed",
        value: "3x Faster",
        icon: "⚡",
    },
];