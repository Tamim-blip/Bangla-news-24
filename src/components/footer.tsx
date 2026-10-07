import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-white mt-16">

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div className="md:col-span-2">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Bangla <span className="text-red-600">News 24</span>
                        </h2>

                        <p className="mt-4 max-w-md text-gray-400 leading-7">
                            দেশের সর্বশেষ সংবাদ, রাজনীতি, খেলাধুলা,
                            বিনোদন ও বিশ্বের গুরুত্বপূর্ণ খবর একসাথে।
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            গুরুত্বপূর্ণ লিংক
                        </h3>

                        <ul className="space-y-3 text-gray-400">
                            <li>
                             <Link
                                    href="/"
                                    className="hover:text-red-500 transition"
                                >
                                    হোম
                                </Link>
                            </li>

                            <li>
                                <a
                                    href="/latest"
                                    className="hover:text-red-500 transition"
                                >
                                    সর্বশেষ সংবাদ
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/politics"
                                    className="hover:text-red-500 transition"
                                >
                                    রাজনীতি
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/sports"
                                    className="hover:text-red-500 transition"
                                >
                                    খেলাধুলা
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            বিভাগ
                        </h3>

                        <ul className="space-y-3 text-gray-400">
                            <li className="hover:text-red-500 transition cursor-pointer">
                                বাংলাদেশ
                            </li>

                            <li className="hover:text-red-500 transition cursor-pointer">
                                আন্তর্জাতিক
                            </li>

                            <li className="hover:text-red-500 transition cursor-pointer">
                                বিনোদন
                            </li>

                            <li className="hover:text-red-500 transition cursor-pointer">
                                প্রযুক্তি
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 mt-10 pt-6">

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} Bangla News 24. সর্বস্বত্ব সংরক্ষিত।
                        </p>

                        <div className="flex gap-5 text-sm text-gray-400">
                            <a
                                href="#"
                                className="hover:text-red-500 transition"
                            >
                                গোপনীয়তা নীতি
                            </a>

                            <a
                                href="#"
                                className="hover:text-red-500 transition"
                            >
                                যোগাযোগ
                            </a>

                            <a
                                href="#"
                                className="hover:text-red-500 transition"
                            >
                                আমাদের সম্পর্কে
                            </a>
                        </div>

                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;
