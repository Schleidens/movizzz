import { useEffect, useMemo, useState } from "react";

const perPage = 25;

export function usePagination(movies) {
    const [page, setPage] = useState(0);
    useEffect(() => {
    setPage(0);
    }, [movies]);

    
    const pageMovies = movies.slice(page * perPage, (page + 1) * perPage);

    const paginations = useMemo(() => {
        const min = 0;
        const max = Math.round(movies.length / perPage);
        const paginationItems = [];
        
        for (let i = min; i < max; i += 1) {
            const className = i === page ? 'page-item active' : 'page-item';
            const index = i;
            paginationItems.push(<li key={index} className={className} onClick={() => setPage(index)}><a className="page-link" href="#">{i + 1}</a></li>)
        }

        return paginationItems;
    }, [movies, page]);

    return [pageMovies, paginations];
}