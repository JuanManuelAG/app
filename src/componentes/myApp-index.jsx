export function IndexMyApp({nameProduct, description, skuId, priceId}) {
  return (
    <>
    <div className='boxImg'>
      <div className='boxImgPrincipal'>
         <img src="https://i.imgur.com/bEwOz8m.jpg" alt='zapatillas-2'/>
      </div>
      
      <div className='boxImgSmall'>
        <img className='imgSecundario' src="https://i.imgur.com/WMGJZtG.jpg" alt="zapatilla-nike-derecha"/>
        <img className='imgSecundario' src="https://i.imgur.com/KrMRT73.jpg" alt="zapatilla-nike-izquierda"/>
        <img className='imgSecundario' src="https://i.imgur.com/N3Gy14r.jpg" alt="zapatilla-nike-frente"/>
        <img className='imgSecundario' src="https://i.imgur.com/kSagmvW.jpg" alt="zapatilla-nike-arribaAbajo"/>
      </div>
    </div>
    
    <div className='boxInfo'>
      <h1>{nameProduct}</h1>
      <p>{description}</p>
      <div className='boxPrice'>
        <span className='price'>{priceId}</span>
        <div className='stock'>
          <span>Cantidad: </span>
          <select id='btnUnidad'>
            <option>1 Unidad</option>
            <option>2 Unidades</option>
            <option>3 Unidades</option>
            <option>4 Unidades</option>
            <option>Mas de 5 unidades</option>
          </select>
          <span id='skuId'> SKU:{skuId}
          </span>
        </div>
        <button type="button">Comprar</button>
      </div>
    </div>

    </>
  );
}
