import React, { useMemo } from 'react';
import { Pagination as PaginationMU } from '@material-ui/lab';

const Pagination = ({ setCurrentPage, totalCount, pageSize }) => {
	const [page, setPage] = React.useState(1);
	const pagesCount = useMemo(() => Math.ceil(totalCount / pageSize), [totalCount, pageSize]);

	const onPageChange = (e, page) => {
		setPage(page);
		setCurrentPage(page);
	};

	return (
		<PaginationMU
			page={page}
			count={pagesCount}
			onChange={onPageChange}
		/>
	);
};

export default Pagination;