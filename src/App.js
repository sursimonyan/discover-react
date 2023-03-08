import { Banner } from "./components/Banner";
import { ProductsFeatures } from "./components/ProductsFeatures";
import { SliderWrap } from "./components/Slider";
import { Shop } from "./components/Shop";
import { Included } from "./components/Included";

import "./assets/styles/globals.scss";
import { Addons } from "./components/Addons";

function App() {
  return (
    <div className="main">
     <Banner />
     <ProductsFeatures />
     <SliderWrap />
     <Shop />
     <Included />
     <Addons />
    </div>
  );
}

export default App;
