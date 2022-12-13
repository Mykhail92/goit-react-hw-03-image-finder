import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryForm } from './ImageGallery.styled';
export const ImageGallery = ({ images }) => {
  console.log(images);
  return (
    <ImageGalleryForm>
      {images.map(image => (
        <ImageGalleryItem image={image} key={image.id}></ImageGalleryItem>
      ))}
    </ImageGalleryForm>
  );
};
