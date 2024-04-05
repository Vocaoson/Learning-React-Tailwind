import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
const Nav = () => {
    return (
        <header className='padding-x py-8 absolute w-full z-10'>
            <nav className="flex justify-between max-container">
                <a href="/">
                    <img src={headerLogo} alt="logo" width={130} height={29} />
                </a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {
                        navLinks.map((item) => (
                            <li key={item.label}>
                                <a href={item.href} className='font-montserrat leading-normal text-lg'>{item.label}</a>
                            </li>
                        ))
                    }
                </ul>
                <div>
                    <img src={hamburger} alt="Hamburger" width={25} height={25} className="max-lg:block hidden" />
                </div>
            </nav>
        </header>
    )
}

export default Nav