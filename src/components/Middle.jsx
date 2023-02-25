import GridPhoto from '../images/photo-grid.png'

export default function Middle() {
    return (
        <>
            <main className='Middle'>
                <img src={GridPhoto} alt="gridphoto" className='photo-grid' />
                <div className='middle-data'>
                    <h1>Online Experiences</h1>
                    <p>Join unique interactive activities led by
                        one-of-a-kind hosts—all without leaving home.</p>
                </div>
            </main>
        </>
    )
} 