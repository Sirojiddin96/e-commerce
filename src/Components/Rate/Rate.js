import React from "react";
import PropTypes from "prop-types";
const Rate = ({count, rating, color, onRating}) =>{
    return(
        <div>

        </div>
    )
}

Rate.propTypes = {
    count: PropTypes.number,
    rating: PropTypes.number,
    onChange: PropTypes.func,
    color: {
        filled: PropTypes.string,
        unfilled: PropTypes.string
    }
}
Rate.defaultProps = {
    count: 5,
    rating: 0,
    color: {
        filled: "#f5eb3b",
        unfilled: "#DCDCDC"
    }
}

export default Rate;