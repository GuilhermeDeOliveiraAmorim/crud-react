import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <footer className='absolute bottom-0 border-solid border-2 border-black w-full text-center bg-gray-400 rounded-lg'>
                Footer
            </footer>
        );
    }
}

export default Footer;