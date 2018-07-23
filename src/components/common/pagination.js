import React from 'react'

class Pagination extends React.Component {
    render(){
        return (
            <nav aria-label="pagination" className="pull-right">
                    <ul className="pagination justify-content-end">
                        <li className="page-item">
                            <span className="page-link">prev</span>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item active">
                            <span className="page-link">
                                2
                        <span className="sr-only">(current)</span>
                            </span>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
        )
    }
}

export default Pagination