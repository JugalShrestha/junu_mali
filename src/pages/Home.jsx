import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="page">
        <div id="home-page">
            <div className="pc-contents">
                <Link to={'/arts'} className="long-Y">
                    <div className="gradient"></div>
                    <div className="arts">
                        <img src="/1.webp"/>
                        <img src="/2.webp"/>
                        <img src="/3.webp"/>
                        <img src="/4.webp"/>
                        <img src="/5.webp"/>
                    </div>
                    <div className="arts">
                        <img src="/1.webp"/>
                        <img src="/2.webp"/>
                        <img src="/3.webp"/>
                        <img src="/4.webp"/>
                        <img src="/5.webp"/>
                    </div>
                </Link>
                <div className="divided-Y">
                    <Link to={'/digital_gallery'}className="digital-gallery">
                        <div className="big-text">    
                            <div className="small-text">
                                digital
                            </div>
                            gallery
                        </div>
                    </Link>
                    <Link to={'/arts'} className="painting">
                        <div className="gradient"></div>
                        <div className="arts">
                            <img src="/5.webp"/>
                            <img src="/6.webp"/>
                            <img src="/7.webp"/>
                            <img src="/8.webp"/>
                            <img src="/9.webp"/>
                        </div>
                        <div className="arts">
                            <img src="/5.webp"/>
                            <img src="/6.webp"/>
                            <img src="/7.webp"/>
                            <img src="/8.webp"/>
                            <img src="/9.webp"/>
                        </div>
                    </Link>
                    <div className="contacts">
                    <a href="https://www.facebook.com/junu.shrestha.397" target="_blank" rel="noreferrer" className="social-link"><img src="/fb.png" alt="" /></a>
                    <a href="https://www.instagram.com/junu_malii/" target="_blank" rel="noreferrer" className="social-link"><img src="/insta.png" alt="" /></a>
                    <a href="https://www.tiktok.com/@junuarts" target="_blank" rel="noreferrer" className="social-link"><img src="/tiktok.png" alt="" /></a>
                    <a className="social-link" href="mailto:junumalishrestha@gmail.com" target="_blank" rel="noreferrer"><img src="/email.png" alt="" /></a>
                    </div>
                </div>
            </div>
            <div className="contacts">
                <a href="https://www.facebook.com/junu.shrestha.397" target="_blank" rel="noreferrer" className="social-link"><img src="/fb.png" alt="" /></a>
                <a href="https://www.instagram.com/junu_malii/" target="_blank" rel="noreferrer" className="social-link"><img src="/insta.png" alt="" /></a>
                <a href="https://www.tiktok.com/@junuarts" target="_blank" rel="noreferrer" className="social-link"><img src="/tiktok.png" alt="" /></a>
                <a className="social-link" href="mailto:junumalishrestha@gmail.com" target="_blank" rel="noreferrer"><img src="/email.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Home