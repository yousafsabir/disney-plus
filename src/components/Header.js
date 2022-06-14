import React from 'react'
import ImgSlider from './ImgSlider'

const Header = () => {
    return (
        <header>
            <div className='w-full h-[85px]'></div>
            <div className="w-full content min-h-full px-5 bg-home-bg bg-fixed bg-no-repeat bg-center bg-cover">
                <ImgSlider />
            </div>
        </header>
    )
}

export default Header