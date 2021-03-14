//import React from 'react' //don't need
import PropTypes from 'prop-types'

const Button = ({ color, text, onCLick }) => {
    return (
    <button 
        onClick={onCLick}
        style={{backgroundColor: color}}
        className='btn'
    >
        {text}
    </button>
    )
}

Button.defaultProps ={
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string, //capitalized PropTypes
    color: PropTypes.string, //capitalized PropTypes
    onClick: PropTypes.func, //checks the onClick for function type
}

export default Button