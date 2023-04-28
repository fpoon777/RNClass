import { Image } from 'react-native';
import Image1 from '../images/image1.jpeg';
import Image2 from '../images/image2.jpeg';
import Image3 from '../images/image3.jpeg';
import Image4 from '../images/image4.jpeg';
import Image5 from '../images/image5.jpeg';
import Image6 from '../images/image6.jpeg';
import Image7 from '../images/image7.jpeg';

const ImageData = [
    {
        title: 'image 1',
        image: Image.resolveAssetSource(Image1).uri.toString(),
    },
    {
        title: 'image 2',
        image: Image.resolveAssetSource(Image2).uri.toString(),
    },
    {
        title: 'image 3',
        image: Image.resolveAssetSource(Image3).uri.toString(),
    },
    {
        title: 'image 4',
        image: Image.resolveAssetSource(Image4).uri.toString(),
    },
    {
        title: 'image 5',
        image: Image.resolveAssetSource(Image5).uri.toString(),
    },
    {
        title: 'image 6',
        image: Image.resolveAssetSource(Image6).uri.toString(),
    },
    {
        title: 'image 7',
        image: Image.resolveAssetSource(Image7).uri.toString(),
    },
];

export default ImageData;