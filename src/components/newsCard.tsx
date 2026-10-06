import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface INews {
    id : string
    title : string
    description : string
    imageUrl : string
    imageAlt : string
    category : string
}

const NewsCard = ({newses} : {newses : INews}) => {
    return (
       <Link href={`/diteles/${newses.id}`}>
        <div>
            <div className="card bg-base-100  shadow-sm">
  <figure>
    <Image src={newses.imageUrl} alt= {newses.imageAlt} height={600} width={600}></Image>
  </figure>
  <div className="card-body">
    <p>{newses.category}</p>
    <h2 className="card-title">{newses.title}</h2>
    <p>{newses.description}</p>
    
  </div>
</div>
        </div>
       </Link>
    );
};

export default NewsCard;