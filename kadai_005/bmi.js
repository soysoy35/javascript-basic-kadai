const weight = 68; // kg
const height = 1.7; // m

// BMI（体格指数）を計算する関数
function calculateBMI(weight, height) {
    return weight / (height * height);
}

// BMIを計算
const bmi = calculateBMI(weight, height);

// 結果を出力
console.log("BMI: " + bmi);


