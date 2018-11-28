import React from 'react';
import classNames from 'classnames';

class DeleteModal extends React.Component {

    render() {
        return (
            <div className="modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="close">
                                <span aria-hidden="true">nesto</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Save changes</button>
                            <button type="button" className="btn btn-secondary">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )}
}

export default DeleteModal;