import '../styles/_Card.scss'

const Card = ({clase, contenido}) => {
    return (
        <div className={clase}>
            <span>
                {contenido}
            </span>
            <button>Copy</button>
        </div>
    )
}

export default Card;