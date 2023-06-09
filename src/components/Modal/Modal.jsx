import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdpropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { url, alt } = this.props;
    return (
      <div className={s.Overlay} onClick={this.handleBackdpropClick}>
        <div className={s.Modal}>
          <img src={url} alt={alt} />
        </div>
      </div>
    );
  }
}

export default Modal;

Modal.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
  handleBackdpropClick: PropTypes.func,
};
