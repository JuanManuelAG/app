import './myApp.css';
import { IndexMyApp } from './componentes/myApp-index';

function App() {
  return (
    <>
    < IndexMyApp 
    nameProduct = "Zapatilla Nike Air Max Excee"

    description = "Inspiradas en las Nike Air Max 90, las Nike Air Max Excee rinden homenaje a un clásico con un nuevo enfoque. Las líneas alargadas y las proporciones distorsionadas de la parte superior llevan el look de los 90 que tanto te gusta a un espacio nuevo y moderno."

    priceId = "$60.000" 
    
    skuId = "001" />
    </>
  );
}

export default App;
import './myApp.css';

function App() {
  return (
    <>
    <div className='boxImg'>
      <div className='boxImgPrincipal'>
         <img src="https://i.imgur.com/bEwOz8m.jpg" alt='zapatillas-1'/>
      </div>
      
      <div className='boxImgSmall'>
        <img className='imgSecundario' src="https://i.imgur.com/WMGJZtG.jpg"/>
        <img className='imgSecundario' src="https://i.imgur.com/KrMRT73.jpg"/>
        <img className='imgSecundario' src="https://i.imgur.com/N3Gy14r.jpg"/>
        <img className='imgSecundario' src="https://i.imgur.com/kSagmvW.jpg"/>
      </div>
    </div>
    
    <div className='boxInfo'>
      <h1>Zapatilla Nike Air Max Excee</h1>
      <p>Inspiradas en las Nike Air Max 90, las Nike Air Max Excee rinden homenaje a un clásico con un nuevo enfoque. Las líneas alargadas y las proporciones distorsionadas de la parte superior llevan el look de los 90 que tanto te gusta a un espacio nuevo y moderno.</p>
      <div className='boxPrice'>
        <span className='price'>$200.000</span>
        <div className='stock'>
          <span>Cantidad: </span>
          <select id='btnUnidad'>
            <option>1 Unidad</option>
            <option>2 Unidades</option>
            <option>3 Unidades</option>
            <option>4 Unidades</option>
            <option>Mas de 5 unidades</option>
          </select>
          <span id='skuId'> SKU:001
          </span>
        </div>
        <button type="button">Comprar</button>
      </div>
    </div>

    </>
  );
}

export default App;
