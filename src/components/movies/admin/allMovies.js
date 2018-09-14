import React from 'react'
import movies from '../moviesList';
import Pagination from '../../common/pagination'
import Loader from '../../common/loader'

class AllMovies extends React.Component {

    render() {
        return (
            <div className="container">
                <a href="/admin/movie/new" className="btn btn-border">new movie</a>
                <Pagination />
                <div className="table-responsive col-xs-6">
                    <table className="table table-hover">
                        <thead>
                            <tr className="table">
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Genre</th>
                                <th scope="col">Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                movies.map(movie =>
                                    <tr className="table" key={movie.id}>
                                        <th scope="row">{movie.id}</th>
                                        <td>{movie.name}</td>
                                        <td>{movie.genre}</td>
                                        <td>{movie["distribution year"]}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            
        )
    }
}

export default AllMovies