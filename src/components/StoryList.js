import React, { useState, useEffect} from 'react';
import Story from './Story';
import { getStoryIds } from '../services/Api'; 
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { Squares } from './Squares';


function StoryList() {

    const [storyList, setStoryList] = useState([]);
    const { count } = useInfiniteScroll();

    useEffect(() => {
        getStoryIds().then(storyIds => {
            setStoryList(storyIds);
        });
    }, []);

    return (
        <div className="storiesContainer">
            <div className="titleContainer">
                <div className="title">HackerNews</div>
                <Squares />
            </div>
            
            <div className="listContainer">
                {storyList.slice(0, count).map(storyId => (
                    <Story key={storyId} storyId={storyId} />
                ))}
            </div>

        </div>
    )
}

export default StoryList;
