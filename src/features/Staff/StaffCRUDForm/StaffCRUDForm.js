import React, { Component } from 'react'
import StaffCRUDFormComponent from './StaffCRUDFormComponent';

class StaffCRUDForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            mobile: '',
            cnic: '',
            active: false,
            currentAddress: '',
            permanentAddress: '',
            cnicPicture: ''
        }
    }
    render() {
        return (
            <StaffCRUDFormComponent />
        )
    }
}
export default StaffCRUDForm;