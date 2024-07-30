// 2. Async / Await 다뤄보기
// 위 1번 문제에서 다루었던 비동기 처리를 async, await 키워드를 사용하여 코드를 수정해서 작성해주세요.

// [?] async await 를 사용한 코드로 변경해보기


const API_URL = "https://open.api.com/v1/data";
const WRONG_URL = "https://open.api.com/v1/wrong";

function getData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      url === API_URL ? resolve('성공') : reject('실패');
    }, 3000);
  })
}

// [?] getData(API_URL), getData(WRONG_URL) 각각 성공과 실패에 대한 처리를 코드작성해주세요.
// [!] await 는 async 함수 내에서 사용하는 것임
// [!] async, await 를 사용할 때 반드시 try, catch 를 작성해야함
// [!] try : 하고 싶은 로직
// [!] catch : error 발생할 때 로직 
async function callGetData(url) {
  try {
    const result = await getData(API_URL);
    console.log(result);
  } catch (e) {
    console.log('실패')
  }
}

callGetData(API_URL);


