import React, { Component } from 'react';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        `./images/france_3.png`,
        `./images/france_2.png`,
        `./images/france_1.png`,
        `./images/france_4.png`,
        `./images/france_5.png`,
        `./images/france_6.png`,
        `./images/france_7.png`,
        `./images/france_9.png`,
        `./images/dec2_1.jpg`,
        `./images/dec2_2.jpg`,
        `./images/dec2_3.jpg`,
        `./images/dec2_3.jpg`,
        `./images/DSC_0004.jpg`,
        `./images/DSC_0021.jpg`,
        `./images/DSC_0037.jpg`,
        `./images/gayPrideParade.jpg`,
        `./images/gayPrideParade46.jpg`,
        `./images/gayPrideParade89.jpg`,
        `./images/image1.jpg`,
        `./images/image2.jpg`,
        `./images/image40.jpg`,
        `./images/image43.jpg`,
        `./images/image49.jpg`,
        `./images/image51.jpg`,
        `./images/image65.jpg`,
        `./images/image77.jpg`,
        `./images/image84.jpg`,
        `./images/image86.jpg`
      ]
    };
  }

  createImg(url) {
    return (
      <li>
        <img src={url} alt="Gallery" />
      </li>
    );
  }

  createBgImg(img) {
    const style = {
      backgroundImage: `url(${img})`,
      backgroundSize: `contain`,
      backgroundPosition: `center`,
      backgroundRepeat: `no-repeat`
    };
    return style;
  }

  render() {
    return (
      <div className="gallery">
        <ul>
          {this.state.images.map(url => {
            return (
              <li>
                <div
                  className="galleryImg"
                  style={this.createBgImg(`${url}`)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
