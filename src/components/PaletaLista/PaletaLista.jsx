import React, { useState } from "react";
import PaletaListaItem from "../PaletaListaItem/PaletaListaItem.jsx";
import "./PaletaLista.css";
import { paletas } from "../../mocks/paletas.js";

function PaletaLista() {
  const [paletaSelecionada, setPaletaSelecionada] = useState({});

  const adicionarItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) + 1,
    };
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
  };

  const removerItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) - 1,
    };
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
  };

  
  return (
    <div className="PaletaLista">
      {paletas.map((paleta, index) => (
        <PaletaListaItem 
        key={`PaletaListaItem-${index}`} 
        paleta={paleta}
        quantidadeSelecionada={paletaSelecionada[index]}
        index={index}
        onRemove={index => removerItem(index)}
        onAdd={index => adicionarItem(index)}/>
      ))}
    </div>
  );
}

export default PaletaLista;
