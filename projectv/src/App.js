import Home from './components/Home';
import './App.css';
import Books from './Books';



function App(props) {
//   const [CartIsVisible, setCartIsVisible] = useState(false);

// const showCartHandler = () => {
// setCartIsVisible(true)
// };
// const HideCartHandler = () => {
// setCartIsVisible(false)
// };
  
  // async function fetchImage(url) {
  //   const img = new Image();
  //   return new Promise((res, rej) => {
  //       img.onload = () => res(img);
  //       img.onerror = e => rej(e);
  //       img.src = url;
  //   });
// }
// const img = await fetchImage('https://covers.openlibrary.org/b/id/12547191-L.jpg');
// const w = img.width;
// const h = img.height;







  return (
    <>
    <Home />
    <Books />
    
    </>
  )
}

export default App;
