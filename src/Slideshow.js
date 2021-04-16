import "./styles/Slideshow.css"
import ImageGallery from 'react-image-gallery';
import React from 'react';

const imagesThumbnailsUrl = process.env.PUBLIC_URL + '/assets/images/thumbnails/';
const imagesUrl = process.env.PUBLIC_URL + '/assets/images/';


const images = [
  {
    original: `${imagesUrl + "1.jpg"}`,
    thumbnail: `${imagesThumbnailsUrl + "1_tn.jpg"}`, 
  },
  {
    original: `${imagesUrl + "2.jpg"}`,
    thumbnail: `${imagesThumbnailsUrl + "2_tn.jpg"}`,
  },
  {
    original: `${imagesUrl + "3.jpg"}`,
    thumbnail: `${imagesThumbnailsUrl + "3_tn.jpg"}`,
  },
  {
    original: `${imagesUrl + "4.jpg"}`,
    thumbnail: `${imagesThumbnailsUrl + "4_tn.jpg"}`,
  },
  {
    original: `${imagesUrl + "5.jpg"}`,
    thumbnail: `${imagesThumbnailsUrl + "5_tn.jpg"}`,
  },
  {
    original: `${imagesUrl + "6.jpg"}`,
    thumbnail: `${imagesThumbnailsUrl + "6_tn.jpg"}`,
  },
  {
    original: `${imagesUrl + "7.jpg"}`,
    thumbnail: `${imagesThumbnailsUrl + "7_tn.jpg"}`,
  },
  {
    original: `${imagesUrl + "8.jpg"}`,
    thumbnail: `${imagesThumbnailsUrl + "8_tn.jpg"}`,
  },
  {
    original: `${imagesUrl + "8.jpg"}`,
    thumbnail: `${imagesThumbnailsUrl + "8_tn.jpg"}`,
  },
  {
    original: `${imagesUrl + "9.jpg"}`,
    thumbnail: `${imagesThumbnailsUrl + "9_tn.jpg"}`,
  },
  {
    original: `${imagesUrl + "10.jpg"}`,
    thumbnail: `${imagesThumbnailsUrl + "10_tn.jpg"}`,
  },
  {
    original: `${imagesUrl + "11.jpg"}`,
    thumbnail: `${imagesThumbnailsUrl + "11_tn.jpg"}`,
  },
  {
    original: `${imagesUrl + "12.jpg"}`,
    thumbnail: `${imagesThumbnailsUrl + "12_tn.jpg"}`,
  },
  {
    original: `${imagesUrl + "13.jpg"}`,
    thumbnail: `${imagesThumbnailsUrl + "13_tn.jpg"}`,
  },
  {
    original: `${imagesUrl + "14.jpg"}`,
    thumbnail: `${imagesThumbnailsUrl + "14_tn.jpg"}`,
  },
  {
    original: `${imagesUrl + "15.jpg"}`,
    thumbnail: `${imagesThumbnailsUrl + "15_tn.jpg"}`,
  },
];

export function createSlideshow(){
    return(
        <div className="slideshow">
            <ImageGallery items={images} />
        </div>
    ); 
}