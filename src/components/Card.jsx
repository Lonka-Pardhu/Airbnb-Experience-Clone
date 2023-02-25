import Star from '../images/star.png'
export default function Card(props) {

    let badgeText
    if (props.data.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.data.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <>
            <div className='Card'>

                <img src={props.data.coverImg} alt="poster" className='poster-card-img' />
                {badgeText && <div className="sold-out">
                    <p>{badgeText}</p>
                </div>}

                <div className="poster-stats">
                    <img src={Star} alt="starpng" className='star-png' />
                    <span> {props.data.stats.rating} </span>
                    <span className='grey-font'>({props.data.stats.reviewCount}) • </span>
                    <span className='grey-font'>{props.data.location}</span>
                    <p className='poster-title'>{props.data.title}</p>
                    <p className='poster-price'> <b>From ${props.data.price}</b> / <span>person</span></p>
                </div>

            </div>

        </>
    )
}