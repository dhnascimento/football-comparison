
var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", process.env.API_KEY);
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");


var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

export default async (req, res) => {
  await fetch("https://v3.football.api-sports.io/countries", requestOptions)
  .then(response => response.json())
  .then(data => res.send(data))
  .catch(error => console.log('error', error));
}


