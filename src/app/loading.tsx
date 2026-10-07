
const Loading = () => {
    return (
        <main className="min-h-[70vh] flex items-center justify-center bg-white px-4">
            <div className="flex flex-col items-center">

                {/* Spinner */}
                <div className="w-12 h-12 border-4 border-gray-200 border-t-red-600 rounded-full animate-spin" />

                {/* Text */}
                <p className="mt-5 text-lg font-semibold text-gray-800">
                    সংবাদ লোড হচ্ছে...
                </p>

                <p className="mt-1 text-sm text-gray-500">
                    অনুগ্রহ করে একটু অপেক্ষা করুন
                </p>

            </div>
        </main>
    );
};

export default Loading;
