import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="py-6 md:py-12 mt-auto">
      <div className="container">
        <div className="text-center mb-10">
          <h1 className="mb-4 text-6xl lg:text-7xl font-bold tracking-tighter">
            404
          </h1>
          <p className="text-lg lg:text-lg mb-4">
            The page you are looking for does not exist.
          </p>

          <Button asChild variant="outline">
            <Link href="/">
              <span>🏠</span>
              <span>Go back to homepage</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
