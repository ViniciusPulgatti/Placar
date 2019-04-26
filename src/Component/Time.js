import React from 'react'
import PropTypes from 'prop-types'

import  '../css/imagens.css'

import BotaoGol from './BotaoGol'

class Time extends React.Component {
    

    render() {
        return(
            <div>
                <img  className='logo' src={this.props.imagem}></img>
                <h1>{this.props.nome}</h1>
                <h2>{this.props.gols}</h2>
                <BotaoGol  marcarGol={this.props.marcarGol}/>
            </div>

        );
    }
}

export default Time;

Time.propTypes = {
    nome: PropTypes.string.isRequired,
    gols: PropTypes.number.isRequired,
    marcarGol: PropTypes.func.isRequired,
}

Time.defaultProps = {
    nome: 'Internacional',
    gols: 5,
}