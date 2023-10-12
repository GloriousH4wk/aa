import "./App.css";
import Card from "./Components/Card";
import Footer from "./Components/Footer/index";
import ProgressBar from "./Components/ProgressBar";

function App() {

  interface IData {
    id: number;
    title: string;
    text: string;
    iconName: string;
  }

  const data: IData[] = [
    {
      id: 1,
      title: "Free Project",
      text: "Be creative and create your own storyboard",
      iconName: "task",
    },
    {
      id: 2,
      title: "Success Story",
      text: "Inspire with real-life success stories",
      iconName: "bar",
    },
    {
      id: 3,
      title: "E-Learning Video",
      text: "Learn new skills with professional guidance",
      iconName: "graduation",
    },
    {
      id: 4,
      title: "Explainer",
      text: "Explain how your product works",
      iconName: "bar",
    },
  ];

  return (
    <>
      <div>
        <ProgressBar/>
      </div>
      <div>
        <p className="step-counter">Step 1/5</p>
      </div>
      <div className="App">
        <div>
          <h2>Choose from the templates</h2>
          <p className="translucent">Select what kind of video you want to create</p>
        </div>
        <div className="Card">
          {data.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              text={item.text}
              iconName={item.iconName}
            />
          ))}
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
