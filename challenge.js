// const evaluateGrade = (score) => {

//   let grade = score === 11
//     ? `Perfect`
//     : score > 8
//     ? `Excellent`
//     : score >= 5
//     ? true
//     : false

//   return grade;
// };
// let point = 11
// let result =  evaluateGrade(point)

// console.log(result)

const evaluateGrade = (score) => {
  switch (true) {
    case score === 11:
      return "Perfect";
      break;
    case score >= 8:
      return "Excellent";
      break;
    case score >= 5:
      return true;
      break;
    case score < 5:
      return false;
      break;
    default:
      return "Invalid";
  }
};

let score = 8
let result = evaluateGrade(score)

console.log(result)