import React, { useEffect, useState, memo } from 'react';
import { getStory } from '../services/Api';

const Story = memo(function Story({storyId}) {

    const [story, setStory] = useState({});
    
    useEffect(() => {
        getStory(storyId).then(({data}) => {
            setStory(data);
        })
    }, [storyId]);

    const { title, url, by } = story;



    return url &&  (    
            <div className='story' onClick={()=> window.open(`${url}`, `_blank`)} >
                <span>
                    {title}
                </span>
                {/* <a target='_blank' rel="noopener noreferrer" href={url}>{url}</a> */}
                {'  by '}
                <small>{by}</small>
            </div>
  

    )
});

export default Story;
