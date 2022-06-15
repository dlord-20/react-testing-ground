import React from 'react';
import './Box-Card.css';



export class BoxCard extends React.Component {
    render() {
        return (
            <div className="boxCard">
                <a href={this.props.buttonLink}>
                    <img src={this.props.imgSrc} alt={this.props.imgAlt}/>
                </a>
                <div className='date'>
                    <p>Last Updated: {this.props.date}</p>
                </div>
                <div className="boxText">
                    <h2>{this.props.h2}</h2>
                    <h5>{this.props.h5}</h5>
                    <p>{this.props.p}</p>
                    <div className="buttons">
                        <a className="buttonB lightBg" href={this.props.buttonLink}>{this.props.buttonText} &rarr;</a>
                    </div>
                </div>
            </div>
        )
    }
}