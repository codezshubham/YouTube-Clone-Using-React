import React, { useEffect, useState } from 'react';
import './Recommended.css';
import { API_KEY, value_convertor } from '../../Data';
import { Link } from 'react-router-dom';

const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
      const response = await fetch(relatedVideo_url);
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      setApiData(Array.isArray(data.items) ? data.items : []);
    } catch (error) {
      console.error('Error fetching data:', error);
      setApiData([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, [categoryId]);

  if (!apiData.length) {
    return <div>No recommended videos found.</div>;
  }

  return (
    <div className="recommended">
      {apiData.map((item, index) => {
        // Defensive: check if snippet & statistics exist
        if (!item || !item.snippet || !item.statistics) {
          return null; // Skip rendering this item
        }
        const {
          id,
          snippet: {
            title,
            channelTitle,
            thumbnails,
            categoryId: itemCategoryId,
          },
          statistics: { viewCount },
        } = item;

        return (
          <Link
            to={`/video/${itemCategoryId}/${id}`}
            key={index}
            className="side-video-list"
          >
            <img src={thumbnails?.medium?.url || ''} alt={title || 'Video thumbnail'} />
            <div className="vid-info">
              <h4>{title}</h4>
              <p>{channelTitle}</p>
              <p>{value_convertor(viewCount)} Views</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recommended;
