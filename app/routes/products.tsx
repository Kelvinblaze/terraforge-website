import type { Route } from "./+types/products";
import ProductsPage from "~/pages/Products";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Products - TerraForge | Architectural Surface Solutions" },
        {
            name: "description",
            content: "Explore TerraForge's premium architectural surfaces. From titanium series to carbon noir, find materials that define modern architecture."
        },
    ];
}

export default function Products() {
    return <ProductsPage />;
}
