import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../../Context/CartContext";

const products = [
    { id: "1", title: "ساعة ذكية متطورة مع شاشة AMOLED", price: 299, originalPrice: 499, category: "إلكترونيات", description: "ساعة ذكية ممتازة تتوافق مع جميع الهواتف وتدعم تتبع الأنشطة الرياضية.", image: "https://via.placeholder.com/500x500/f3f4f6/333333?text=Smart+Watch" },
    { id: "2", title: "سماعات لاسلكية عازلة للضوضاء", price: 189, originalPrice: 299, category: "إلكترونيات", description: "جودة صوت عالية مع تقنية إلغاء الضوضاء وميكروفون واضح للمكالمات.", image: "https://via.placeholder.com/500x500/f3f4f6/333333?text=Headphones" },
];

export default function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const product = products.find((item) => item.id === id) || products[0];

    const handleAddToCart = () => {
        addToCart(product, quantity);
        navigate("/cart");
    };

    return (
        <div className="min-h-screen bg-gray-50 py-10 text-right" dir="rtl">
            <div className="mx-auto max-w-5xl rounded-2xl border bg-white p-6 shadow-sm md:p-8">
                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                    <img src={product.image} alt={product.title} className="h-80 w-full rounded-xl border object-cover" />
                    <div className="space-y-4">
                        <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-600">{product.category}</span>
                        <h1 className="text-2xl font-black text-gray-900 md:text-3xl">{product.title}</h1>
                        <p className="text-sm leading-relaxed text-gray-600">{product.description}</p>
                        <div className="flex items-center gap-3"><span className="text-3xl font-black text-green-600">{product.price} د.م</span><span className="text-lg text-gray-400 line-through">{product.originalPrice} د.م</span></div>
                        <div className="flex items-center gap-4 py-2"><span className="text-sm font-bold text-gray-700">الكمية:</span><div className="flex items-center overflow-hidden rounded-lg border"><button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="bg-gray-100 px-3 py-1 font-bold">-</button><span className="px-4 font-bold">{quantity}</span><button type="button" onClick={() => setQuantity((value) => value + 1)} className="bg-gray-100 px-3 py-1 font-bold">+</button></div></div>
                        <button type="button" onClick={handleAddToCart} className="w-full rounded-xl bg-orange-500 py-3.5 font-bold text-white shadow-lg hover:bg-orange-600">أضف إلى السلة</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
