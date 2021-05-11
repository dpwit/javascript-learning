const marksWeight = 78; // kg
const marksHeight = 1.69; // meters
const johnsWeight = 77;
const johnsHeight = 1.65;

let marksBmi = marksWeight / marksHeight ** 2;
let johnsBmi = johnsWeight / johnsHeight ** 2; // = johnsWeight / (johnsHeight * johnsHeight)

const markHigherBMI = marksBmi > johnsBmi;

console.log(marksBmi, johnsBmi, markHigherBMI);

if (marksBmi > johnsBmi) {
    console.log(`Mark's BMI (${marksBmi}) is higher than John's BMI (${johnsBmi})`)
} else {
    console.log(`John's BMI (${johnsBmi}) is higher than Mark's BMI (${marksBmi})`)
}