import './header.css'
import Button from '../../assets/Button.svg'

function header(props) {
return (
    <>
        <div className='header'>
            {props.texts.map((text, index) => (
                    <p className='itemHead' key={index}>{text}</p>
            ))}
            <img src={Button} alt='Button' className='button'/>
        </div>
    </>
)
}

export default header