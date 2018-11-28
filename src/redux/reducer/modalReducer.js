import * as actions from '../actions/modalAction';

const initialState = {
    modalActive: false,
    modalTitle: '',
    modalMessage: '',
    modalButtonText: '',
    modalButtonAction: '',
}

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.TOGGLE_MODAL:
            return {...action.modal, modalActive: !state.modalActive};

        default:
            return state;
    }
}

export default modalReducer;