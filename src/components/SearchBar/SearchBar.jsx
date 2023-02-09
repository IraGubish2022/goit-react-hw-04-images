import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './searchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';
import { BiSearchAlt } from 'react-icons/bi';
import { IconContext } from 'react-icons';

export const SearchBar = ({ onSubmit }) => {
  // state = {
  //   imageName: '',
  // };

  const [imageName, setImageName] = useState('');

  // static propTypes = {
  //   onSubmit: PropTypes.func.isRequired,
  // };

  const handleImageNameChange = event => {
    setImageName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (imageName.trim() === '') {
      toast(`Enter the name of the picture`);
      return;
    }

    // this.props.onSubmit(this.state.imageName);
    // this.setState({ imageName: '' });

    onSubmit(imageName);
    setImageName('');
  };
  // render() {
  return (
    <header className={styles.searchBar}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <button type="submit" className={styles.button}>
          <IconContext.Provider
            value={{
              color: 'blue',
              size: '3em',
              className: 'global-class-name',
            }}
          >
            <div>
              <BiSearchAlt />
            </div>
          </IconContext.Provider>
          ;<span className={styles.buttonLabel}>Search</span>
        </button>

        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={imageName}
          onChange={handleImageNameChange}
        />
      </form>
      <Toaster position="top-right" />
    </header>
  );
};
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
//}
//export default SearchBar;
