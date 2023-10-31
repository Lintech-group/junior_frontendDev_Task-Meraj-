import React from 'react'

const Header = () => {
    const [state] = React.useState({heading: 'NITEX', link1: 'Sustainable production for your clothing brand'})
    return (
        <div className="header" id='home'>
            <div className="header__content">
              <h1 className="header__content-h1">{state.heading}</h1>
            <div className="header__content-links">
                {state.link1}
             </div>
            </div>
        </div>
    )
}

export default Header
