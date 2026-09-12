import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../Context/CartContext";

export default function Cart() {
    const navigate = useNavigate();
    const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (cart.length === 0) {
        return <div className="min-h-screen bg-gray-50 py-16 text-center" dir="rtl"><h1 className="mb-4 text-3xl font-black text-gray-900">سلة التسوق</h1><p className="mb-6 text-gray-600">السلة فارغة حالياً.</p><Link to="/products" className="inline-block rounded-lg bg-orange-500 px-6 py-3 font-bold text-white">تصفح المنتجات</Link></div>;
    }

    return (
        <div className="min-h-screen bg-gray-50 py-6 text-right sm:py-10" dir="rtl">
            <div className="mx-auto max-w-5xl px-4">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3"><h1 className="text-2xl font-black text-gray-900 sm:text-3xl">سلة التسوق</h1><button type="button" onClick={clearCart} className="font-bold text-red-600">إفراغ السلة</button></div>
                <div className="space-y-4">{cart.map((item) => <div key={`${item.id}-${item.variant}`} className="flex flex-col gap-4 rounded-xl border bg-white p-4 shadow-sm sm:flex-row sm:items-center"><img src={item.image} alt={item.title} className="h-24 w-full rounded-lg object-cover sm:w-24" /><div className="flex-1"><h2 className="font-bold text-gray-900">{item.title}</h2>{item.variant && <p className="text-sm text-gray-500">اللون: {item.variant}</p>}<p className="mt-1 font-bold text-orange-600">{item.price} د.م</p></div><div className="flex items-center gap-3"><button type="button" onClick={() => updateQuantity(item.id, item.variant, -1)} className="h-8 w-8 rounded border bg-gray-100 font-bold">-</button><span className="min-w-6 text-center font-bold">{item.quantity}</span><button type="button" onClick={() => updateQuantity(item.id, item.variant, 1)} className="h-8 w-8 rounded border bg-gray-100 font-bold">+</button></div><button type="button" onClick={() => removeFromCart(item.id, item.variant)} className="font-bold text-red-600">حذف</button></div>)}</div>
                <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-xl border bg-white p-6 sm:flex-row"><div className="text-xl font-black text-gray-900">الإجمالي: {total} د.م</div><button type="button" onClick={() => navigate("/checkout")} className="w-full rounded-lg bg-orange-500 px-8 py-3 font-bold text-white sm:w-auto">إتمام الطلب</button></div>
            </div>
        </div>
    );
}
