import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { formData } from '../state/ducks/dispatch';

const UserInputAudioForm = (props) => {
    const { onSubmit, data } = props;
    const [audioState, setAudioState] = useState(null);
    const audioRef = useRef();
    const audioSourceRef = useRef();

    const readVideo = e => {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();

            reader.onload = function (event) {
                audioSourceRef.current.src = event.target.result;
                setAudioState(event.target.result);
                audioRef.current.load();
            }
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const fnameVal = e.target.fname.value;
        const lnameVal = e.target.lname.value;
        onSubmit({ audioState, fnameVal, lnameVal });
    }

    return (
        <form onSubmit={handleSubmit}>
            <audio controls ref={audioRef}>
                <source ref={audioSourceRef} />
                Your browser does not support the video tag.
            </audio>
            <label htmlFor="file">First name:</label><br />
            <input onChange={readVideo} type="file" id="file" name="file" accept="audio/*" /><br />
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

export default connect(mapStateToProps, mapDispatchToProps)(UserInputAudioForm)