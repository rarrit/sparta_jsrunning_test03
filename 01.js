// [1] getData 라는 주어진 url을 인자로 받는 함수를 만들어주세요.
// [2] getData 는 3초 후 url이 기준 url과 동일할 경우 성공적으로 데이터를 반환하고, 틀릴 경우 에러를 발생시킵니다.
// [3] then과 catch를 이용하여 데이터를 처리하는 방법과 에러를 처리하는 방법 두 가지를 각각 보여주세요.

const API_URL = "https://open.api.com/v1/data";
const WRONG_URL = "https://open.api.com/v1/wrong";

function getData(url) { // [1] 함수 생성
  // [!] 비동기는 반드시 프로미스를 리턴함
  return new Promise((resolve, reject) => { // resolve : 해결됨, reject : 반려됨
    // 3초 뒤 url 이 API_URL과 같다면 성공으로 처리를, 아닐 경우 실패로 처리를 하게 해주세요
    setTimeout(function () { // [2] 3초 = setTimeout, 동일할 경우 = if / 틀릴 경우 = else
      if (url === API_URL) {
        resolve('성공');
      } else {
        reject('실패');
      }
    }, 3000);
  })
}


// getData(API_URL), getData(WRONG_URL) 각각 성공과 실패에 대한 처리를 코드작성해주세요.

// getData 를 호출 한다.
// 비동기는 .then으로 result 를 가져온다. 
getData(API_URL)
  // [3] then, catch 처리
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

getData(WRONG_URL)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });




