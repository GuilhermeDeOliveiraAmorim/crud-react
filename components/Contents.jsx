import React, { Component } from 'react';
import Card from './card/Card';

const movies = [
    
        "Sou um título 1",
        "Sou um título 2",
        "Sou um título 3",
        "Sou um título 4"
    
];

class Contents extends Component {
    render() {
        return (<div className='flex gap-4'>
            {movies.map((title) => <Card title={title} />)}
        </div>
        );
    }
}

export default Contents;