import type { Route } from "./+types/home";
import HomePage from "~/pages/Home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "TerraForge - Forging the Future of Architectural Surfaces" },
    {
      name: "description",
      content: "Modern industrial surfaces by TerraForge, a subsidiary of AluBond. Innovative architectural materials since 1999."
    },
  ];
}

export default function Home() {
  return <HomePage />;
}
