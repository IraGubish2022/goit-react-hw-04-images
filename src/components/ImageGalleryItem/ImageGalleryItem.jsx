//import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './imageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ id, webformatURL, largeImageURL, tags }) => {
  // state = {
  //   showModal: false,
  // };

  const [showModal, setShowModal] = useState(false);

  // static propTypes = {
  //   id: PropTypes.number,
  //   webformatURL: PropTypes.string.isRequired,
  //   largeImageURL: PropTypes.string.isRequired,
  //   tags: PropTypes.string.isRequired,
  // };

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
    // this.setState(({ showModal }) => ({
    //   showModal: !showModal,
    // }));
  };

  // render() {
  //   const { id, webformatURL, largeImageURL, tags } = this.props;
  //   const { showModal } = this.state;

  return (
    <>
      <li key={id} className={styles.galleryItem} onClick={toggleModal}>
        <img
          className={styles.galleryItemImg}
          src={webformatURL}
          alt={tags}
          width="400"
        />
      </li>
      {showModal && (
        <Modal
          largeImageURL={largeImageURL}
          tags={tags}
          onClose={toggleModal}
        />
      )}
    </>
  );
};

export default ImageGalleryItem;
