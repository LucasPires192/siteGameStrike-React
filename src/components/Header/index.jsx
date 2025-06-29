import banner from '../../img/banner.png';
import './index.css';

export default function Header(){
    return(
        <div className="header">
            <img className="img-banner" alt="banner" src={banner} />
        </div>
    );
}