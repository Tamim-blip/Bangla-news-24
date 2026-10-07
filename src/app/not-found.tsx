
import Link from "next/link";

const NotFound = () => {
    return (
        <main className="min-h-[70vh] flex items-center justify-center bg-white px-4">
            <div className="text-center max-w-xl">

                <p className="text-7xl md:text-9xl font-bold text-red-600">
                    404
                </p>

                <h1 className="mt-4 text-2xl md:text-4xl font-bold text-gray-900">
                    সংবাদটি খুঁজে পাওয়া যায়নি
                </h1>

                <p className="mt-4 text-gray-500 text-base md:text-lg leading-7">
                    দুঃখিত, আপনি যে পেজ বা সংবাদটি খুঁজছেন সেটি
                    হয়তো সরিয়ে ফেলা হয়েছে অথবা আর পাওয়া যাচ্ছে না।
                </p>

                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">

                    <Link
                        href="/"
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition"
                    >
                        হোমে ফিরে যান
                    </Link>

                    <Link
                        href="/latest"
                        className="border border-gray-300 hover:border-red-600 hover:text-red-600 text-gray-700 font-semibold px-6 py-3 rounded-lg transition"
                    >
                        সর্বশেষ সংবাদ
                    </Link>

                </div>

            </div>
        </main>
    );
};

export default NotFound;
