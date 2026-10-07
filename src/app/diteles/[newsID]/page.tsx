
import { TNewsDetails } from "@/type/news";
import Image from "next/image";

const DitelesPage = async ({ params }: { params: Promise<{ newsID: string }> }) => {
    const { newsID } = await params;

    const res = await fetch(
        `https://news-api-v2.vercel.app/api/article/${newsID}`
    );

    const data = await res.json();

    const dietelsData : TNewsDetails = data.data;

    return (
        <main className="bg-white">

            {/* Article Header */}
            <section className="max-w-5xl mx-auto px-4 md:px-6 pt-8 md:pt-12">

                {/* Topics */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {dietelsData?.topics?.map((topic) => (
                        <span
                            key={topic.id}
                            className="text-sm font-medium text-red-600 bg-red-50 px-3 py-1 rounded-full"
                        >
                            {topic.name}
                        </span>
                    ))}
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
                    {dietelsData?.title}
                </h1>

                {/* Description */}
                <p className="mt-5 max-w-4xl text-lg md:text-xl leading-8 text-gray-600">
                    {
                        dietelsData?.description?.blocks?.[0]
                            ?.model?.blocks?.[0]?.model?.text
                    }
                </p>

                {/* Author + Date */}
                <div className="flex flex-wrap items-center gap-4 mt-6 pb-6 border-b">

                    {dietelsData?.byline?.map((author) => (
                        <div key={author.name}>
                            <p className="font-semibold text-gray-900">
                                {author.name}
                            </p>

                            <p className="text-sm text-gray-500">
                                {author.role}
                            </p>
                        </div>
                    ))}

                    <div className="hidden sm:block h-8 w-px bg-gray-300" />

                    <p className="text-sm text-gray-500">
                        {new Date(
                            dietelsData?.firstPublished
                        ).toLocaleDateString("bn-BD", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </p>

                </div>

            </section>


            {/* Main Article */}
            <article className="max-w-5xl mx-auto px-4 md:px-6">

                {/* Hero Image */}
                {/* <figure className="mt-8">

                    <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                        <Image
                            src={dietelsData.imageUrl}
                            alt={dietelsData.title}
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>

                </figure> */}


                {/* Body */}
                <div className="max-w-4xl mt-8 pb-12">

                    {dietelsData?.body?.map((item, index) => {

                        {/* Text */}
                        if (item.type === "text") {
                            return (
                                <p
                                    key={index}
                                    className="text-[17px] md:text-lg leading-8 text-gray-800 mb-7 whitespace-pre-line"
                                >
                                    {item.text}
                                </p>
                            );
                        }


                        {/* Subheading */}
                        if (item.type === "subheading") {
                            return (
                                <h2
                                    key={index}
                                    className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-5"
                                >
                                    {item.text}
                                </h2>
                            );
                        }


                        {/* Image */}
                        if (item.type === "image") {
                            return (
                                <figure
                                    key={index}
                                    className="my-9"
                                >

                                    <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                                        <Image
                                            src={item.url ?? dietelsData.imageUrl}
                                            alt={
                                                item.altText ||
                                                dietelsData.title
                                            }
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {item.caption && (
                                        <figcaption className="mt-2 text-sm text-gray-500">
                                            {item.caption}
                                        </figcaption>
                                    )}

                                </figure>
                            );
                        }

                        return null;
                    })}

                </div>


                {/* Source */}
                <div className="max-w-4xl border-t py-6 text-sm text-gray-500">
                    Source:{" "}
                    <span className="font-semibold text-gray-700">
                        {dietelsData?.source}
                    </span>
                </div>

            </article>

        </main>
    );
};

export default DitelesPage;
