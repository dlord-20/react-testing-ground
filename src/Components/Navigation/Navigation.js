import React from 'react';
import './Navigation.css';

export class Navigation extends React.Component {
    constructor(props) {
        super(props)

        this.menu = this.menu.bind(this);
    }

    menu(titles, links) {
        let temp =[];
        for(let i = 0; i < titles.length; i++) {
            temp[i] = <a href={links[i]} className="buttonB lightBg">{titles[i]}</a>
        }
        return temp;
    }

    render() {
        return (
            <div className='header'>
                <div className='logo'>
                    <a href={this.props.logoLink}>
                        <img src={this.props.logoImg} alt={this.props.logoAlt}/>
                    </a>
                    <p>{this.props.logoText}</p>
                </div>
                <div className='nav-desktop'>
                    <nav className="buttons">
                        {this.menu(this.props.menuTitles, this.props.menuLinks)}
                    </nav>
                </div>
                <div className='nav-mobile'>
                    <input type="checkbox" className="toggler" onClick={this.toggleMenu}></input>
                    <div className="hamburger"><div></div></div>
                    <div className="menu">
                        <div>
                            <nav>
                                {this.menu(this.props.menuTitles, this.props.menuLinks)}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
