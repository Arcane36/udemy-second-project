import Image from "../Image/Image";

import "./Header.scss";

const Header = ({ image, headline, text }) => {
    return (
        <header className='header'>
            <Image src={image.src} alt={image.alt} className='header__img' />
            <h1 className='header__headline'>{headline}</h1>
            <p className='header__text'>{text}</p>
        </header>
    );
};
export default Header;
