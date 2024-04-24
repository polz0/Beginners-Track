import React from 'react';
import './App.css';
 
function App() {
    return (
      <button type="button">
        <img src="data:image/png;base64,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" alt="React Image"/>
        </button>
    );

  // const [data, setData] = useState({ message: "" })
  // const [clicked, setClicked] = useState(false);

  // useEffect(() => {
  //   fetch(`http://10.159.66.57:5000/relay/add`) // WRONG URL
  //     .then(res => res.json())
  //     .then(data => setData(data))
  // }, []);
  // useEffect(() => {
  //   console.log(data)
  // }, [data]);

  // const handleClick = () => {
  //   setClicked(!clicked);
  //   console.log(clicked)
  // };

  // const callBackend = () => {
  //   // fetch the backend url (local host 5000 / whatever ?data=${testData})

  // }
}
 
export default App;