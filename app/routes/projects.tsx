import type { Route } from "./+types/projects";
import ProjectsPage from "~/pages/Projects";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Projects - TerraForge | Global Architectural Showcase" },
        {
            name: "description",
            content: "Explore iconic projects featuring TerraForge materials across the globe. From towers to museums, see our surfaces in action."
        },
    ];
}

export default function Projects() {
    return <ProjectsPage />;
}
