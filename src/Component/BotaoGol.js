import React from 'react';

import '../css/Button.css'

class BotaoGol extends React.Component {

    handleClick(event) {
        event.preventDefault();
        this.props.marcarGol();
    }

    render() {
        return(
            <button className="btn" onClick={this.handleClick.bind(this)}>Gol!</button>
        );
    }

}

export default BotaoGol