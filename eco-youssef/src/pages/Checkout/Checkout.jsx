import { useState } from 'react';

export default function Checkout() {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        city: '',
        address: '',
        notes: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('بيانات الطلب:', formData);
        alert('تم إرسال طلبك بنجاح! سنتصل بك قريباً لتأكيد الطلب.');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="mx-3 my-6 max-w-2xl rounded-lg bg-white p-4 shadow-md sm:mx-auto sm:my-8 sm:p-6" dir="rtl">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                إتمام الطلب - الدفع عند الاستلام 🚚
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                        الاسم الكامل <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="أدخل اسمك الكامل"
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                        رقم الهاتف <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="06XXXXXXXX"
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                        المدينة <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="المدينة"
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-semibold mb-1">العنوان الكامل</label>
                    <textarea
                        name="address"
                        rows="3"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="الحي، الشارع، رقم المنزل..."
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-semibold mb-1">ملاحظات إضافية (اختياري)</label>
                    <input
                        type="text"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="أي ملاحظات بخصوص التسليم..."
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-md transition duration-200 text-lg shadow-md mt-6"
                >
                    تأكيد الطلب الأن
                </button>
            </form>
        </div>
    );
}