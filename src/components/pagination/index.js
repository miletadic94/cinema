import React from 'react';

class Pagination extends React.Component {

    constructPagination = (c, m) => {
        var current = c,
            last = m,
            delta = 2,
            left = current - delta,
            right = current + delta + 1,
            range = [],
            rangeWithDots = [],
            l;

        for (let i = 1; i <= last; i++) {
            if (i == 1 || i == last || i >= left && i < right) {
                range.push(i);
            }
        }

        for (let i of range) {
            if (l) {
                if (i - l === 2) {
                    rangeWithDots.push(l + 1);
                } else if (i - l !== 1) {
                    rangeWithDots.push('...');
                }
            }
            rangeWithDots.push(i);
            l = i;
        }

        return rangeWithDots;
    }

    render() {
        const { currentPage, totalPages } = this.props
        return (
            <ul className="pagination">
                <li className={`page-item ${currentPage === 0 ? 'disabled': ''}`}>
                    <span className="page-link" href="#" tabIndex="-1">
                        <i class="fas fa-arrow-left"></i>
                    </span>
                </li>
                {this.constructPagination(currentPage, totalPages).map((page, index) => {
                    return (
                        <li className="page-item">
                            <span className={`page-link ${currentPage === index ? 'active' : ''}`} href="#">
                                {page}
                            </span>
                        </li>
                    )
                })}
                <li className={`page-item ${currentPage === totalPages-1 ? 'disabled': ''}`}>
                    <span className="page-link" href="#">
                        <i class="fas fa-arrow-right"></i>
                    </span>
                </li>
            </ul>
        )
    }
}

export default Pagination;