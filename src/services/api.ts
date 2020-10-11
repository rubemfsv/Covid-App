import axios from 'axios';

const api = axios.create({
  baseURL: 'https://covid-19-data.p.rapidapi.com/',
});

export default api;

// import axios from 'axios';

// const api_key = 'f0d3694b64mshc73dc93bf6ddf7cp196416jsnd7d1df0b828a';
// const host = 'covid-19-data.p.rapidapi.com';

// export function getTotal() {
//   const URL = 'https://covid-19-data.p.rapidapi.com/totals';
//   return axios
//     .get(URL, {
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         'x-rapidapi-host': host,
//         'x-rapidapi-key': api_key,
//       },
//     })
//     .then(response => {
//       if (response.status === 200 && response.data) {
//         return response.data[0];
//       }
//     });
// }

// export function getSelectedCountry(name) {
//   const URL = 'https://covid-19-data.p.rapidapi.com/country';
//   return axios
//     .get(URL, {
//       headers: {
//      plic   Accept: 'apation/json',
//         'Content-Type': 'application/json',
//         'x-rapidapi-host': host,
//         'x-rapidapi-key': api_key,
//       },
//       params: {
//         name,
//       },
//     })
//     .then(response => {
//       if (response.status === 200 && response.data) {
//         return response.data[0];
//       }
//     });
// }

// export function getAllCountry() {
//   const URL = 'http://country.io/names.json';
//   return axios.get(URL).then(response => {
//     if (response.status === 200 && response.data) {
//       return response.data;
//     }
//   });
// }

// export function getFlagOfCountry() {
//   const URL = 'https://www.countryflags.io/us/flat/64.png';
//   return axios.get(URL).then(response => {
//     if (response.status === 200 && response.data) {
//       return response.data;
//     }
//   });
// }

// export function getAllDataForAll(date) {
//   const URL = 'https://covid-19-data.p.rapidapi.com/report/totals';
//   return axios
//     .get(URL, {
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         'x-rapidapi-host': host,
//         'x-rapidapi-key': api_key,
//       },
//       params: {
//         date,
//       },
//     })
//     .then(response => {
//       if (response.status === 200 && response.data) {
//         return response.data[0];
//       }
//     });
// }

// export function getCountryDataApi(date, name) {
//   const URL = 'https://covid-19-data.p.rapidapi.com/report/country/name';
//   return axios
//     .get(URL, {
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         'x-rapidapi-host': host,
//         'x-rapidapi-key': api_key,
//       },
//       params: {
//         date,
//         name,
//       },
//     })
//     .then(response => {
//       if (response.status === 200 && response.data) {
//         return response.data[0];
//       }
//     });
// }
