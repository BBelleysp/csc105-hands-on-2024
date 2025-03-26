import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const FavouriteDetailPage = () => {
  const { id } = useParams(); 
  const [searchParams] = useSearchParams();

  const q = searchParams.get('q'); 
  const size = searchParams.get('size'); 
  
  return (
    <div>
      <h1 className="text-3xl">Favourite Detail Page</h1>
      <p className="text-lg mt-4">
        Your favourite post is <span className="font-bold">{q}</span>. 
        Post ID is <span className="font-bold">{id}</span>. 
        Size is <span className="font-bold">{size}</span>.
      </p>
    </div>
  );
};

export default FavouriteDetailPage;
