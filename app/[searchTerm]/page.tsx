

import getWiki from '@/lib/getWiki';
import Item from './Components/Item';

type Params = {params: {
    searchTerm: string
    };
};


async function generateMetadata({ params: { searchTerm } }: Params) {
    const wikiData: Promise<SearchResult> = getWiki(searchTerm);
    const data = await wikiData;
    const displayTerm = searchTerm.replaceAll('%20', ' ');

    if (!data?.query?.pages) {
        return {
            title: `${displayTerm} Not Found`
        };
    };

    return {
        title: displayTerm,
        description: `Search results for ${displayTerm}`
    };
};

async function SearchResults({params: {searchTerm}}: Params) {
    const wikiData: Promise<SearchResult> = getWiki(searchTerm);
    const data = await wikiData;
    const results: Result[] | undefined = data?.query?.pages;
    const stylesMain = 'bg-slate-200 mx-auto max-w-lg py-1 min-h-screen';
    const stylesNotFound = 'p-2 text-xl';
    const notFound = (<h2 className={stylesNotFound }>${searchTerm} not found</h2>);
    const content = (<main className={stylesMain}>{results ? Object.values(results).map((item)=> {
        return <Item key={item.pageid} result={item}/>
    }) : notFound}</main>);
    return content;
};

export default SearchResults;
export {generateMetadata}