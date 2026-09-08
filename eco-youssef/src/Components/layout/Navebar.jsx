import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="bg-white shadow-sm border-b sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center" dir="rtl">

                {/* Logo */}
                <Link to="/" className="text-2xl font-black text-orange-600 tracking-wide">
                    MyStore
                </Link>

                {/* Navigation Links */}
                <nav className="flex items-center gap-6 font-medium text-gray-700">
                    <Link to="/" className="hover:text-orange-600 transition">
                        الرئيسية
                    </Link>
                    <Link to="/products" className="hover:text-orange-600 transition">
                        المنتجات
                    </Link>
                    <Link to="/cart" className="hover:text-orange-600 transition">
                        السلة
                    </Link>
                </nav>

            </div>
        </header>
    );
}