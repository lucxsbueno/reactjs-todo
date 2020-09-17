import React from 'react';

export default props => (
    <header className="page-reader">
        <h2>{props.name} <small>{props.small}</small></h2>
    </header>
);