import React, { Component } from 'react';
import Modal from './Modal';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {
          url: `./images/france_3.png`,
          caption: `City view of the 19th.`,
          info: `Paris, France || February 2019`
        },
        {
          url: `./images/france_2.png`,
          caption: `Family Walk`,
          info: `Paris, France || February 2019`
        },
        {
          url: `./images/france_1.png`,
          caption: `Sacre Coeur from afar`,
          info: `Paris, France || February 2019`
        },
        {
          url: `./images/france_4.png`,
          caption: `Snack Shack`,
          info: `Paris, France || February 2019`
        },
        {
          url: `./images/ceceJerem1.png`,
          caption: `My sister, Cecilia during the happiest moment of her life so far.`,
          info: `Paris, France || February 2019`
        },
        {
          url: `./images/france_5.png`,
          caption: `Church Towers`,
          info: `Paris, France || February 2019`
        },
        {
          url: `./images/france_6.png`,
          caption: `Couple in the street`,
          info: `Paris, France || February 2019`
        },
        {
          url: `./images/ceceJerem2.png`,
          caption: `My sister, Cecilia during the happiest moment of her life so far.`,
          info: `Paris, France || February 2019`
        },
        {
          url: `./images/france_7.png`,
          caption: `Sacre Coeur from afar, V2`,
          info: `Paris, France || February 2019`
        },
        {
          url: `./images/france_9.png`,
          caption: `Evening Walk`,
          info: `Paris, France || February 2019`
        },
        {
          url: `./images/sol1.png`,
          caption: `Sol`,
          info: `Piedmont Park, Atlanta, GA || January 2019`
        },
        {
          url: `./images/dec2_1.jpg`,
          caption: `The Mandarin Oriental`,
          info: `Buckhead, Atlanta || December 2018`
        },
        {
          url: `./images/sol2.png`,
          caption: `Sol`,
          info: `Piedmont Park, Atlanta, GA || January 2019`
        },
        {
          url: `./images/dec2_2.jpg`,
          caption: `In Progress...`,
          info: `Buckhead, Atlanta || December 2018`
        },
        {
          url: `./images/dec2_3.jpg`,
          caption: `Autumn`,
          info: `Buckhead, Atlanta || December 2018`
        },
        {
          url: `./images/DSC_0004.jpg`,
          caption: `Buckhead Hotels`,
          info: `Buckhead, Atlanta || December 2018`
        },
        {
          url: `./images/DSC_0021.jpg`,
          caption: `Chapel`,
          info: `Buckhead, Atlanta || December 2018`
        },
        {
          url: `./images/gayPrideParade.jpg`,
          caption: `Atlanta Pride`,
          info: `Midtown Atlanta || October 2018`
        },
        {
          url: `./images/gayPrideParade46.jpg`,
          caption: `Atlanta Pride`,
          info: `Midtown Atlanta || October 2018`
        },
        {
          url: `./images/gayPrideParade89.jpg`,
          caption: `Atlanta Pride`,
          info: `Midtown Atlanta || October 2018`
        },
        {
          url: `./images/image1.jpg`,
          caption: `Eiffel Tower from below`,
          info: `Paris, France || August 2018`
        },
        { url: `./images/image2.jpg`, caption: ``, info: `` },
        { url: `./images/image40.jpg`, caption: ``, info: `` },
        { url: `./images/image43.jpg`, caption: ``, info: `` },
        { url: `./images/image49.jpg`, caption: ``, info: `` },
        { url: `./images/image51.jpg`, caption: ``, info: `` },
        { url: `./images/image65.jpg`, caption: ``, info: `` },
        { url: `./images/image77.jpg`, caption: ``, info: `` },
        { url: `./images/image84.jpg`, caption: ``, info: `` },
        { url: `./images/image86.jpg`, caption: ``, info: `` }
      ],
      selectedImg: {
        url: ``,
        caption: ``,
        info: ``
      },
      modalOpen: false
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

  handleImageClick(url, caption, info) {
    console.log(url, caption, info);
    this.setState({
      selectedImg: {
        url: url,
        caption: caption,
        info: info
      },
      modalOpen: true
    });
  }

  modalClose() {
    this.setState({
      selectedImg: '',
      modalOpen: false
    });
  }

  render() {
    return (
      <div className="gallery">
        <Modal
          createBgImg={this.createBgImg.bind(this)}
          modalOpen={this.state.modalOpen}
          selectedImg={this.state.selectedImg}
          modalClose={this.modalClose.bind(this)}
          closeButtonImg={this.createBgImg.bind(this)}
        />
        <ul>
          {this.state.images.map(image => {
            return (
              <>
                <li>
                  <div
                    className="galleryImg"
                    style={this.createBgImg(`${image.url}`)}
                    onClick={(url, caption, info) => {
                      this.handleImageClick(
                        image.url,
                        image.caption,
                        image.info
                      );
                    }}
                  />
                </li>
              </>
            );
          })}
        </ul>
      </div>
    );
  }
}
