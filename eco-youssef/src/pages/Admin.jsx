import { useState } from "react";
import { useProducts } from "../Context/ProductContext";

export default function Admin() {
    const { products, addProduct, deleteProduct } = useProducts();

    const handleLogout = () => {
        localStorage.removeItem("isAdmin");
        window.location.href = "/login";
    };

    const [formData, setFormData] = useState({
        title: "",
        price: "",
        originalPrice: "",
        category: "إلكترونيات",
        image: "",
        description: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title || !formData.price || !formData.image) {
            alert("يرجى ملء جميع الحقول الأساسية!");
            return;
        }

        addProduct({
            ...formData,
            price: Number(formData.price),
            originalPrice: formData.originalPrice ? Number(formData.originalPrice) : null,
        });

        setFormData({
            title: "",
            price: "",
            originalPrice: "",
            category: "إلكترونيات",
            image: "",
            description: "",
        });

        alert("تمت إضافة المنتج بنجاح!");
    };

    return (
        <div className="bg-gray-50 min-h-screen py-10 text-right" dir="rtl">
            <div className="max-w-6xl mx-auto px-4">
                <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                    <h1 className="text-3xl font-black text-gray-900">لوحة تحكم الأدمن 🛠️</h1>
                    <button
                        type="button"
                        onClick={handleLogout}
                        className="rounded-xl bg-gray-200 px-4 py-2 text-sm font-bold text-gray-800 transition hover:bg-gray-300"
                    >
                        تسجيل الخروج 🚪
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* نموذج إضافة منتج جديد */}
                    <div className="bg-white p-6 rounded-2xl border shadow-sm h-fit">
                        <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">
                            إضافة منتج جديد
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">اسم المنتج</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className="w-full p-2.5 border rounded-lg text-sm focus:outline-none focus:border-orange-500"
                                    placeholder="مثال: ساعة ذكية"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">السعر (د.م)</label>
                                    <input
                                        type="number"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleChange}
                                        className="w-full p-2.5 border rounded-lg text-sm focus:outline-none focus:border-orange-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">السعر القديم</label>
                                    <input
                                        type="number"
                                        name="originalPrice"
                                        value={formData.originalPrice}
                                        onChange={handleChange}
                                        className="w-full p-2.5 border rounded-lg text-sm focus:outline-none focus:border-orange-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">التصنيف</label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="w-full p-2.5 border rounded-lg text-sm focus:outline-none focus:border-orange-500 bg-white"
                                >
                                    <option value="إلكترونيات">إلكترونيات</option>
                                    <option value="إكسسوارات">إكسسوارات</option>
                                    <option value="منزليات">منزليات</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">رابط الصورة (URL)</label>
                                <input
                                    type="text"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleChange}
                                    className="w-full p-2.5 border rounded-lg text-sm focus:outline-none focus:border-orange-500"
                                    placeholder="https://..."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">الوصف</label>
                                <textarea
                                    name="description"
                                    rows="3"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="w-full p-2.5 border rounded-lg text-sm focus:outline-none focus:border-orange-500"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-xl transition cursor-pointer"
                            >
                                حفظ وإضافة المنتج ➕
                            </button>
                        </form>
                    </div>

                    {/* قائمة إدارة المنتجات الحالية */}
                    <div className="lg:col-span-2 bg-white p-6 rounded-2xl border shadow-sm">
                        <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">
                            المنتجات الحالية ({products.length})
                        </h2>

                        <div className="space-y-4 max-h-[600px] overflow-y-auto pl-2">
                            {products.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center justify-between border p-3 rounded-xl hover:bg-gray-50 transition"
                                >
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-14 h-14 object-cover rounded-lg border"
                                        />
                                        <div>
                                            <h4 className="font-bold text-sm text-gray-800">{item.title}</h4>
                                            <p className="text-xs text-green-600 font-bold">{item.price} د.م</p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => deleteProduct(item.id)}
                                        className="bg-red-50 text-red-600 hover:bg-red-100 font-bold px-3 py-1.5 rounded-lg text-xs transition"
                                    >
                                        حذف 🗑️
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}