import { Component } from 'react';
import s from './ImageGallery.module.css';

class ImageGallery extends Component {
  render() {
    return <ul className={s.ImageGallery}>{this.props.children}</ul>;
  }
}

export default ImageGallery;
