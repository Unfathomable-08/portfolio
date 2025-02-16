const Header = (props) => {
    return (
        <div className="header fixed z-10 w-full h-[70px] bg-tertiary flex items-center">
            <div className="container flex justify-between">
                <h1 className="text-2xl pb-1 px-8 md:px-20 font-medium">Portfolio.</h1>
                <nav className="px-5 invisible md:visible">
                    <ul className="flex text-lg">
                        <li className={props.active === 'hero' ? 'active px-5' : 'px-5'}><a href="#home">Home</a></li>
                        <li className={props.active === 'about' ? 'active px-5' : 'px-5'}><a href="#about">About</a></li>
                        <li className={props.active === 'skill' ? 'active px-5' : 'px-5'}><a href="#skill">Skills</a></li>
                        <li className={props.active === 'projects' ? 'active px-5' : 'px-5'}><a href="#projects">Projects</a></li>
                        <li className={props.active === 'contact' ? 'active px-5' : 'px-5'}><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;