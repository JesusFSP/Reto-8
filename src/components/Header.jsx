import { useRef } from 'react';
const Header = ({ routeLinks, socialNetworks }) => {
    const offCanvas = useRef();
    const openMenu = () => {
        offCanvas.current.classList.add('off-canvas--show')
    }
    const closeMenu = () => {
        offCanvas.current.classList.remove('off-canvas--show')
    }

    return (
        <header className="header" >
            <nav className="nav">
                <div className="container flexbox flexbox--header" id="skills">
                    <a href="#hero">
                        <img src='https://i.postimg.cc/cJDFTJRy/logo-vet.jpg' alt="" width={64} height={64} className="img img--logo" />
                    </a>
                    <div ref={offCanvas}
                        className='off-canvas 
                    off-canvas--right 
                    off-canvas--mobile'>
                        <div className="off-canvas__child">
                            <button className="off-canvas__close icon" onClick={closeMenu}>
                                <i className="bi bi-x-circle"></i>
                            </button>
                            <ul className="list flexbox flexbox--center flexbox--responsive h-100 gap-4xs">
                                {routeLinks.map((element, index) => {
                                    const { href, title, content } = element;
                                    return (
                                        <li key={index}>
                                            <a href={href} title={title} className="link">{content}</a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <ul className="list d-flex a-items-center gap-4xs">
                        {socialNetworks.map((element, index) => {
                            const { href, title, content } = element;
                            return (
                                <li key={index}>
                                    <a
                                        href={href}
                                        title={title}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link link--lg"
                                        dangerouslySetInnerHTML={{ __html: content }}
                                    />
                                </li>
                            );
                        })}
                        <button onClick={openMenu} className="icon md:d-none">
                            <i className="bi bi-list"></i>
                        </button>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;