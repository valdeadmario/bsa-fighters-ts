
const API_URL = 'https://api.github.com/repos/binary-studio-academy/stage-2-es6-for-everyone/contents/resources/api/';

function callApi(endpoind:string, method:string) {
  const url:string = API_URL + endpoind;
  const options:Object = {
    method
  };

  return fetch(url, options)
    .then(response =>
      response.ok ? response.json() : Promise.reject(Error('Failed to load'))
    )
    .catch(error => {
      throw error;
    });
}

export { callApi }