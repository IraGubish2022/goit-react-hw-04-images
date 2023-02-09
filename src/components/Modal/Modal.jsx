import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './modal.module.css';

export const Modal = ({ onClose, largeImageURL, tags }) => {
  // static propTypes = {
  //   onClose: PropTypes.func.isRequired,
  // };
  // componentDidMount() {
  //   window.addEventListener('keydown', this.closeModalByEsc);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.closeModalByEsc);
  // }

  useEffect(() => {
    window.addEventListener('keydown', closeModalByEsc);
    return () => {
      window.removeEventListener('keydown', closeModalByEsc);
    };
  });

  const closeModalByEsc = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  const closeModalOverlay = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };
  // render() {
  //   const { largeImageURL, tags } = this.props;
  return (
    <div className={styles.overlay} onClick={closeModalOverlay}>
      <div className={styles.modal}>
        <img src={largeImageURL} alt={tags} width="850" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
