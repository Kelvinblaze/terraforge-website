import { colors } from "../styles/colors";
import { useState } from "react";
import Footer from "../components/Footer";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
        setSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                projectType: "",
                message: "",
            });
        }, 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="min-h-screen" style={{ backgroundColor: colors.grayLight }}>
            {/* Hero Section */}
            <section className="py-32 px-6 bg-black text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-6xl md:text-7xl font-bold mb-6">
                        Let's Build Something
                        <br />
                        <span style={{ color: colors.primary }}>Remarkable Together</span>
                    </h1>
                    <p className="text-xl md:text-2xl" style={{ color: colors.gray400 }}>
                        Partner with TerraForge to transform your architectural vision into reality
                    </p>
                </div>
            </section>

            {/* Contact Form & Info Section */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-5 gap-12">
                        {/* Contact Info */}
                        <div className="md:col-span-2">
                            <h2 className="text-4xl font-bold mb-8" style={{ color: colors.black }}>
                                Get In Touch
                            </h2>

                            <div className="space-y-8 mb-12">
                                {contactInfo.map((info, index) => (
                                    <ContactInfoCard key={index} {...info} />
                                ))}
                            </div>

                            {/* Office Locations */}
                            <div>
                                <h3 className="text-2xl font-bold mb-6" style={{ color: colors.black }}>
                                    Global Offices
                                </h3>
                                <div className="space-y-6">
                                    {offices.map((office, index) => (
                                        <div key={index}>
                                            <p className="font-semibold text-lg mb-1" style={{ color: colors.black }}>
                                                {office.city}
                                            </p>
                                            <p className="text-base" style={{ color: colors.gray600 }}>
                                                {office.address}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="md:col-span-3">
                            <div
                                className="p-12 rounded-lg"
                                style={{
                                    backgroundColor: 'white',
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                {submitted ? (
                                    <div className="text-center py-12">
                                        <div
                                            className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-4xl"
                                            style={{ backgroundColor: colors.primary }}
                                        >
                                            ✓
                                        </div>
                                        <h3 className="text-3xl font-bold mb-4" style={{ color: colors.black }}>
                                            Thank You!
                                        </h3>
                                        <p className="text-xl" style={{ color: colors.gray600 }}>
                                            We've received your message and will get back to you within 24 hours.
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit}>
                                        <h3 className="text-3xl font-bold mb-8" style={{ color: colors.black }}>
                                            Send Us a Message
                                        </h3>

                                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                                            <div>
                                                <label
                                                    htmlFor="name"
                                                    className="block text-sm font-semibold mb-2"
                                                    style={{ color: colors.black }}
                                                >
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded border-2 transition-all duration-300 focus:outline-none"
                                                    style={{
                                                        borderColor: colors.gray400,
                                                        backgroundColor: colors.grayLight,
                                                    }}
                                                    onFocus={(e) => e.target.style.borderColor = colors.primary}
                                                    onBlur={(e) => e.target.style.borderColor = colors.gray400}
                                                />
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="email"
                                                    className="block text-sm font-semibold mb-2"
                                                    style={{ color: colors.black }}
                                                >
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded border-2 transition-all duration-300 focus:outline-none"
                                                    style={{
                                                        borderColor: colors.gray400,
                                                        backgroundColor: colors.grayLight,
                                                    }}
                                                    onFocus={(e) => e.target.style.borderColor = colors.primary}
                                                    onBlur={(e) => e.target.style.borderColor = colors.gray400}
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                                            <div>
                                                <label
                                                    htmlFor="phone"
                                                    className="block text-sm font-semibold mb-2"
                                                    style={{ color: colors.black }}
                                                >
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded border-2 transition-all duration-300 focus:outline-none"
                                                    style={{
                                                        borderColor: colors.gray400,
                                                        backgroundColor: colors.grayLight,
                                                    }}
                                                    onFocus={(e) => e.target.style.borderColor = colors.primary}
                                                    onBlur={(e) => e.target.style.borderColor = colors.gray400}
                                                />
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="company"
                                                    className="block text-sm font-semibold mb-2"
                                                    style={{ color: colors.black }}
                                                >
                                                    Company Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="company"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded border-2 transition-all duration-300 focus:outline-none"
                                                    style={{
                                                        borderColor: colors.gray400,
                                                        backgroundColor: colors.grayLight,
                                                    }}
                                                    onFocus={(e) => e.target.style.borderColor = colors.primary}
                                                    onBlur={(e) => e.target.style.borderColor = colors.gray400}
                                                />
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <label
                                                htmlFor="projectType"
                                                className="block text-sm font-semibold mb-2"
                                                style={{ color: colors.black }}
                                            >
                                                Project Type *
                                            </label>
                                            <select
                                                id="projectType"
                                                name="projectType"
                                                required
                                                value={formData.projectType}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded border-2 transition-all duration-300 focus:outline-none"
                                                style={{
                                                    borderColor: colors.gray400,
                                                    backgroundColor: colors.grayLight,
                                                }}
                                                onFocus={(e) => e.target.style.borderColor = colors.primary}
                                                onBlur={(e) => e.target.style.borderColor = colors.gray400}
                                            >
                                                <option value="">Select a project type</option>
                                                <option value="commercial">Commercial Building</option>
                                                <option value="residential">Residential</option>
                                                <option value="retail">Retail/Hospitality</option>
                                                <option value="cultural">Cultural/Institutional</option>
                                                <option value="infrastructure">Infrastructure</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <div className="mb-8">
                                            <label
                                                htmlFor="message"
                                                className="block text-sm font-semibold mb-2"
                                                style={{ color: colors.black }}
                                            >
                                                Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={6}
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded border-2 transition-all duration-300 focus:outline-none resize-none"
                                                style={{
                                                    borderColor: colors.gray400,
                                                    backgroundColor: colors.grayLight,
                                                }}
                                                onFocus={(e) => e.target.style.borderColor = colors.primary}
                                                onBlur={(e) => e.target.style.borderColor = colors.gray400}
                                                placeholder="Tell us about your project requirements..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full px-8 py-4 text-xl font-bold transition-all duration-300 hover:scale-[1.02]"
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
                                            Submit
                                        </button>

                                        <p className="text-sm text-center mt-6" style={{ color: colors.gray600 }}>
                                            By submitting this form, you agree to our privacy policy and terms of service.
                                        </p>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Actions */}
            <section className="py-24 px-6 bg-black text-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6">
                            Other Ways to Reach Us
                        </h2>
                        <p className="text-xl" style={{ color: colors.gray400 }}>
                            Choose the method that works best for you
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {quickActions.map((action, index) => (
                            <QuickActionCard key={index} {...action} />
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: colors.black }}>
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <FAQItem key={index} {...faq} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

// Contact Info Card Component
function ContactInfoCard({ icon, title, value, link }: ContactInfoCardProps) {
    return (
        <div className="flex gap-4 items-start">
            <div
                className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center text-xl"
                style={{ backgroundColor: colors.primary }}
            >
                {icon}
            </div>
            <div>
                <p className="text-sm font-semibold mb-1" style={{ color: colors.gray600 }}>
                    {title}
                </p>
                {link ? (
                    <a
                        href={link}
                        className="text-lg font-bold transition-colors duration-300"
                        style={{ color: colors.black }}
                        onMouseEnter={(e) => e.currentTarget.style.color = colors.primary}
                        onMouseLeave={(e) => e.currentTarget.style.color = colors.black}
                    >
                        {value}
                    </a>
                ) : (
                    <p className="text-lg font-bold" style={{ color: colors.black }}>
                        {value}
                    </p>
                )}
            </div>
        </div>
    );
}

// Quick Action Card Component
function QuickActionCard({ icon, title, description, action }: QuickActionCardProps) {
    return (
        <div
            className="p-8 rounded-lg text-center transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: colors.gray600 + '20' }}
        >
            <div className="text-5xl mb-4">{icon}</div>
            <h3 className="text-2xl font-bold mb-3">{title}</h3>
            <p className="text-base mb-6" style={{ color: colors.gray400 }}>
                {description}
            </p>
            <a
                href={action.link}
                className="inline-block px-6 py-3 text-base font-semibold transition-all duration-300"
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
                {action.label}
            </a>
        </div>
    );
}

// FAQ Item Component
function FAQItem({ question, answer }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="p-6 rounded-lg cursor-pointer transition-all duration-300"
            style={{
                backgroundColor: 'white',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold pr-4" style={{ color: colors.black }}>
                    {question}
                </h3>
                <span
                    className="text-3xl font-bold transition-transform duration-300"
                    style={{
                        color: colors.primary,
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                >
                    +
                </span>
            </div>
            {isOpen && (
                <p className="mt-4 text-base leading-relaxed" style={{ color: colors.gray600 }}>
                    {answer}
                </p>
            )}
        </div>
    );
}

// Types
interface ContactInfoCardProps {
    icon: string;
    title: string;
    value: string;
    link?: string;
}

interface QuickActionCardProps {
    icon: string;
    title: string;
    description: string;
    action: {
        label: string;
        link: string;
    };
}

interface FAQItemProps {
    question: string;
    answer: string;
}

// Data
const contactInfo = [
    {
        icon: "📧",
        title: "Email",
        value: "hello@terraforgeco.com",
        link: "mailto:hello@terraforgeco.com",
    },
    // {
    //     icon: "📞",
    //     title: "Phone",
    //     value: "+23480123456789",
    //     link: "tel:+23480123456789",
    // },
    // {
    //     icon: "📞",
    //     title: "Phone",
    //     value: "+23480123456789",
    //     link: "tel:+23480123456789",
    // },
    {
        icon: "⏰",
        title: "Business Hours",
        value: "Mon-Fri: 8am - 6pm",
    },
];

const offices = [
    {
        city: "Enugu, Nigeria",
        address: "5B Ihiala street, Independence Layout",
    },
];

const quickActions = [
    {
        icon: "📄",
        title: "Request Catalog",
        description: "Download our comprehensive product catalog with specifications",
        action: {
            label: "Download Now",
            link: "#",
        },
    },
    {
        icon: "💬",
        title: "Live Chat",
        description: "Chat with our team instantly for quick questions",
        action: {
            label: "Start Chat",
            link: "#",
        },
    },
    {
        icon: "📅",
        title: "Schedule Call",
        description: "Book a consultation with our technical experts",
        action: {
            label: "Book Now",
            link: "#",
        },
    },
];

const faqs = [
    {
        question: "What is the typical lead time for TerraForge products?",
        answer: "Lead times vary by product and quantity, but typically range from 4-8 weeks for standard orders. Custom specifications may require additional time. Contact our team for specific project timelines.",
    },
    {
        question: "Do you provide installation support?",
        answer: "Yes, we offer comprehensive installation support including technical documentation, on-site training, and consultation services. Our team can also recommend certified installation partners in your region.",
    },
    {
        question: "What warranty do TerraForge products come with?",
        answer: "Most TerraForge products come with a 20-25 year warranty covering material defects and performance. Specific warranty terms vary by product line. Request detailed warranty information with your quote.",
    },
    {
        question: "Can I request product samples?",
        answer: "Absolutely! We provide sample panels for most of our product lines. Contact us with your project details, and we'll send you relevant samples along with technical specifications.",
    },
    {
        question: "Do you ship internationally?",
        answer: "Yes, TerraForge ships globally through our network of distribution centers. We have facilities in North America, Europe, Asia, and the Middle East to ensure efficient delivery worldwide.",
    },
];