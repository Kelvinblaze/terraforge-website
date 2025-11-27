import type { Route } from "./+types/about";
import AboutPage from "~/pages/About";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "About Us - TerraForge | Heritage Since 1999" },
        {
            name: "description",
            content: "Discover TerraForge's heritage as a subsidiary of AluBond. Innovation in architectural surfaces since 1999."
        },
    ];
}

export default function About() {
    return <AboutPage />;
}
