import type { Route } from "./+types/contact";
import ContactPage from "~/pages/Contact";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Contact Us - TerraForge | Let's Build Together" },
        {
            name: "description",
            content: "Get in touch with TerraForge. Request quotes, technical support, or discuss your next architectural project."
        },
    ];
}

export default function Contact() {
    return <ContactPage />;
}
