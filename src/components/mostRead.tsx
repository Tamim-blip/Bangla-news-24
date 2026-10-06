
import React from 'react';

interface INews {
    id : string
    title : string
}

const MostRead = async() => {

    const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read')
    const data = await res.json()

    const mostRead : INews[] = data.data
    return (
       <div className="bg-base-100 border border-gray-200 rounded-xl p-5 shadow-sm">

  {/* Heading */}
  <div className="border-b border-gray-200 pb-3 mb-2">
    <p className="text-xl font-bold text-gray-900">
      সর্বাধিক পঠিত
    </p>
  </div>

  {/* Most Read News */}
  <div>
    {mostRead.map((news, ind) => (
      <div
        className="flex gap-4 py-4 border-b border-gray-200 last:border-b-0"
        key={news.id}
      >
        {/* Number */}
        <p className="text-2xl font-bold text-red-700 w-7 shrink-0">
          {ind + 1}
        </p>

        {/* News Title */}
        <h3 className="text-[16px] font-semibold text-gray-800 leading-snug hover:text-red-700 cursor-pointer transition-colors">
          {news.title}
        </h3>
      </div>
    ))}
  </div>

</div>
    );
};

export default MostRead;