import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryForm } from './ImageGallery.styled';
export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ImageGalleryForm>
      {images.map(image => (
        <ImageGalleryItem
          image={image}
          key={image.id}
          onClick={onImageClick}
        ></ImageGalleryItem>
      ))}
    </ImageGalleryForm>
  );
};
