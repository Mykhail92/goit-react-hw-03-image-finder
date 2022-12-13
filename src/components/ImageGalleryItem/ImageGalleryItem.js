import { GalleryItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image }) => {
  return (
    <GalleryItem id={image.id}>
      <Image
        src={image.webformatURL}
        alt={image.tags}
        name={image.largeImageURL}
      />
    </GalleryItem>
  );
};
