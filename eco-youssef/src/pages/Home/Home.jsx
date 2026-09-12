import { Link } from "react-router-dom";

// بيانات تجريبية للمنتجات المميزة
const featuredProducts = [
    {
        id: "1",
        title: "ساعة ذكية متطورة مع شاشة AMOLED",
        price: 299,
        originalPrice: 499,
        image: "https://via.placeholder.com/300x300/f3f4f6/333333?text=Smart+Watch",
        badge: "الأكثر مبيعاً",
    },
    {
        id: "2",
        title: "سماعات لاسلكية عازلة للضوضاء",
        price: 189,
        originalPrice: 299,
        image: "https://via.placeholder.com/300x300/f3f4f6/333333?text=Headphones",
        badge: "تخفيض 35%",
    },
    {
        id: "3",
        title: "حقيبة ظهر مقاومة للماء مع منفذ USB",
        price: 150,
        originalPrice: 220,
        image: "https://via.placeholder.com/300x300/f3f4f6/333333?text=Backpack",
        badge: "جديد",
    },
];

export default function Home() {
    return (
        <div className="bg-gray-50 min-h-screen text-right" dir="rtl">

            {/* 1. Hero Section - الواجهة الرئيسية */}
            <section className="bg-gradient-to-r from-orange-600 to-amber-500 px-4 py-12 text-white sm:py-16">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">

                    <div className="w-full space-y-4 md:w-1/2">
                        <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            التوصيل لجميع المدن المغربية 🚚
                        </span>
                        <h1 className="text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                            أفضل المنتجات وأجودها بأسعار مناسبة
                        </h1>
                        <p className="text-orange-100 text-base leading-relaxed">
                            تسوق الآن واستفد من عروضنا الحصرية، الدفع عند الاستلام مع إمكانية المعاينة قبل الدفع.
                        </p>
                        <div className="pt-2">
                            <Link
                                to="/products"
                                className="inline-block bg-white text-orange-600 font-bold px-8 py-3.5 rounded-xl shadow-lg hover:bg-gray-100 transition duration-200 text-lg"
                            >
                                تصفح المنتجات الآن
                            </Link>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <img
                            src="https://via.placeholder.com/500x350/ffffff/333333?text=Special+Offer"
                            alt="Hero Banner"
                            className="mx-auto w-full max-w-xl rounded-2xl border-4 border-white/20 object-cover shadow-2xl"
                        />
                    </div>

                </div>
            </section>

            {/* 2. Features Section - مميزات المتجر */}
            <section className="py-10 bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">

                    <div className="p-4 border rounded-xl bg-gray-50">
                        <div className="text-3xl mb-2">🚚</div>
                        <h3 className="font-bold text-gray-800">توصيل سريع</h3>
                        <p className="text-xs text-gray-500 mt-1">توصيل لكل المدن المغربية خلال 24-48 ساعة</p>
                    </div>

                    <div className="p-4 border rounded-xl bg-gray-50">
                        <div className="text-3xl mb-2">💵</div>
                        <h3 className="font-bold text-gray-800">الدفع عند الاستلام</h3>
                        <p className="text-xs text-gray-500 mt-1">لا تدفع شيئاً حتى تستلم طلبك وتفحصه</p>
                    </div>

                    <div className="p-4 border rounded-xl bg-gray-50">
                        <div className="text-3xl mb-2">🛡️</div>
                        <h3 className="font-bold text-gray-800">ضمان الجودة</h3>
                        <p className="text-xs text-gray-500 mt-1">منتجات أصلية 100% مع إمكانية الاستبدال</p>
                    </div>

                    <div className="p-4 border rounded-xl bg-gray-50">
                        <div className="text-3xl mb-2">📞</div>
                        <h3 className="font-bold text-gray-800">دعم متواصل</h3>
                        <p className="text-xs text-gray-500 mt-1">فريقنا على الواتساب جاهز لمساعدتك دائماً</p>
                    </div>

                </div>
            </section>

            {/* 3. Featured Products - المنتجات الأكثر مبيعاً */}
            <section className="py-12 max-w-7xl mx-auto px-4">
                <div className="mb-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="text-xl font-black text-gray-900 sm:text-2xl">المنتجات الأكثر مبيعاً 🔥</h2>
                        <p className="text-sm text-gray-500">اخترنا لك أفضل العروض المتاحة حالياً</p>
                    </div>
                    <Link to="/products" className="text-orange-600 font-bold hover:underline text-sm">
                        عرض الكل ←
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {featuredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition flex flex-col justify-between"
                        >
                            <div>
                                <div className="relative">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-52 object-cover"
                                    />
                                    <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                                        {product.badge}
                                    </span>
                                </div>

                                <div className="p-4">
                                    <h3 className="font-bold text-gray-800 text-base mb-2">{product.title}</h3>
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl font-black text-green-600">{product.price} د.م</span>
                                        <span className="text-sm text-gray-400 line-through">{product.originalPrice} د.م</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 pt-0">
                                <Link
                                    to={`/products/${product.id}`}
                                    className="block text-center w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 rounded-xl transition duration-200 text-sm"
                                >
                                    اطلب الآن 🛒
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Banner Section - إعلان ترويجي */}
            <section className="bg-gray-900 text-white py-12 px-4 text-center my-8">
                <div className="max-w-3xl mx-auto space-y-4">
                    <h2 className="text-3xl font-black text-amber-400">تخفيضات تصل إلى 50%! 🎁</h2>
                    <p className="text-gray-300">عرض محدود لفترة قصيرة على تشكيلة واسعة من المنتجات المختارة.</p>
                    <Link
                        to="/products"
                        className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition"
                    >
                        استفد من العرض الآن
                    </Link>
                </div>
            </section>

        </div>
    );
}