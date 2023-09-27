/* eslint-disable no-unused-vars */
import React, { useState } from 'react';


const Menu = () => {  

  const [ pedido, setPedido ] = useState({
      nombre: "",
      telefono: "",
      datosDeEnvio: "",
      tipoDePan: "",
      papasfritas: false,
      gaseosa: false,
      condimentos: false,
      medallon: "",
      cebolla: false,
      lechuga: false,
      queso: false
    }); 

    

  const handlePedido = (e) => {
    
    if( e.target.name === "nombre" ||
        e.target.name === "telefono" ||
        e.target.name === "datosDeEnvio" ||
        e.target.name === "tipoDePan" ||
        e.target.name === "medallon") {
      
      const { name, value } = e.target;

      setPedido({
      ...pedido,
      [name]: value
    })
    } else {
      
        const { name, checked } = e.target;
      
        setPedido({
          ...pedido,
          [name]: checked
        })
      }   
    
      console.log(pedido)
    }


  return (
    <div className='container'>
      <section>
        <form name="comanda"
        >
          <div className="col-6 col-sx-12">
            <h2>Datos del pedido:</h2>
            <div className="col col-sx-12">
              <input
                onChange={handlePedido}             
                type="text"
                name="nombre"
                className="form-control"
                placeholder="Nombre..."
                value={pedido.nombre}
              ></input>
            </div>
            <div className="col col-sx-12">
              <input
                onChange={handlePedido} 
                type="text"
                name='telefono'
                className="form-control"
                placeholder="Teléfono"
               value={pedido.telefono}
              ></input>
            </div>
            <div className="col col-sx-12">
              <input
                onChange={handlePedido} 
                type="text"
                name='datosDeEnvio'
                className="form-control"
                placeholder="Datos de envío"
                value={pedido.datosDeEnvio}
              ></input>
            </div>
          </div>
          <div>
            <section>
              <h2>Detalle del pedido:</h2>
              <div className="row">
                <div className="col-12">
                <div className='row'>
                <h4>Medallón:</h4>
                  <div className="col-4">
                  
                    <label>Tipo de Pan:</label>
                    <select className="form-control"
                    name='tipoDePan'
                    onChange={handlePedido} 
                    value={pedido.tipoDePan}
                    >
                      <option >Elegí tu pan...</option>
                      <option>Blanco</option>
                      <option>Salvado</option>
                      <option>Sin TACC</option>
                    </select>
                    <h4>Extras:</h4>
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox"  name="papasfritas"
                    onChange={handlePedido}  
                    value={pedido.papasfritas}
                    ></input>
                    <label className="form-check-label" htmlFor="papasfritas">Papas Fritas</label>
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="gaseosa"
                    onChange={handlePedido}  
                    value={pedido.gaseosa}
                    ></input>
                    <label className="form-check-label" htmlFor="gaseosa">Gaseosa</label>
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="condimentos" 
                    onChange={handlePedido} 
                    value={pedido.condimentos}
                    ></input>
                    <label className="form-check-label" htmlFor="condimentos">Condimentos</label>
                    </div>

                    
                  </div>
                  <div className="col-4">
                    <label>Hamburguesa:</label>
                    <select className="form-control" name='medallon' 
                    onChange={handlePedido} 
                    value={pedido.medallon}
                    >
                      <option defaultValue>Elegí tu Hamburguesa...</option>
                      <option>Carne vacuna</option>
                      <option>Pollo</option>
                      <option>Lentejas y Cebolla</option>
                      <option>Soja</option>
                      <option>Garbanzos y Zanahoria</option>
                    </select>
                    <h4>Agregados:</h4>
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox"  name="cebolla" 
                    onChange={handlePedido} 
                    //value={pedido.cebolla}
                    ></input>
                    <label className="form-check-label" htmlFor="cebolla">Cebolla</label>
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="lechuga" 
                    onChange={handlePedido} 
                    //value={pedido.lechuga}
                    ></input>
                    <label className="form-check-label" htmlFor="lechuga">Lechuga</label>
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="queso" 
                    
                    onChange={handlePedido} 
                    //value={pedido.queso}
                    ></input>
                    <label className="form-check-label" htmlFor="queso">Queso</label>
                    </div>
                  </div>
                
                  <div className="col-4 logo-container">
                    <img src="pumperLogo.png" className='center-block'></img>
                  </div>
                </div>
                </div>
              </div>
            </section>
          </div>
        </form>
      </section>
        <h3>Comanda en tiempo real:</h3>
        <p>Enviar a {pedido.datosDeEnvio}, a nombre de {pedido.nombre}.</p> 
        <p>Teléfono: {pedido.telefono}</p>
        <ul>
          <li>Tipo de Pan: {pedido.tipoDePan}</li>
          <li>Medallón de {pedido.medallon}</li>
          <li>Papas: {pedido.papasfritas ? "sí" : "no"}</li>
          <li>Gaseosa: {pedido.gaseosa ? "sí" : "no"}</li>
          <li>Condimentos: {pedido.condimentos ? "sí" : "no"} </li>
          <li>Cebolla: {pedido.cebolla ? "sí" : "no"}</li>
          <li>Lechuga: {pedido.lechuga ? "sí" : "no"} </li>
          <li>Queso: {pedido.queso ? "sí" : "no"} </li>
        </ul>
      <section>

      </section>
    </div>
  );
}

export default Menu
