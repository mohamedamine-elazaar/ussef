import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function Cart() {
    const { cart, updateQuantity, removeFromCart } = useCart();

    const totalAmount = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <div className="bg-gray-50 min-h-screen py-10 text-right" dir="rtl">
            <div className="max-w-5xl mx-auto px-4">
                <h1 className="text-3xl font-black text-gray-900 mb-8">سلة التسوق 🛒</h1>

                {cart.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        <div className="lg:col-span-2 space-y-4">
                            {cart.map((item, index) => (
                                <div
                                    key={`${item.id}-${item.variant}-${index}`}
                                    className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between gap-4"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-20 h-20 object-cover rounded-xl border"
                                    />

                                    <div className="flex-1">
                                        <h3 className="font-bold text-gray-800 text-sm md:text-base">
                                            {item.title}
                                        </h3>
                                        {item.variant && (
                                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                                                {item.variant}
                                            </span>
                                        )}
                                        <p className="text-orange-600 font-black mt-1">
                                            {item.price} د.م
                                        </p>
                                    </div>

                                    <div className="flex items-center border rounded-lg overflow-hidden">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.variant, -1)}
                                            className="w-8 h-8 bg-gray-100 hover:bg-gray-200 font-bold"
                                        >
                                            -
                                        </button>
                                        <span className="w-8 text-center font-bold text-sm">
                                            {item.quantity}
                                        </span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.variant, 1)}
                                            className="w-8 h-8 bg-gray-100 hover:bg-gray-200 font-bold"
                                        >
                                            +
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => removeFromCart(item.id, item.variant)}
                                        className="text-red-500 hover:text-red-700 font-bold p-2 text-sm"
                                    >
                                        🗑️
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-fit space-y-4">
                            <h2 className="font-bold text-lg border-b pb-3">ملخص الحساب</h2>

                            <div className="flex justify-between text-sm text-gray-600">
                                <span>المجموع الفرعي:</span>
                                <span className="font-bold text-gray-800">{totalAmount} د.م</span>
                            </div>

                            <div className="flex justify-between text-sm text-gray-600">
                                <span>التوصيل:</span>
                                <span className="font-bold text-green-600">مجاني 🚚</span>
                            </div>

                            <hr />

                            <div className="flex justify-between text-lg font-black text-gray-900">
                                <span>الإجمالي:</span>
                                <span className="text-orange-600">{totalAmount} د.م</span>
                            </div>

                            <Link
                                to="/checkout"
                                className="block text-center w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl shadow-lg transition duration-200"
                            >
                                متابعة الطلب (الدفع عند الاستلام)
                            </Link>
                        </div>

                    </div>
                ) : (
                    <div className="bg-white p-12 text-center rounded-2xl border shadow-sm space-y-4">
                        <p className="text-gray-500 font-medium text-lg">سلة التسوق فارغة حالياً</p>
                        <Link
                            to="/products"
                            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2.5 rounded-xl transition"
                        >
                            تصفح المنتجات
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}