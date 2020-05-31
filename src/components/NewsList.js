import React, { useState, useEffect} from 'react';
import News from './News';
import axios from 'axios';
const NEWS_URL = 'https://hacker-news.firebaseio.com/v0/topstories.json';

function NewsList() {

    const [newsList, setNewsList] = useState([]);
    useEffect(() => {
        axios.get(NEWS_URL).then(({data}) => {
            console.log(data);
            setNewsList(data);
        })
    }, []);

    return (
        <div>
            Top News:
            {newsList.map(newsId => (
                <News key={newsId} />
            ))}
        </div>
    )
}

export default NewsList;
