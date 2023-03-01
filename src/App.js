import "./styles.css";

import image2 from "./images/image2.jpg";

export default function App() {
  return (
    <div className="App">
      <h1>movie images</h1>
      <div className="loki">
        <img src={image2} />
        <img src={image2} />
        <img src={image2} />
        <img src={image2} />
      </div>
    </div>
  );
}
