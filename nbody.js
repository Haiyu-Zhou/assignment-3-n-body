import { distance, force } from './utils.js';

const config = {
  scale: 2.50e+11,
  bodies: [
    {x: 1.4960e+11, y: 0.0000e+00, vx: 0.0000e+00, vy: 2.9800e+04, m: 5.9740e+24, image: 'earth.gif'}, //config.bodies[0]
    {x: 2.2790e+11, y: 0.0000e+00, vx: 0.0000e+00, vy: 2.4100e+04, m: 6.4190e+23, image: 'mars.gif'},//config.bodies[1]
    {x: 5.7900e+10, y: 0.0000e+00, vx: 0.0000e+00, vy: 4.7900e+04, m: 3.3020e+23, image: 'mercury.gif'},
    {x: 0.0000e+00, y: 0.0000e+00, vx: 0.0000e+00, vy: 0.0000e+00, m: 1.9890e+30, image: 'sun.gif'}, //won't change
    {x: 1.0820e+11, y: 0.0000e+00, vx: 0.0000e+00, vy: 3.5000e+04, m: 4.8690e+24, image: 'venus.gif'}
  ]
}

console.log(config.bodies.length)
// Your code here
const step = (contextWrapper, deltaT) => {
  let scale = config.scale;
  contextWrapper.setScale(scale); //set canvas scale
  let bodies = config.bodies;
  let fx = Array(bodies.length).fill(0);//-> fx = [0,0,0,0,0]
  let fy = Array(bodies.length).fill(0);
  console.log(fx)
for (let i = 0; i < bodies.length; i++){
  fx[i] = 0;
  fy[i] = 0;
}
for (let j = 0; j < bodies.length; j++){

  //j for loop
  if (i !== j){
  let r = distance(bodies[i].x, bodies[i].y, bodies[j].x, bodies[j].y,);
  let F = force(bidies[i].m, bodies[j].m, r);


}

};

// End your code

export { step, config };
