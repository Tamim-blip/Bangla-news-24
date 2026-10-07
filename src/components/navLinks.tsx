

import Link from 'next/link';

import React from 'react';

interface TNav  {

    slug : string,
    title : string,
    topicId : string | null,
    url : string
    scrapable : boolean
    
}

const NavLinks = async() => {



    const res = await fetch('https://news-api-v2.vercel.app/api/categories')
    const data = await res.json()

    const naves = data.data
    const filteredLinks : TNav [] = naves.filter((n : TNav)=> n.scrapable)
    return (
        <div className='flex justify-center items-center gap-5 mt-8'>

            <Link className='hover:text-red-400' href= '/'>হোম</Link>
            {
                filteredLinks.map((n : TNav, ind : number) => <Link className={`hover:text-red-400`} key={ind} href={`/category/${n.slug}`}>{n.title}</Link>)
            }
        </div>
    );
};

export default NavLinks;