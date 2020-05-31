import axios from 'axios';

const baseUrl = `https://hacker-news.firebaseio.com/v0`;
const storyListUrl = `${baseUrl}/topstories.json`
const storyUrl = `${baseUrl}/item`;


export const getStoryIds = async () => {
    const storyIds = await axios.get(`${storyListUrl}`).then(({data}) => data);

    return storyIds;
}

export const getStory = async (storyId) => {
    const story = await axios.get(`${storyUrl}/${storyId}.json`).then((data) => data);

    return story;
}