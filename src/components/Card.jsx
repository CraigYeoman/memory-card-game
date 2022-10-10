const Card = ({cards}) => {
    return cards.map((card) => (
        <div 
          key={card.id}
          id={card.id}
          className="card--container"
        >
          <div className="card--pic"></div>
          <div className="card--name">{card.name}</div>
        </div>
    )
)
}

export default Card