import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";

export default function Navbar() {
    const { cart } = useCart();

    // حساب إجمالي عدد المنتجات في السلة
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <header className="bg-white shadow-sm border-b sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center" dir="rtl">

                <Link to="/" className="text-2xl font-black text-orange-600 tracking-wide">
                    MyStore
                </Link>

                <nav className="flex items-center gap-6 font-medium text-gray-700">
                    <Link to="/" className="hover:text-orange-600 transition">
                        الرئيسية
                    </Link>
                    <Link to="/products" className="hover:text-orange-600 transition">
                        المنتجات
                    </Link>
                    <Link to="/cart" className="relative hover:text-orange-600 transition flex items-center gap-1">
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