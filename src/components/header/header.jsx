import './header.css'

function header(props) {
return (
    <>
        <div className='header'>
            {props.texts.map((text, index) => (
                    <p className='itemHead' key={index}>{text}</p>
            ))}
        </div>
    </>
)
}

export default header