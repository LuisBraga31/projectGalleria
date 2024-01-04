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

        </header>
    )

}