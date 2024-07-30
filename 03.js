// 3. PromiseAll 다뤄보기 (빈칸 채우기)
// 세 개의 setTimeout 비동기 함수를 각각 직렬, 병렬로 호출하는 코드입니다. 
// 아래의 코드를 보고 < 빈칸 > 부분을 각각 채워주시고, 그렇게 생각하는 이유도 내용으로 적어주세요. 
// (총 빈칸 3개)

function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1 Complete");
    }, 1000);
  });
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 2 Complete");
    }, 2000);
  });
}

function task3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 3 Complete");
    }, 3000);
  });
}

async function runTasksSequential() {
  console.time("Sequential");
  try {
    const result1 = await task1(); // [!] 실행이 끝나야
    console.log(result1); // [!] 콘솔이 찍힘
    const result2 = await task2(); // [!] 실행이 끝나야
    console.log(result2); // [!] 콘솔이 찍힘
    const result3 = await task3(); // [!] 실행이 끝나야
    console.log(result3); // [!] 콘솔이 찍힘
  } catch (error) {
    console.error("Error:", error);
  }
  console.timeEnd("Sequential");

  // 예상되는 대략적인 시간과 그 이유 < 빈칸 1 >
  // 6초 : result1~3이 실행될 때 await으로 순차적으로 실행되어서 전부 합친 시간입니다.
  // result1 = 1초 + result2 = 2초 + result3 = 3초
}

async function runTasksParallel() {
  console.time("Parallel");
  try {
    // 병렬로 promise들을 한 번에 처리하는 코드
    const results = Promise.all([task1(), task2(), task3()]); // new
    results.forEach((result) => console.log(result));
  } catch (error) {
    console.error("Error:", error);
  }
  console.timeEnd("Parallel");
  // task1~3까지 동시에 실행되기 때문에 3초가 가장 긴 시간이므로 3초가 가장 오래걸리는 시간입니다.
}

// 함수 호출
runTasksSequential().then(() => runTasksParallel());