import NewsCard from '@/components/newsCard';
import React from 'react';

interface INews {
    id : string
    title : string
    description : string
    imageUrl : string
    imageAlt : string
    category : string

}

const CategoryPage = async ({params}: {params: Promise<{categoryID: string}>}) => {

    const {categoryID} = await params
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryID}`)
    const data = await res.json()

    const categoryNews : INews[] = data.data
    console.log(data)
    return (
        <div className='mt-5'>
            <div className='border-b-2 border-red-900'>
                <h1 className='text-2xl font-bold mb-4'>{data.title}</h1>
            </div>


            <div className='grid grid-cols-3 gap-3 mt-10'>
                {
                    categoryNews.map((news) => <NewsCard key={news.id} newses={news}></NewsCard>)
                }
            </div>
            
        </div>
    );
};

export default CategoryPage;