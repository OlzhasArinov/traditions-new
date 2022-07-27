import React from 'react'
import './style.css'
// import videoBg from './assets/videoBgKz.mp4'
import { Link, useNavigate } from 'react-router-dom'
import { Navbar } from '../../components/navbar'


const Promo = () => {
  let navigate = useNavigate();

  return (
    <div className='promo'>
        {/* <div className="overlay"></div> */}
        {/* <video src={videoBg} autoPlay loop muted /> */}
        <iframe
            className='video'
            src="https://www.youtube.com/embed/B9x4F5Uf7go?autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&showinfo=0&start=50&enablejsapi=1&&widgetid=3"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>
        {/* <video loop autoPlay muted >
          <source
            src="https://www.youtube.com/watch?v=B9x4F5Uf7go"
            type="video/mp4"
          />
            Your browser does not support the video tag.
        </video> */}
        <div className="promo_content">
            <div className="container promo_title">
                <h4>"Мы - раскинувшаяся на громадном пространстве страна, нация, которая подвергается воздействию всех культур. Не надо этого бояться. Надо использовать это во благо. И мы можем использовать, если будем, наконец, действовать по принципу: осваивать чужое, не теряя своего"</h4>
                <p>Олжас Сулейменов</p>
                {/* <Link to='/main' type="button" class="btn btn-danger" onClick={() => navigate('/main')}>
                  Get start
                </Link> */}
                <Link to='/main' type="button" class="btn btn-danger">
                  Get start
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Promo
