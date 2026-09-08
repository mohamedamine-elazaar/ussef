import { useState } from "react";
import { useParams, Link } from "react-router-dom";

// بيانات تجريبية للمنتج (في المستقبل يمكن استدعاؤها من API أو ملف data)
const dummyProduct = {
    id: "1",
    title: "ساعة ذكية متطورة مع شاشة AMOLED ورصد اللياقة البدنية",
    price: 299,
    originalPrice: 499,
    discount: "40%-",
    description:
        "ساعة ذكية عالية الجودة تدعم جميع الهواتف (Android & iOS)، تتميز بمقاومة الماء، تتبع الأنشطة الرياضية، قياس نبضات القلب، وبطارية تدوم حتى 7 أيام.",
    images: [
        "https://via.placeholder.com/600x600/f3f4f6/333333?text=Product+Image+1",
        "https://via.placeholder.com/600x600/e5e7eb/333333?text=Product+Image+2",
        "https://via.placeholder.com/600x600/d1d5db/333333?text=Product+Image+3",
    ],
    features: [
        "شاشة عالية الوضوح AMOLED",
        "مقاومة للماء والمعايير الرياضية",
        "بطارية تدوم أكثر من 7 أيام",
        "تحديثات وإشعارات فورية من الهاتف",
    ],
    variants: ["أسود", "فضة", "ذهبي"],
};

export default function ProductDetails() {
    const { id } = useParams();

    // حالة الصورة المعروضة
    const [selectedImage, setSelectedImage] = useState(dummyProduct.images[0]);
    const [selectedVariant, setSelectedVariant] = useState(dummyProduct.variants[0]);
    const [quantity, setQuantity] = useState(1);

    // حالة نموذج الطلب (Quick Order / COD)
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        city: "",
        address: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleOrderSubmit = (e) => {
        e.preventDefault();
        const orderData = {
            productId: id,
            productTitle: dummyProduct.title,
            price: dummyProduct.price * quantity,
            quantity,
            selectedVariant,
            customer: formData,
        };

        console.log("تم تسجيل الطلب بنجاح:", orderData);
        setSubmitted(true);
    };

    return (
        <div className="bg-gray-50 min-h-screen py-8 text-right" dir="rtl">
            <div className="max-w-6xl mx-auto px-4">

                {/* Breadcrumb / مسار التنقل */}
                <nav className="text-sm text-gray-500 mb-6">
                    <Link to="/" className="hover:text-orange-600">الرئيسية</Link> /
                    <Link to="/products" className="hover:text-orange-600 mx-1">المنتجات</Link> /
                    <span className="text-gray-800 font-medium mx-1">{dummyProduct.title}</span>
                </nav>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">

                    {/* قسم الصور (يمين أو يسار حسب RTL) */}
                    <div className="flex flex-col gap-4">
                        <div className="overflow-hidden rounded-xl border border-gray-200">
                            <img
                                src={selectedImage}
                                alt={dummyProduct.title}
                                className="w-full h-96 object-cover hover:scale-105 transition duration-300"
                            />
                        </div>
                        {/* المصغرات (Thumbnails) */}
                        <div className="flex gap-3">
                            {dummyProduct.images.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(img)}
                                    className={`border-2 rounded-lg overflow-hidden w-20 h-20 ${selectedImage === img ? "border-orange-500" : "border-gray-200"
                                        }`}
                                >
                                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* تفاصيل المنتج + نموذج الطلب السريع */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 leading-relaxed">
                                {dummyProduct.title}
                            </h1>

                            {/* الأسعار والتخفيض */}
                            <div className="flex items-center gap-3 my-4">
                                <span className="text-3xl font-black text-orange-600">
                                    {dummyProduct.price} د.م
                                </span>
                                <span className="text-lg text-gray-400 line-through">
                                    {dummyProduct.originalPrice} د.م
                                </span>
                                <span className="bg-red-100 text-red-600 text-xs font-bold px-2.5 py-1 rounded-full">
                                    تخفيض {dummyProduct.discount}
                                </span>
                            </div>

                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                {dummyProduct.description}
                            </p>

                            {/* مميزات المنتج */}
                            <div className="mb-6 bg-orange-50 p-4 rounded-xl border border-orange-100">
                                <h3 className="font-bold text-orange-900 mb-2">مميزات المنتج:</h3>
                                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                    {dummyProduct.features.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* خيارات اللون / النوع */}
                            <div className="mb-6">
                                <label className="block text-sm font-bold text-gray-700 mb-2">اللون:</label>
                                <div className="flex gap-2">
                                    {dummyProduct.variants.map((variant) => (
                                        <button
                                            key={variant}
                                            type="button"
                                            onClick={() => setSelectedVariant(variant)}
                                            className={`px-4 py-2 text-sm rounded-lg border font-medium ${selectedVariant === variant
                                                    ? "border-orange-500 bg-orange-50 text-orange-600"
                                                    : "border-gray-300 text-gray-700"
                                                }`}
                                        >
                                            {variant}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* اختيار الكمية */}
                            <div className="mb-6">
                                <label className="block text-sm font-bold text-gray-700 mb-2">الكمية:</label>
                                <div className="flex items-center border border-gray-300 w-32 rounded-lg overflow-hidden">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-10 h-10 bg-gray-100 hover:bg-gray-200 font-bold text-lg"
                                    >
                                        -
                                    </button>
                                    <span className="flex-1 text-center font-bold">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-10 h-10 bg-gray-100 hover:bg-gray-200 font-bold text-lg"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* نموذج الطلب المباشر - COD Form */}
                        <div className="border-t pt-6 mt-4">
                            {submitted ? (
                                <div className="bg-green-100 border border-green-300 text-green-800 p-4 rounded-xl text-center">
                                    <h3 className="font-bold text-lg mb-1">🎉 تم استلام طلبك بنجاح!</h3>
                                    <p className="text-sm">سيتصل بك فريقنا قريباً لتأكيد التوصيل.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleOrderSubmit} className="space-y-3 bg-gray-100 p-4 rounded-xl">
                                    <h3 className="font-bold text-gray-800 text-center text-lg mb-2">
                                        للطلب املأ الاستمارة (الدفع عند الاستلام)
                                    </h3>

                                    <input
                                        type="text"
                                        name="fullName"
                                        required
                                        placeholder="الاسم الكامل"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        className="w-full p-2.5 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:border-orange-500"
                                    />

                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        placeholder="رقم الهاتف (مثال: 0612345678)"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full p-2.5 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:border-orange-500"
                                    />

                                    <input
                                        type="text"
                                        name="city"
                                        required
                                        placeholder="المدينة"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        className="w-full p-2.5 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:border-orange-500"
                                    />

                                    <button
                                        type="submit"
                                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl shadow-lg transition duration-200 text-base"
                                    >
                                        تأكيد الطلب الآن ({dummyProduct.price * quantity} د.م) 🚚
                                    </button>
                                </form>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}