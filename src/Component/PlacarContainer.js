import React from 'react';
import PropTypes from 'prop-types'
import Time from './Time';
import Partida from './Partida';

import '../css/container.css'


class PlacarContainer extends React.Component{

    constructor(){
        super();
        this.state = {
            gols_casa: 0,
            gols_visitante:0,
        }
    }

    marcarGolCasa(){
        this.setState({
            gols_casa: this.state.gols_casa + 1,
        })
    }

    marcarGolVisitante(){
        this.setState({
            gols_visitante: this.state.gols_visitante + 1,
        })
    }


    render() {

        const { partida, casa,visitante } = this.props;
        
          
        return(
            <div  >
                <div className='Container'>    
                    <div  style={{float:'left', marginRight:'100px'}}>
                    <h3>Casa</h3>
                        <Time  imagem={casa.imagem}
                            nome={casa.nome} 
                            gols={this.state.gols_casa}
                            marcarGol={this.marcarGolCasa.bind(this)}/>
                    </div>
                    <div  style={{float:'left', marginRight:'100px'}}>
                        <Partida {...partida}/>
                    </div>
                    <div  style={{float:'left', marginRight:'100px'}} >
                        <h3>Visitante</h3>
                        <Time imagem={visitante.imagem}
                            nome={ visitante.nome} 
                            gols={this.state.gols_visitante}
                            marcarGol={this.marcarGolVisitante.bind(this)}/>
                    </div>
                
                    <div style={{clear:'both'}}></div>
                </div>
            </div>
        );
    }

}


export default PlacarContainer;

PlacarContainer.propTypes = {
    partida: PropTypes.object.isRequired,
    casa: PropTypes.object.isRequired,
    visitante: PropTypes.object.isRequired,

}
