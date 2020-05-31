import React, { useEffect, useState} from 'react';
import { getStory } from '../services/Api';

function Story({storyId}) {

    const [story, setStory] = useState({});
    
    useEffect(() => {
        getStory(storyId).then(({data}) => {
            setStory(data);
        })
    }, [storyId]);

    const { title, url, by } = story;

    return (
        <div>
            <h3>{title}</h3>
            <a href={url}>{url}</a>
            <small>{by}</small>
        </div>
    )
}

export default Story;
