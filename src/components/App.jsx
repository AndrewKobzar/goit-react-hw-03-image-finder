import { Component } from 'react';
import axios from 'axios';
import Notiflix from 'notiflix';
import { BASE_URL, API_KEY, SEARCH_PARAMS } from './../Services/constants';
import Searchbar from './Searchbar/Searchbar';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Modal from './Modal/Modal';


class App extends Component {
  state = {
    hits: [],
    name: '',
    page: 1,
    showModal: false,
    largeImageURL: '',
    tags: '',
    totalHits: null,
    cat: true,
  };

  toggleModal = (imageURL, tag) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImageURL: imageURL,
      tags: tag,
    }));
  };

  getValue = ({ name, page }) => {
    this.setState({});
    try {
      axios
        .get(
          `${BASE_URL}?key=${API_KEY}&q=${name}&page=${page}&${SEARCH_PARAMS}`
        )
        .then(response => {
          const total = response.data.totalHits;
          if (!response.data.hits.length) {
            this.setState({
              totalHits: total,
            });
            Notiflix.Notify.failure('No images found!');
          } else if (name === this.state.name) {
            this.setState(state => ({
              hits: [...state.hits, ...response.data.hits],
              name: name,
              page: state.page + 1,
              totalHits: total,
            }));
          } else {
            this.setState(state => ({
              hits: response.data.hits,
              name: name,
              page: state.page + 1,
              totalHits: total,
            }));
          }

      console.log(total);
        });
    } catch (error) {
      console.error(error.message);
    }
    
  };



  loadMore = () => {
    this.getValue(this.state);
  };

  render() {
    const { hits, showModal, largeImageURL, tags, totalHits } = this.state;
console.log(hits.length);
    return (
      <div>
        <Searchbar onSubmitHandler={this.getValue} />

        {hits && (
          <ImageGallery>
            <ImageGalleryItem articles={hits} onImage={this.toggleModal} />
          </ImageGallery>
        )}

        {showModal && (
          <Modal onClose={this.toggleModal} url={largeImageURL} alt={tags} />
        )}

        {hits.length > 0 && hits.length !== totalHits && (
          <LoadMoreBtn onButtonClick={() => this.loadMore()} />
        )}
      </div>
    );
  }
}

export default App;
