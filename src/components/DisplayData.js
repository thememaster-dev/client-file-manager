import React from 'react'
import { connect } from 'react-redux'

const DisplayData = (props) => {
    const { data } = props;
    const { data: formData } = data;

    return (
        <div>
            {formData?.map((item, i) => <div key={i}>
                <img src={item.imgState} alt="" /> <br />
                <span>{item.fnameVal}</span> <br />
                <span>{item.lnameVal}</span>
                <button type="button" onClick={(e) => console.log(i)}>Delete</button>
            </div>)}
        </div>
    )
}

const mapStateToProps = data => {
    return {
        data
    }
}

export default connect(mapStateToProps, null)(DisplayData)
