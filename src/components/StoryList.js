import React, { useState, useEffect} from 'react';
import Story from './Story';
import { getStoryIds } from '../services/Api'; 

function StoryList() {

    const [storyList, setStoryList] = useState([]);

    useEffect(() => {
        getStoryIds().then(storyIds => {
            setStoryList(storyIds);
        });
    }, []);

    console.log('STORYS: ', storyList);
    return (
        <div>
            Top News:
            {storyList.map(storyId => (
                <Story key={storyId} storyId={storyId} />
            ))}
        </div>
    )
}

export default StoryList;
