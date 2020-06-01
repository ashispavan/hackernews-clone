import React, { useState, useEffect} from 'react';
import Story from './Story';
import { getStoryIds } from '../services/Api'; 
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';


function StoryList() {

    const [storyList, setStoryList] = useState([]);
    const { count } = useInfiniteScroll();

    useEffect(() => {
        getStoryIds().then(storyIds => {
            setStoryList(storyIds);
        });
    }, []);

    return (
        <div>
            Top News:
            {storyList.slice(0, count).map(storyId => (
                <Story key={storyId} storyId={storyId} />
            ))}
        </div>
    )
}

export default StoryList;
