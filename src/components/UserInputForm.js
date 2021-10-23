import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { formData } from '../state/ducks/dispatch';

const UserInputForm = (props) => {
    const { onSubmit, data } = props;
    const [imgState, setImageState] = useState('');
    const videoRef = useRef();
    const videoSourceRef = useRef();

    const readVideo = e => {
        console.log(e.target.files);
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();

            reader.onload = function (event) {
                console.log('loaded', event);
                videoSourceRef.current.src = event.target.result;
                videoRef.current.load();
            }
            reader.readAsDataURL(e.target.files[0]);
        }

    }

    const previewImage = e => {
        setImageState(URL.createObjectURL(e.target.files[0]))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const fnameVal = e.target.fname.value;
        const lnameVal = e.target.lname.value;
        onSubmit({ imgState, fnameVal, lnameVal });
    }

    useEffect(() => {
        console.log(videoRef);
        console.log(videoSourceRef.current.src);
    }, [videoRef, videoSourceRef])

    return (
        <form onSubmit={handleSubmit}>
            <img src={imgState} alt="" />
            <video controls ref={videoRef}>
                <source ref={videoSourceRef} src/>
                Your browser does not support the video tag.
            </video>
            <label htmlFor="file">First name:</label><br />
            <input onChange={readVideo} type="file" id="file" name="file" accept="audio/*,video/*,image/*" /><br />
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
