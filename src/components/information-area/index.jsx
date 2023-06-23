import React from "react"
import styles from "./style.module.css"

function InformationArea({ inputText, setInputText, data, error, setCityName, loading }) {
  console.log(inputText);
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setCityName(e.target.value)
      setInputText('')

    }
  }

  return (
    <div className={styles.informationArea}>
      {!loading ? (
        <>
          <input type="text" name="" id="" placeholder='Search location'
            className={styles.searchbar}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleSearch}
          />

          <h1 className={styles.city}>{data.name}</h1>

          <div className={styles.group}>
            <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" />
            <h1>{data.weather[0].main}</h1>
          </div>

          <h1 className={styles.temp}>{data.main.temp.toFixed()} C</h1>

          <div className={styles.boxContainer}>

            <div className={styles.box}>
              <p>humidity</p>
              <h1>{data.main.humidity.toFixed()}%</h1>
            </div>

            <div className={styles.box}>
              <p>Wind</p>
              <h1>{data.wind.speed.toFixed()} km/h</h1>
            </div>

            <div className={styles.box}>
              <p>Feels like</p>
              <h1>{data.main.feels_like.toFixed()} C</h1>
            </div>

          </div>
        </>
      ) : (<><h1>Loading...</h1></>)}





    </div>

  )

}

export default InformationArea