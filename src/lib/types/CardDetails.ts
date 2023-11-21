export type CardDetails = {
  code: string;
  image: string;
  images: {
    svg: string;
    png: string;
  };
  value: string;
  suit: string;
};

// {
//   "code": "6H", 
//   "image": "https://deckofcardsapi.com/static/img/6H.png", 
//   "images": {
//                 "svg": "https://deckofcardsapi.com/static/img/6H.svg", 
//                 "png": "https://deckofcardsapi.com/static/img/6H.png"
//             }, 
//   "value": "6", 
//   "suit": "HEARTS"
// }, 