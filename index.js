// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
  return drivers;
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
  return drivers;
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
  return drivers;
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
  return drivers;
}

function appendDriver(name) {
  const driversCopy = drivers.slice();
  driversCopy.push(name);
  return driversCopy;
}

function prependDriver(name) {
  const driversCopy = drivers.slice();
  driversCopy.unshift(name);
  return driversCopy;
}

function removeLastDriver() {
  const driversCopy = drivers.slice();
  driversCopy.pop();
  return driversCopy;
}

function removeFirstDriver() {
  const driversCopy = drivers.slice();
  driversCopy.shift();
  return driversCopy;
}
