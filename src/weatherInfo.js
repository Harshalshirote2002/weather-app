async function getData(location) {
  const source =
    `http://api.weatherapi.com/v1/current.json?key=20136a5eccc04689bc640750230509&q=` +
    location;
  const response = await fetch(source, { mode: "cors" });
  const responseData = await response.json();
  let toBeReturned = [
    responseData.current.condition.text,
    responseData.current.cloud,
    responseData.current.last_updated,
    responseData.current.humidity,
    responseData.current.temp_c,
    responseData.current.feelslike_c,
  ];
  return toBeReturned;
}

export default async function createInfo(location) {
  const main = document.createElement("div");
  let value = await getData(location);
  console.log(value);
  const head = document.createElement("div");
  const conditionText = document.createElement("div");
  const time = document.createElement("div");
  const humidity = document.createElement("div");
  const temperature = document.createElement("div");
  const feelsLike = document.createElement("div");
  main.classList.add('info-container');
  head.id = "info-head";
  conditionText.id = "info-condition-text";
  time.id = "info-time";
  humidity.id = "info-humidity";
  temperature.id = "info-temp";
  feelsLike.id = "info-feels-like";
  //
  conditionText.textContent = `value[0], ${value[1]}% cloud cover`;
  time.textContent = value[2];
  humidity.textContent = `${value[3]}`;
  temperature.textContent = `${value[4]}`;
  feelsLike.textContent = `${value[5]}`;
  head.textContent = location;
  main.append(head, conditionText, time, humidity, temperature, feelsLike);
  return main;
}
