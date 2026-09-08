import { useState } from "react";
import { Link } from "react-router-dom";

// بيانات تجريبية للمنتجات
const initialProducts = [
    {
        id: "1",
        title: "ساعة ذكية متطورة مع شاشة AMOLED",
        price: 299,
        originalPrice: 499,
        category: "إلكترونيات",
        image: "https://via.placeholder.com/300x300/f3f4f6/333333?text=Smart+Watch",
        inStock: true,
    },
    {
        id: "2",
        title: "سماعات لاسلكية عازلة للضوضاء",
        price: 189,
        originalPrice: 299,
        category: "إلكترونيات",
        image: "https://via.placeholder.com/300x300/f3f4f6/333333?text=Headphones",
        inStock: true,
    },
    {
        id: "3",
        title: "حقيبة ظهر مقاومة للماء مع منفذ USB",
        price: 150,
        originalPrice: 220,
        category: "إكسسوارات",
        image: "https://via.placeholder.com/300x300/f3f4f6/333333?text=Backpack",
        inStock: true,
    },
    {
        id: "4",
        title: "مصباح مكتبي ذكي بـ 3 مستويات إضاءة",
        price: 99,
        originalPrice: 150,
        category: "منزليات",
        image: "https://via.placeholder.com/300x300/f3f4f6/333333?text=Desk+Lamp",
        inStock: false,
    },
];

export default function Products() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("الكل");

    const categories = ["الكل", "إلكترونيات", "إكسسوارات", "منزليات"];

    // تصفية المنتجات حسب البحث والتصنيف
    const filteredProducts = initialProducts.filter((product) => {
        const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "الكل" || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="bg-gray-50 min-h-screen py-8 text-right" dir="rtl">
            <div className="max-w-7xl mx-auto px-4">

                {/* عنوان الصفحة */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-black text-gray-900 mb-2">جميع المنتجات</h1>
                    <p className="text-gray-600 text-sm">اختر من بين أفضل المنتجات المتاحة للتوصيل السريع والدفع عند الاستلام</p>
                </div>

                {/* شريط البحث والتصفية */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">

                    {/* مربع البحث */}
                    <div className="w-full md:w-1/2">
                        <input
                            type="text"
                            placeholder="ابحث عن منتج..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full p-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-orange-500"
                        />
                    </div>

                    {/* أزرار التصنيف */}
                    <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition ${selectedCategory === cat
                                        ? "bg-orange-600 text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* شبكة عرض المنتجات (Grid) */}
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition flex flex-col justify-between"
                            >
                                <div>
                                    {/* صورة المنتج */}
                                    <div className="relative overflow-hidden group">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                                        />
                                        {!product.inStock && (
                                            <span className="absolute top-2 right-2 bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded">
                                                نفذت الكمية
                                            </span>
                                        )}
                                    </div>

                                    {/* معلومات المنتج */}
                                    <div className="p-4">
                                        <span className="text-xs text-orange-600 font-semibold">{product.category}</span>
                                        <h3 className="font-bold text-gray-800 text-base my-1 line-clamp-2">
                                            {product.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* السعر والزر */}
                                <div className="p-4 pt-0">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-xl font-black text-green-600">{product.price} د.م</span>
                                        {product.originalPrice && (
                                            <span className="text-sm text-gray-400 line-through">
                                                {product.originalPrice} د.م
                                            </span>
                                        )}
                                    </div>

                                    <Link
                                        to={`/products/${product.id}`}
                                        className="block text-center w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-lg transition duration-200 text-sm"
                                    >
                                        عرض التفاصيل
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 bg-white rounded-xl border">
                        <p className="text-gray-500 font-medium">لم يتم العثور على أي منتجات مطابقة للبحث.</p>
                    </div>
                )}

            </div>
        </div>
    );
}