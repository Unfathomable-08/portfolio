const Header = (props) => {
    return (
        <div className="header fixed z-10 w-full h-[70px] bg-tertiary flex items-center">
            <div className="container flex justify-end">
                <nav>
                    <ul className="flex text-lg">
                        <li className={props.active === 'hero' ? 'active px-5' : 'px-5'}><a href="#hero">Home</a></li>
                        <li className={props.active === 'about' ? 'active px-5' : 'px-5'}><a href="#about">About</a></li>
                        <li className={props.active === 'skill' ? 'active px-5' : 'px-5'}><a href="#skill">Skills</a></li>
                        <li className={props.active === 'projects' ? 'active px-5' : 'px-5'}><a href="#project">Projects</a></li>
                        <li className={props.active === 'contact' ? 'active px-5' : 'px-5'}><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;