import { Component } from 'react';
import { fetchImages } from '../components/Api/Api';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './SearchBar/SearchBar';

export class App extends Component {
  state = {
    images: [],
    pageNr: 1,
    currentSearch: '',
  };

  handleSubmit = async e => {
    e.preventDefault();
    const inputForSearch = e.currentTarget.elements.inputForSearch;
    if (inputForSearch.value.trim() === '') {
      return;
    }
    const response = await fetchImages(inputForSearch.value, 1);
    this.setState({
      images: response,
      pageNr: 1,
      currentSearch: inputForSearch.value,
    });
  };
  loadMoreClick = async () => {
    const response = await fetchImages(
      this.state.currentSearch,
      this.state.pageNr + 1
    );
    this.setState({
      images: [...this.state.images, ...response],
      pageNr: this.state.pageNr + 1,
    });
  };

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
        <ImageGallery images={this.state.images} />
        {this.state.images.length > 0 ? (
          <Button onClick={this.loadMoreClick} />
        ) : null}
      </div>
    );
  }
}
