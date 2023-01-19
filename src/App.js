import logo from "./logo.svg";
import "./App.css";
import UserInfo from "./Components/UserInfo/UserInfo";
import PhotosGrid from "./Components/PhotosGrid/PhotosGrid";

function App() {
  return (
    <div className="App">
      <UserInfo />

      <PhotosGrid />
    </div>
  );
}

export default App;
