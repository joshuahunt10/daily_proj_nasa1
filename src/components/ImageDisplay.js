import React, { Component } from 'react';

class ImageDisplay extends Component {

  render() {
    let imageArray = this.props.images;
    if(this.props.images.length === 0){
      imageArray = [
        {
          id: "sampleid",
          img_src: 'http://www.placecage.com/c/200/300'
        }
      ]
    }
    return (
      <div>
        {imageArray.map((imgURL)=>{
          return(
            <div key={imgURL.id}>
              <ul>
                <li><img src={imgURL.img_src} /></li>
              </ul>
            </div>
          )
        })}
      </div>
    );
  }

}

export default ImageDisplay;
