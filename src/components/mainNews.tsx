
import Image from 'next/image';
import Link from 'next/link';


interface TNews {
    id : string
    imageUrl : string
    imageAlt : string
    category : string
    title : string
    description : string
}

const MainNews = ({news} : {news :  TNews[]}) => {

    const firstNews = news[1]

   
    return (
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">

  {/* Left Side */}
  <Link href={`diteles/${firstNews.id}`}>
  <div className="h-full">
    <div className="card bg-base-100 shadow-md border border-gray-200 h-full overflow-hidden">

      <figure className="h-70">
        <Image
          src={firstNews.imageUrl}
          alt={firstNews.imageAlt}
          height={600}
          width={900}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="card-body p-5">
        <p className="text-red-700 font-semibold text-sm uppercase">
          {firstNews.category}
        </p>

        <h2 className="card-title text-black text-xl font-bold">
          {firstNews.title}
        </h2>

        <p className="text-gray-600 text-sm">
          {firstNews.description}
        </p>
      </div>

    </div>
  </div>

  </Link>
  {/* Right Side */}
<div className="h-full flex flex-col gap-3">
  {news.slice(3, 7).map((otherNews) => (
   <Link key={otherNews.id} href={`/diteles/${otherNews.id}`} className="bg-base-100 border border-gray-200 rounded-xl px-4 py-3 flex-1 shadow-sm">
   
      <p className="text-red-700 text-xs font-medium uppercase mb-1">
        {otherNews.category}
      </p>

      <h1 className="text-[16px] font-semibold text-gray-900 leading-snug line-clamp-2">
        {otherNews.title}
      </h1>
   
   </Link>
  ))}
</div>
</div>
    );
};

export default MainNews;