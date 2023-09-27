// import Skeleton from '@mui/material/Skeleton';

const Store = 'https://raw.githubusercontent.com/Learn-At-RocketCamp/project-peteats-2022/dev/src/images/Store.png';

// const ImageErrorHandler = (e) => {
//   // e.target.src = FAKE_IMG;
//   console.log('IMG-ERROR:::');
//   e.target.src = Store;
// };

// const onImageError = (e) => {
//   // e.target.src = FAKE_IMG;
// };

function ImageErrorHandler(e) {
  // e.target.src = FAKE_IMG;
  // console.log('IMG-ERROR:::');
  e.target.src = Store;
}

export default ImageErrorHandler;
