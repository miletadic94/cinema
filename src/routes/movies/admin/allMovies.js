import React from 'react';
import { connect } from 'react-redux'
import movies from '../moviesList';
import { toggleModal } from '../../../redux/actions/modalAction'
import Pagination from '../../../components/pagination';

class AllMovies extends React.Component {

    goToMovie = (id) => {
        const { history } = this.props
        history.push(`/admin/movies/${id}`)
    }

    goToDelete = (id, e) => {
        e.stopPropagation()
        const { toggleModal } = this.props
        toggleModal({
            modalTitle: 'Delete Movie',
            modalMessage: `Are you sure you want to delete movie ${id}`,
            modalButtonText: 'Delete',
            modalButtonAction: () => { console.log('movie deleted', id), toggleModal() },
        })
    }

    render() {
        return (
            <div className="container">
                <a href="/admin/movies/new" className="btn btn-outline-dark btn-md">new movie</a>
                <div className="d-inline-flex float-right">
                    <Pagination 
                        currentPage={6}
                        totalPages={7}
                    />
                </div>

                <div className="table-responsive col-xs-6">
                    <table className="table table-hover">
                        <thead>
                            <tr className="table">
                                <th scope="col">#</th>
                                <th scope="col">Picture</th>
                                <th scope="col">Name</th>
                                <th scope="col">Genre</th>
                                <th scope="col">Year</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                movies.map(movie =>
                                    <tr className="table" key={movie.id} onClick={this.goToMovie.bind(this, movie.id)}>
                                        <th scope="row">{movie.id}</th>
                                        <td><img alt="" height="140" width="100" src={movie.picture} /></td>
                                        <td>
                                            {movie.name}
                                            <hr />
                                            {movie.actor}
                                        </td>
                                        <td>{movie.genre}</td>
                                        <td>{movie["distribution year"]}</td>
                                        <td><button onClick={this.goToDelete.bind(this, movie.id)} className="btn btn-danger btn-sm">delete</button></td>
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

const mapStateToProps = () => ({
})

const mapDispatchToProps = {
    toggleModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(AllMovies)