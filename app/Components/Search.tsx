

'use client';

import {useState, FormEvent} from 'react';
import {useRouter} from 'next/navigation';

function Search() {
    const [search, setSearch] = useState('');
    const router = useRouter();

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSearch('');
        router.push(`/${search}/`)
    };

    const formStyles = 'w-50 flex justify-center md:justify-between';
    const submitBtnStyles = 'p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold';
    const inputStyles = 'bg-white p-2 w-80 text-xl rounded-xl';

    return (
        <form className={formStyles} onSubmit={handleSubmit}>
            <input
                className = {inputStyles}
                type='text'
                value={search}
                placeholder='search'
                onChange={(e)=> setSearch(e.target.value)}
            />
            <button className={submitBtnStyles} type='submit'>🚀</button>
        </form>
    );
};

export default Search;