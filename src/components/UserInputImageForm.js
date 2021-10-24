import React, { useState } from 'react';
import { connect } from 'react-redux';
import { formData } from '../state/ducks/dispatch';

const UserInputForm = (props) => {
    const { onSubmit, data } = props;
    const [imgState, setImageState] = useState('');

    const previewImage = e => {
        setImageState(URL.createObjectURL(e.target.files[0]))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const fnameVal = e.target.fname.value;
        const lnameVal = e.target.lname.value;
        onSubmit({ imgState, fnameVal, lnameVal });
    }

    return (
        <form onSubmit={handleSubmit}>
            <img src={imgState} alt="" style={ {height: '100px', width: '100px', borderRadius: '100%'}}/>
            <label htmlFor="file">First name:</label><br />
            <input onChange={previewImage} type="file" id="file" name="file" accept="image/*" /><br />
            <label htmlFor="fname">First name:</label><br />
            <input onChange={(e) => console.log(e.target.value)} type="text" id="fname" name="fname" value={data.fname} /><br />
            <label htmlFor="lname">Last name:</label><br />
            <input onChange={(e) => console.log(e.target.value)} type="text" id="lname" name="lname" value={data.lname} /><br />
            <input type="submit" />
        </form>
    )
}

const mapStateToProps = state => {
    return {
        data: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (state) => dispatch(formData(state))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInputForm)
