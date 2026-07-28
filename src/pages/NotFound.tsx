import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => (
    <div className="min-h-screen bg-[#F5F3EE] text-foreground flex items-center px-8 lg:px-16">
        <div className="max-w-xl">
            <p className="text-xs text-gray-500 tracking-widest uppercase mb-8">404</p>

            <h1 className="text-[2.25rem] lg:text-[3.5rem] font-light tracking-tight font-heading leading-[1.1] text-[#141414] mb-8">
                Nothing lives at this address
            </h1>

            <p className="text-base font-light text-gray-600 leading-relaxed mb-12">
                The page was either moved or never existed. The work is one click away.
            </p>

            {/* Link, not an anchor: an <a href="/"> throws the SPA away and reloads the
                whole bundle to render a page the router could already render. */}
            <Link
                to="/"
                className="group inline-flex items-center gap-2 bg-[#141414] text-white px-8 py-4 rounded-sm text-sm font-medium hover:bg-[#2A2A2A] transition-colors"
            >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
                All work
            </Link>
        </div>
    </div>
);

export default NotFound;
