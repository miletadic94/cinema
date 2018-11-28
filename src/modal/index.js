import React, { Component } from 'react';
import { connect } from 'react-redux'
import { toggleModal } from '../redux/actions/modalAction'

class Modal extends Component {

    render() {
        const { modal, toggleModal } = this.props
        const { modalActive, modalTitle, modalMessage, modalButtonText, modalButtonAction } = modal

        return (
            <div className={`${modalActive ? 'd-block' : 'd-none'} modal`}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{modalTitle}</h5>
                            <button onClick={toggleModal} type="button" className="close" aria-label="Close">
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {modalMessage}
                        </div>
                        <div className="modal-footer">
                            <button onClick={modalButtonAction} type="button" className="btn btn-primary" >{modalButtonText}</button>
                            <button onClick={toggleModal} type="button" className="btn btn-secondary" >Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ modal }) => ({
    modal,
})

const mapDispatchToProps = {
    toggleModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal)