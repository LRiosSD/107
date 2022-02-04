
import Footer from './components/footer';
import NavBar from './components/navBar';
import Catalog from './components/catalog';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"


function App(){
  return(
    <div className='App'>
      <NavBar></NavBar>
      <h1>
        Welcome to SQS Style
      </h1>
      <Catalog/>

      <Footer/>
      
    </div>
  );
};

export default App;


// 1-create catalog component 
// 2-create the product 
// 3-on app.js render catalog
// 4-on catalog render 5 products
// 5-product render QuantityPicker