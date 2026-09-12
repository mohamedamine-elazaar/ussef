import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";

export default function Navbar() {
    const { cart } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // حساب إجمالي عدد المنتجات في السلة
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <header className="bg-white shadow-sm border-b sticky top-0 z-50">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3" dir="rtl">

                <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-xl font-black tracking-wide text-orange-600 sm:text-2xl">
                    MyStore
                </Link>

                <button
                    type="button"
                    aria-expanded={isMenuOpen}
                    aria-label="فتح القائمة"
                    onClick={() => setIsMenuOpen((open) => !open)}
                    className="rounded-lg border border-gray-200 p-2 text-xl text-gray-700 sm:hidden"
                >
                    {isMenuOpen ? "×" : "☰"}
                </button>

                <nav className={`${isMenuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-1 border-b bg-white px-4 py-3 font-medium text-gray-700 shadow-sm sm:static sm:flex sm:flex-row sm:items-center sm:gap-6 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none`}>
                    <Link to="/" onClick={() => setIsMenuOpen(false)} className="rounded-lg px-3 py-2 hover:bg-orange-50 hover:text-orange-600 sm:px-0 sm:py-1 sm:hover:bg-transparent">
                        الرئيسية
                    </Link>
                    <Link to="/products" onClick={() => setIsMenuOpen(false)} className="rounded-lg px-3 py-2 hover:bg-orange-50 hover:text-orange-600 sm:px-0 sm:py-1 sm:hover:bg-transparent">
                        المنتجات
                    </Link>
                    <Link to="/cart" onClick={() => setIsMenuOpen(false)} className="relative flex items-center gap-1 rounded-lg px-3 py-2 hover:bg-orange-50 hover:text-orange-600 sm:px-0 sm:py-1 sm:hover:bg-transparent">
                        <span>السلة</span>
                        {totalItems > 0 && (
                            <span className="bg-orange-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                {totalItems}
                            </span>
                        )}
                    </Link>
                </nav>

            </div>
        </header>
    );
}