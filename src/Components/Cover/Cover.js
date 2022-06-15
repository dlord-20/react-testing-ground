import React from 'react';
import "./Cover.css";



export class Cover extends React.Component {

    render() {

        const backgroundImg = {
            backgroundImage: `url("${this.props.background}")`
        }

        return (
            <div>
                <div className="cover" style={backgroundImg}>
                    <div>
                        <div className="box">
                            <div className="title">
                                <h1>{this.props.h1}</h1>
                                <h3>{this.props.h3}</h3>
                                <p>{this.props.p}</p>
                                <div className="buttons">
                                    <a href={this.props.buttonALink}
                                    className="buttonA">{this.props.buttonA}</a>
                                    <a href={this.props.buttonBLink} 
                                    className="buttonB">{this.props.buttonB} &rarr;</a>
                                </div>
                            </div>
                            <div className="portrait">
                                <div>
                                    <img src={this.props.portrait} 
                                        alt={this.props.portraitAlt} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space"></div>
            </div>
        )
    }
}