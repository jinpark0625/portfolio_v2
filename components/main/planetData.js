const random = (a, b) => a + Math.random() * b;
const randomInt = (a, b) => Math.floor(random(a, b));
const randomColor = () =>
  `rgb(${randomInt(80, 50)}, ${randomInt(80, 50)}, ${randomInt(80, 50)})`;

const planetData = [];
const totalPlanets = 4;
for (let index = 0; index < totalPlanets; index++) {
  planetData.push({
    id: index,
    color: randomColor(),
    xRadius: index + 1.5,
    zRadius: index + 1.5 * 1.5,
    // size: random(0.3, 0.8),
    size: index / 4,
  });
}

export default planetData;
