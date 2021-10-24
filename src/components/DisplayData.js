import React from 'react'
import { connect } from 'react-redux'
import { newState } from '../state/ducks/dispatch';

const DisplayData = (props) => {
    const { data, onDelete } = props;
    const { data: formData } = data;

    const handleDelete = (id) => {
        onDelete(id)
    }

    return (
        <div>
            {formData.length !== 0 ? formData?.map((item, i) => <div key={i}>
                <img src={item.imgState} alt="" style={ {height: '100px', width: '100px', borderRadius: '100%'}}/> <br />
                {/* <video controls>
                    <source src={item.videoState} />
                    Your browser does not support the video tag.
                </video>
                <audio controls >
                    <source src={item.audioState} />
                    Your browser does not support the video tag.
                </audio> */}

                <span>{item.fnameVal}</span> <br />
                <span>{item.lnameVal}</span>
                <button type="button" onClick={() => handleDelete(item.id)}>Delete</button>
            </div>) : <div>nothing to delete</div>}
        </div>
    )
}

const mapStateToProps = data => {
    return {
        data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDelete: (id) => dispatch(newState(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayData)
