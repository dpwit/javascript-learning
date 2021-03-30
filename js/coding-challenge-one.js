const marksWeight = 78; // kg
const marksHeight = 1.69; // meters
const johnsWeight = 92;
const johnsHeight = 1.95;

let marksBmi = marksWeight / marksHeight ** 2;
let johnsBmi = johnsWeight / johnsHeight ** 2; // = johnsWeight / (johnsHeight * johnsHeight)

const markHigherBMI = marksBmi > johnsBmi;

console.log(marksBmi, johnsBmi, markHigherBMI);
