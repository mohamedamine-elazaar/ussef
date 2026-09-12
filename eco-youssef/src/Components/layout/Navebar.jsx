import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../Context/CartContext";

export default function Navbar() {
    const { cart } = useCart();
    const navigate = useNavigate();

    // التحقق مما إذا كان المستخدم مسجلاً كـ Admin
    const isAdmin = localStorage.getItem("isAdmin") === "true";

    // حساب إجمالي عناصر السلة
    const totalItems = cart ? cart.reduce((sum, item) => sum + item.quantity, 0) : 0;

    // تسجيل الخروج
    const handleLogout = () => {
        localStorage.removeItem("isAdmin");
        navigate("/login");
    };

    return (
        <header className="bg-white shadow-sm border-b sticky top-0 z-50" dir="rtl">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

                {/* اللوجو / اسم المتجر */}
                <Link to="/" className="text-2xl font-black text-orange-600 tracking-wide">
                    MyStore
                </Link>

                {/* روابط التنقل */}
                <nav className="flex items-center gap-6 font-medium text-gray-700 text-sm md:text-base">
                    <Link to="/" className="hover:text-orange-600 transition">
                        الرئيسية
                    </Link>

                    <Link to="/products" className="hover:text-orange-600 transition">
                        المنتجات
                    </Link>

                    {/* السلة مع العداد */}
                    <Link to="/cart" className="relative hover:text-orange-600 transition flex items-center gap-1">
                        <span>السلة 🛒</span>
                        {totalItems > 0 && (
                            <span className="bg-orange-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                {totalItems}
                            </span>
                        )}
                    </Link>

                    {/* الجزء الخاص بـ Admin / Login */}
                    {isAdmin ? (
                        <div className="flex items-center gap-3 border-r pr-4">
                            <Link
                                to="/admin"
                                className="bg-orange-100 text-orange-700 hover:bg-orange-200 font-bold px-3 py-1.5 rounded-lg text-xs md:text-sm transition"
                            >
                                لوحة التحكم ⚙️
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="text-xs text-red-500 hover:text-red-700 font-bold transition cursor-pointer"
                            >
                                خروج 🚪
                            </button>
                        </div>
                    ) : (
                        <Link
                            to="/login"
                            className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-4 py-1.5 rounded-xl text-xs md:text-sm transition shadow-sm"
                        >
                            دخول الأدمن 🔐
                        </Link>
                    )}
                </nav>

            </div>
        </header>
    );
}