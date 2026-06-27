const THREE = require('three');
const m = new THREE.Matrix4();
m.set(
  0, 0, 1, 0,
  1, 0, 0, 0,
  0, 1, 0, 0,
  0, 0, 0, 1
);
const e = new THREE.Euler().setFromRotationMatrix(m);
console.log(e);
