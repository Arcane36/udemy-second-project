import "./Concept.scss";
import Image from "../Image/Image";

const Concept = ({ title, image, description }) => {
    return (
        <div className='concept__item'>
            <Image src={image} alt={title} className='concept__img' />
            <h2 className='concept__headline'>{title}</h2>
            <p className='concept__text'>{description}</p>
        </div>
    );
};

export default Concept;
