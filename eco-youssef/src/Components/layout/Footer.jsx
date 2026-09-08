export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white text-center py-6 mt-auto">
            <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} MyStore. جميع الحقوق محفوظة.
            </p>
        </footer>
    );
}