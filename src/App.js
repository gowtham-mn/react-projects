import "./App.css";
import Accordian from "./components/accordian";
import ModalTest from "./components/custom-modal-popup/modal-test";
import TabTest from "./components/custom-tabs/tab-test";
import FeatureFlags from "./components/feature-flag";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import GithubProfileFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom";
import ScrollToSection from "./components/scroll-to-top-and-bottom/scroll-to-section";
import SearchAutocomplete from "./components/search-autocomplete-with-api";
import StarRating from "./components/star-rating";
import TicTacToe from "./components/tic-tac-toe";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOnClickOutsidetest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";
import Weather from "./components/weather-info/weather";

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Accordian/> */}

      {/* Random Color Component */}
      {/* <RandomColor/> */}

      {/* Star Rating Component*/}
      {/* <StarRating/> */}

      {/* Image slider Component*/}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={10}/> */}

      {/* Load More Data Component */}
      {/* <LoadMoreData/> */}

      {/* Tree View Component */}
      {/* <TreeView menus={menus}/> */}

      {/* QR Code Generator Component */}
      {/* <QRCodeGenerator/> */}

      {/* Light Dark Theme Component */}
      {/* <LightDarkMode/> */}

      {/* Scroll Indicator Component */}
      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}

      {/* Custom Tabs Component */}
      {/* <TabTest/> */}

      {/* Custom Modal Component */}
      {/* <ModalTest/> */}

      {/* Github profile finder */}
      {/* <GithubProfileFinder/> */}

      {/* Search AutoComplete Component */}
      {/* <SearchAutocomplete/> */}

      {/* Tic Tac Toe Component */}
      {/* <TicTacToe/> */}

      {/* Feature Flag Implementation */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags/>
      </FeatureFlagGlobalState> */}

      {/* useFetch -  Custom Hook */}
      {/* <UseFetchHookTest/> */}

      {/* Use Onclick Outside Hook */}
      {/* <UseOnClickOutsidetest /> */}

      {/* use Window Resize Hook Test */}
      {/* <UseWindowResizeTest/> */}

      {/* Scroll zto Top And Bottom */}
      {/* <ScrollToTopAndBottom/> */}

      {/* Scroll to a particular Section */}
      {/* <ScrollToSection/> */}

      {/* Weather application component */}
      {<Weather/>}
    </div>
  );
}

export default App;
