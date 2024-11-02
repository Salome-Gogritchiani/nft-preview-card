import './NftCard.css';


export default function NftCard() {
  return (
    <div className='card'>
    <div className="nft-card">
      <div className="image-container">
        <img 
          src="nft-img.png" 
          alt="NFT" 
          className="nft-image"
        />
        <div className="hover-overlay">
           <img src="Eye.png" alt="" className="eye-icon"/> 
        </div>
      </div>
      <h3 className="nft-title">Equilibrium #3429</h3>
      <p className="nft-description">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className="nft-info">
        <p className="price"><span><img src="priseicon.png" alt="" /></span>0.041 ETH</p>
        <p className="time-left"><span><img src="Clock.png" alt="" /></span>3 days left</p>
      </div>
      <div className="creator-info">
        <img src="Oval.png" alt="Creator" className="creator-image" />
        <p>Creation of <span className="creator-name">Jules Wyvern</span></p>
      </div>
    </div>
    </div>
  )
}
