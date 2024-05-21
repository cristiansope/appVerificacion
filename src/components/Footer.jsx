import { FaCamera } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer>
            <div className="fotos">
                <div className="fotos-tomadas"></div>
                <FaCamera className="camera-icon" />
            </div>
            <div className="buttons">
                <button>GENERAR PDF</button>
                <button id="btnExcel">AÑADIR EXCELL</button>
            </div>
        </footer>
    );
};

export default Footer;