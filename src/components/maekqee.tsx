import Link from "next/link"
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface TMarquee {
   id: string
  title: string
  description: string
  link: string
  imageUrl: string
  imageAlt: string
  category: string
  type: string
  isLive: boolean
  firstPublished: null | string
  lastPublished: null | string
  source: string
}

const MarQuee = async() => {

    const res = await fetch("https://news-api-v2.vercel.app/api/news")
    const data = await res.json()
    const marqueedata : TMarquee[] = data.data
    return (
        <div className="bg-red-700 mt-5 ">

            <div className="container mx-auto flex">

                <h3 className="bg-red-900 py-1 text-white font-bold  px-2">সর্বশেষ</h3>
            <MarqueeText className=" text-white py-1" direction="right" duration={10}>

            {
                marqueedata.slice(1,10).map(e => <span key={e.id} >

                   <Link className="hover:underline" href={`/diteles/${e.id}`}>
                    <span>{e.title}</span>
                    <span className='mx-5'>•</span>
                   </Link>

                </span>)
            }
            </MarqueeText>

            </div>
            
        </div>
    );
};

export default MarQuee;