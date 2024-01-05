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
                <li> <a href="#"> <i> FB </i> </a> </li>
                <li> <a href="#"> <i> IG </i> </a> </li>
                <li> <a href="#"> <i> YT </i> </a> </li>
            </ul>
            </div>

        </header>
    )

}