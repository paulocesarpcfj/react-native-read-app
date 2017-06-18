export const FETCH = 'chapters/FETCH';

export const fetchChapter = () => {
    const request = fetch('http://cap_america.inkitt.de/1/stories/106766/chapters/1')
        .then(res => res.json())
        .catch(err => console.warn('err', err));

    return {
        type: FETCH,
        payload: request,
    };
};
