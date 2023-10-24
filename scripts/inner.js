const labels = document.getElementsByTagName("label");
const definicionesEningles = [
    "Destination search",
    "Detailed results list",
    "Online booking process",
    "Personalized recommendation system"
];

console.table(labels);
console.table(definicionesEningles);

for (let index = 0 ; index < labels.length; index++) {
    labels[index].innerHTML = definicionesEningles[index];
}