import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header className='border-solid border-2 border-black w-full text-center bg-gray-400 rounded-lg'>
                Header
            </header>
        );
    }
}

export default Header;