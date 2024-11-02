import './NftCard.css';


export default function NftCard() {
  return (
    <div className='card'>
    <div className="nftcard">
      <div className="imagecontainer">
        <img 
          src="nft-img.png" 
          alt="NFT" 
          className="nftimage"
        />
        <div className="hoveroverlay">
           <img src="Eye.png" alt="" className="eyeicon"/> 
        </div>
      </div>
      <h3 className="nfttitle">Equilibrium #3429</h3>
      <p className="nftdescription">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className="nftinfo">
        <p className="price"><span><img src="priseicon.png" alt="" /></span>0.041 ETH</p>
        <p className="timeleft"><span><img src="Clock.png" alt="" /></span>3 days left</p>
      </div>
      <div className="creatorinfo">
        <img src="Oval.png" alt="Creator" className="creatorimage" />
        <p>Creation of <span className="creatorname">Jules Wyvern</span></p>
      </div>
    </div>
    </div>
  )
}
