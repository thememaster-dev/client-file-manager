import DisplayData from './components/DisplayData';
import UserInputAudioForm from './components/UserInputAudioForm';
import UserInputForm from './components/UserInputImageForm';
import UserInputVideoForm from './components/UserInputVideoForm';

function App(props) {

  return (
    <div className="App">
      {/* <UserInputForm /> */}
      <br />
      <br />
      <UserInputVideoForm />
      <br />
      <br />
      <DisplayData />
      <br />
      <br />
      <br />
      {/* <UserInputAudioForm /> */}
    </div>
  );
}

export default App;
