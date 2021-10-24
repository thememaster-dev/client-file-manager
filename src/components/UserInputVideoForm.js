import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { formData } from '../state/ducks/dispatch';

const UserInputVideoForm = (props) => {
    const { onSubmit, data } = props;
    const [videoState, setVideoState] = useState(null);
    const videoRef = useRef();
    const videoSourceRef = useRef();

    const readVideo = e => {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();

            reader.onload = function (event) {
                videoSourceRef.current.src = event.target.result;
                setVideoState(event.target.result);
                videoRef.current.load();
            }
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const fnameVal = e.target.fname.value;
        const lnameVal = e.target.lname.value;
        onSubmit({ videoState, fnameVal, lnameVal });
    }

    return (
        <form onSubmit={handleSubmit}>
            <video controls ref={videoRef}>
                <source ref={videoSourceRef} />
                Your browser does not support the video tag.
            </video>
            <label htmlFor="file">First name:</label><br />
            <input onChange={readVideo} type="file" id="file" name="file" accept="video/*" /><br />
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

export default connect(mapStateToProps, mapDispatchToProps)(UserInputVideoForm)