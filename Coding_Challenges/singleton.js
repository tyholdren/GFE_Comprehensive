// https://www.greatfrontend.com/questions/javascript/singleton
// No skeleton is provided. Export an object that has a single `getInstance()` method.
const globalMap = new Map();

export default {
  getInstance() {
    return globalMap;
  },
};
