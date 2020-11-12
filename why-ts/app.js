// api url
var url = 'https://jsonplaceholder.typicode.com/users/';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};


// typedef를 통해 객체나 변수의 타입을 정의할 수 있다
// 정의된 객체나 변수 안에 property가 있다면 property로 정의하여 사용할 수도 있음

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */
function fetchUser() {
  return axios.get(url)
}

function startApp() {
  // axios
  //   .get(url)
  fetchUser()
    .then(function (response) {
      // console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      console.log(user)
      username.innerText = user[0].name;
      email.innerText = user[0].email;
      address.innerText = user[0].address.street;

    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
