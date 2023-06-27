


async function getWiki(searchTerm: string) {
    const apiUrl = 'https://en.wikipedia.org/w/api.php?';
    const searchParams = new URLSearchParams({
        action: 'query',
        generator: 'search',
        gsrsearch: searchTerm,
        gsrlimit: '20',
        prop: 'pageimages|extracts',
        exchars: '100',
        exintro: 'true',
        explaintext: 'true',
        exlimit: 'max',
        format: 'json',
        origin: '*',
    });

    const res = await fetch(apiUrl + searchParams);
    return res.json();
};

export default getWiki;