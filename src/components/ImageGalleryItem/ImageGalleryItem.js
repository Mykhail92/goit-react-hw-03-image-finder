import { GalleryItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <GalleryItem id={image.id} onClick={onClick}>
      <Image
        src={image.webformatURL}
        alt={image.tags}
        name={image.largeImageURL}
      />
    </GalleryItem>
  );
};
