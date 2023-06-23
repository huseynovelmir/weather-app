import {useEffect,useState} from "react";
import InformationArea from "./components/information-area/index";
import Style from "./Styles/global.module.css"
import "./Styles/reset.css"

function App() {

  const [cityName, setCityName] = useState("Baku");
  const [inputText , setInputText] = useState("");
  const [data , setData] = useState({});
  const [error , setError] = useState(false)
  const [loading , setLoading] = useState(true)


useEffect(() => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c518171fb2d14d563926d4899d66f35e&units=metric`)
  .then ((res) => {
    if (res.status===200) {
     error && setError(false)
      return res.json()
    }
    else{
      throw new Error("Somthing Went Wrong")
    }
  } )
  .then((data) => {
   setData(data)
   console.log(data);
  })
  .catch(() => setError=(true))
  .finally(() => setLoading(false))
},[cityName, error]);
 

  return (
    <div className={Style.App}>
      <InformationArea inputText={inputText} setInputText={setInputText} data={data} error={error} setCityName={setCityName} loading={loading}/>
    </div>
  );
}

export default App;
