import React from 'react'
import PropTypes from 'prop-types'


class Partida extends React.Component{


    render() {
        return(
            <div>
                <h2>{this.props.estadio}</h2>
                <div>
                    <span>{this.props.data}</span>
                    <span>-</span>
                    <span>{this.props.horario}</span>
                </div>
            </div>
        );
    }
}

export default Partida

Partida.propTypes = {
    estadio: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    horario: PropTypes.string.isRequired,
}

Partida.defaultProps = {
    estadio: 'Arena da Baixada',
    data: '01/01/01',
    horario: '21hrs'
}