import Header from "./components/Header/Header";
import SelectionForm from "./components/SelectionForm/SelectionForm";
import CameraRoll from "./components/CameraRoll/CameraRoll";
import "./styles/App.scss"
import rover from "./assets/images/rover.png";

function App() {
  return (
    <>
      <Header />
      <div className="explore-form">
        <SelectionForm />
        <img src={rover} alt="mars rover" />
      </div>
      <CameraRoll />
    </>
  );
}

export default App;
