import React, { Component } from 'react'
import { base64Converter } from '../helpers/base64Converter';

export default class FileUpload extends Component {

    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        const { input: { onChange } } = this.props
        base64Converter(e.target.files[0])
            .then(res => onChange(res))
            .catch(err =>
                alert('Something went wrong with upload picture!'))
    }

    render() {
        const { input: { value } } = this.props
        const { input, label, required, meta, } = this.props  //whatever props you send to the component from redux-form Field
        return (
            !value ?
                <div className="mb-15">
                    <label className="pl-2">{label}</label>
                    <div>
                        <input
                            className="form-control"
                            type='file'
                            accept='.jpg, .png, .jpeg'
                            onChange={this.onChange}
                        />
                    </div>
                </div>
                :
                <div className="mb-15">
                    <label className="d-flex justify-content-center">{label}</label>
                    <label className="d-flex justify-content-center" htmlFor="picture">
                        <input
                            id="picture"
                            name="picture"
                            style={{ display: 'none' }}
                            className="form-control"
                            type='file'
                            accept='.jpg, .png, .jpeg'
                            onChange={this.onChange}
                        />
                        <img
                            src={value}
                            height="160"
                            width="140" />
                    </label>
                </div>
        )
    }
}