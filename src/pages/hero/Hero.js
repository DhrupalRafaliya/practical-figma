import React from 'react'
import './hero.scss'
import Header from '../../components/comman/header/Header'
import vector from '../../assets/images/Vector.png'

const Hero = () => {
    return (
        <div className='hero-sec '>

            <div className="container">
                <Header />
                <div className="hero-text">
                    <div className="hero-text-main">

                        Make your interior more<br />
                        minimalistic & modern

                    </div>
                    <div className="hero-text-sub">

                        Turn your room with panto into a lot more minimalist <br />  and modern with ease and speed
                    </div>
                    <div className="hero-text-search">
                        <input className='search' type="text" placeholder='Search furniture' />
                        <img className='search-icon ' src={vector} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero