import React from 'react';

export default props => (
    <nav className="navbar navbar-inverse bg-inverse" style={{ borderRadius: 0 }}>
        <div className="navbar-header">
            <a href="#" className="navbar-brand">
                MyTasks
            </a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
                <li><a href="#/todos">Tarefas</a></li>
                <li><a href="#/about">Sobre</a></li>
            </ul>
        </div>
    </nav>
);