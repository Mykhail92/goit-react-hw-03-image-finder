import React, { Component } from 'react';
import { fetchImages } from '../components/Api/Api';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { SearchBar } from './SearchBar/SearchBar';

export class App extends Component {
  state = {
    images: [],
    pageNr: 1,
    currentSearch: '',
    error: null,
    isModalOpen: false,
    imgSrc: '',
    imgAlt: '',
    isLoading: false,
    imgOnRequest: 0,
  };

  handleSubmit = async e => {
    e.preventDefault();

    const inputForSearch = e.currentTarget.elements.inputForSearch;
    if (inputForSearch.value.trim() === '') {
      return;
    }
    try {
      this.setState({ isLoading: true });
      const response = await fetchImages(inputForSearch.value, 1);
      this.setState({
        images: response,
        pageNr: 1,
        currentSearch: inputForSearch.value,
      });
    } catch {
      this.setState({
        error: alert('Error, reload your page please;'),
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };
  loadMoreClick = async () => {
    try {
      const response = await fetchImages(
        this.state.currentSearch,
        this.state.pageNr + 1
      );
      this.setState({
        images: [...this.state.images, ...response],
        pageNr: this.state.pageNr + 1,
        imgOnRequest: this.state.imgOnRequest + response.length,
      });
    } catch {
      this.setState({
        error: alert('Error, reload your page please;'),
      });
    }
  };

  handleClickModal = e => {
    console.log(e.target.name);
    this.setState({
      isModalOpen: true,
      imgSrc: e.target.name,
      imgAlt: e.target.alt,
    });
  };
  handleCloseModal = () => {
    this.setState({
      isModalOpen: false,
      imgSrc: '',
      imgAlt: '',
    });
  };

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.handleCloseModal();
    }
  };

  async componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <SearchBar onSubmit={this.handleSubmit} />
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <>
            <ImageGallery
              images={this.state.images}
              onImageClick={this.handleClickModal}
            />
          </>
        )}
        {this.state.images.length >= 12 && (
          <Button onClick={this.loadMoreClick} />
        )}

        {this.state.isModalOpen ? (
          <Modal
            src={this.state.imgSrc}
            alt={this.state.imgAlt}
            onClose={this.handleCloseModal}
          />
        ) : null}
      </div>
    );
  }
}
