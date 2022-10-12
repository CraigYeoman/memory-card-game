const Card = ({cards}) => {
    return cards.map((card) => (
        <div 
          key={card.id}
          id={card.id}
          className="card--container"
        >
          <img src={card.picture} className="card--pic" id={card.id}/>
          <div className="card--name">{card.name}</div>
        </div>
    )
)
}

export default Card