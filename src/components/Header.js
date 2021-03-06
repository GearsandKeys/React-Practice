//Just typed rafce and the snippet filled this in
//import React from 'react' //this was here, but isn't needed anymore
import PropTypes from 'prop-types'
import Button from './Button' //import button component


const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
            color= {showAdd ? 'red' : 'green'}
            text= {showAdd ? 'Close' : 'Add' }
            onCLick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker",
}



Header.propTypes = {
    title: PropTypes.string.isRequired, //checks the type of title to make sure it's a string
}

//how to style by create a variable
/*
// CSS in JS
const headingStyle = {
    color: 'red',
    backgroundColor: 'black',
    paddingLeft: '60px'
}
*/

export default Header

