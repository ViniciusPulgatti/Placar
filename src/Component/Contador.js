import React from 'react';

import '../css/contador.css';

class Contador extends React.Component {

    
constructor() {
    super();
    
    this.state = {
        contador: 0,
        mensagem: 'valor atual',
    }
  }
  
  decrementar() {

      if (this.state.contador > 0) {
        this.setState({
            contador: this.state.contador - 1,
        })
    }
    else{
        this.setState({
            mensagem: 'impossivel negativar',
        })
    }
  }

  
  incrementar() {
    this.setState({
        contador: this.state.contador + 1,
    });
}

    render(){
        return(
            <div className='contador'>
                <h1 className='text'>Contador :</h1>
                <h2 className='numbers'>{this.state.contador}</h2>
                <h3 className='numbers'>{this.state.mensagem}</h3>
                <div >
                    <button  onClick={this.decrementar.bind(this)} className='buttons'>-</button>
                    <button onClick={this.incrementar.bind(this)} className='buttons'>+</button>
                </div>
            </div>
        )
    }


}

export default Contador; 