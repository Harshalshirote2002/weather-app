async function getData(location){
    const source = `http://api.weatherapi.com/v1/current.json?key=20136a5eccc04689bc640750230509&q=` + location;
    const response = await fetch(source, {mode: 'cors'});
    const responseData = await response.json();
    return responseData;
}

export default async function createInfo(location){
    // const main = document.createElement('div');
    let value = await getData(location)
    console.log(value);
}