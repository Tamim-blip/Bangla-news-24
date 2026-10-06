
import MainNews from "@/components/mainNews";
import MostRead from "@/components/mostRead";
import NewsCard from "@/components/newsCard";

interface INews {
  curationId : string
  title : string
  articles : {
    id : string
    title : string
    description : string
    imageUrl : string
    imageAlt : string
    category : string
  }[]



}


export default async function Home() {

  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections')
  const data = await res.json()
  const news = data.data

  const mainNews  = news[0].articles

  const newsSection : INews[] = news.slice(1)
  
 


  return (
    <div >

     

      <div className="grid grid-cols-3 container mx-auto gap-4 mt-10">


        <div className=" col-span-2">
          <MainNews news = {mainNews}></MainNews>

          <div className="mt-5">

            {
              newsSection.map((allNews) => 
                <div  key={allNews.curationId}>
                  <h1 className="border-b-2 border-be-orange-900 p-5 text-red-700 font-bold text-[20px]">{allNews.title}</h1>

                  <div className="grid grid-cols-3 gap-2 mt-3">
                    {
                      allNews.articles.map( newses => <NewsCard key={newses.id} newses = {newses}></NewsCard>)
                    }
                  </div>
                </div>
              )
            }

          </div>

        </div>


        <div className=" col-span-1">

          <MostRead></MostRead>

        </div>
      </div>

    
     
    </div>
  );
}
