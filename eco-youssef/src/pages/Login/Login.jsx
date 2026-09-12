import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // إعدادات الدخول الخاصة بالأدمن (يمكنك تغيير البيانات هنا)
        if (email === "admin@store.com" && password === "admin123") {
            localStorage.setItem("isAdmin", "true");
            setError("");
            navigate("/admin");
        } else {
            setError("البريد الإلكتروني أو كلمة المرور غير صحيحة!");
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4" dir="rtl">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl border shadow-sm space-y-6">
                <div className="text-center">
                    <h2 className="text-3xl font-black text-gray-900">تسجيل الدخول للوحة التحكم</h2>
                    <p className="text-sm text-gray-500 mt-1">خاص بمدير المتجر فقط</p>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm font-medium border border-red-100">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            البريد الإلكتروني
                        </label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="admin@store.com"
                            className="w-full p-3 border rounded-xl text-sm focus:outline-none focus:border-orange-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            كلمة المرور
                        </label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full p-3 border rounded-xl text-sm focus:outline-none focus:border-orange-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-xl transition duration-200 shadow-md cursor-pointer"
                    >
                        دخول 🔐
                    </button>
                </form>
            </div>
        </div>
    );
}
