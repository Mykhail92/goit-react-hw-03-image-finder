import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchImages = async (InputValue, pageNr) => {
  const response =
    await axios.get(`/?q=${InputValue}&page=${pageNr}&key=30847702-8293b4fe83f47e9e8f27fc251&image_type=photo&orientation=horizontal&per_page=12
`);
  return response.data.hits.map(image => {
    return {
      id: image.id,
      webformatURL: image.webformatURL,
      largeImageURL: image.largeImageURL,
      tags: image.tags,
    };
  });
};
