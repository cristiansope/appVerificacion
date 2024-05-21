import UserIcon from '../icons/UserIcon';
import PlusIcon from '../icons/PlusIcon';
import producto from '../assets/producto.jpg';

export const Form = () => {
  return (
    <section className="formulario">
      <div className="first-section">
        <form>
          <label htmlFor="numCuadro">Nº Cuadro</label>
          <input type="text" size={30} />
          <br />
          <label htmlFor="cliente">Cliente</label>
          <select name="clientes">
            <option value="prueba">prueba</option>
            <option value="prueba">prueba</option>
            <option value="prueba">prueba</option>
          </select>
          <br />
          <label htmlFor="modelo">Modelo</label>
          <select name="modelos">
            <option value="prueba">prueba</option>
            <option value="prueba">prueba</option>
            <option value="prueba">prueba</option>
          </select>
        </form>
        <div className="operario-foto-producto">
          <div className="operario">
            <span>Operario</span>
            <div className="icono-operario">   
              <UserIcon />       
            </div>
          </div>
          <div className="foto-producto">
            <img src={producto} alt="Producto" />
          </div>
        </div>
      </div>
      <div className="campos-clientes">
        <div className="numSeries-clientes">
          <div className="numSerieIntGeneral">
            <label htmlFor="numSerieIntGeneral">NºSerie Interruptor General</label>
            <input type="text" size={20} className='inputs-clientes' />
          </div>
          <div className="numSerieCliente1">
            <label htmlFor="numSerieCliente1">Nº Cliente 1</label>
            <input type="text" size={20} className='inputs-clientes' />
          </div>
        </div>
        <div className="cliente-adicional">
          <PlusIcon />
          <span>Añadir cliente adicional</span>
        </div>
      </div>
    </section>
  );
};

export default Form;