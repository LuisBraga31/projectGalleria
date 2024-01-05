import { FaYoutube, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import '../../styles/components/header.sass';

export default function Header() {

    return (
        <header className="header">
            <a href="#" className="header-brand"> Galleria </a>
            
            <nav className="header-navbar">
                <ul>
                    <li> <a href="#" className="active"> Home </a> </li>
                    <li> <a href="#"> Fotos </a> </li>
                    <li> <a href="#"> Serviços </a> </li>
                    <li> <a href="#"> Sobre </a> </li>
                    <li> <a href="#"> Contato </a> </li>
                </ul>
            </nav>

            <div className="header-social-media">
            <ul>
                <li> <a href="#"> <FaFacebook size={20}/> </a> </li>
                <li> <a href="#"> <FaInstagram size={20}/> </a> </li>
                <li> <a href="#"> <FaYoutube size={20}/> </a> </li>
                <li> <a href="#"> <FaTwitter size={20}/> </a> </li>
            </ul>
            </div>

        </header>
    )

}