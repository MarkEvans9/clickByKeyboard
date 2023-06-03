import { GlobalKeyboardListener } from "node-global-key-listener";
import robot from "robotjs";
const v = new GlobalKeyboardListener();

//Log every key that's pressed.
v.addListener(function (e, down) {
  if (e.name === "SPACE" && e.state === "DOWN") {
    robot.mouseClick("left");
  }

  //right movement
  if (e.name === "RIGHT ARROW" && e.state === "DOWN") {
    const x = robot.getMousePos().x;
    const y = robot.getMousePos().y;
    robot.moveMouse(x + 4, y);
  }

  // left movement
  if (e.name === "LEFT ARROW" && e.state === "DOWN") {
    const x = robot.getMousePos().x;
    const y = robot.getMousePos().y;
    robot.moveMouse(x - 4, y);
  }

  // up movement
  if (e.name === "UP ARROW" && e.state === "DOWN") {
    const x = robot.getMousePos().x;
    const y = robot.getMousePos().y;
    robot.moveMouse(x, y - 4);
  }

  // down movement

  if (e.name === "DOWN ARROW" && e.state === "DOWN") {
    const x = robot.getMousePos().x;
    const y = robot.getMousePos().y;
    robot.moveMouse(x, y + 4);
  }
});

/*
//Capture Windows + Space on Windows and Command + Space on Mac
v.addListener(function (e, down) {
  if (
    e.state == "DOWN" &&
    e.name == "SPACE" &&
    (down["LEFT META"] || down["RIGHT META"])
  ) {
    console.log("when space down by line 63");
    //call your function
    return true;
  }
});

*/

/*
//Capture ALT + F
v.addListener(function (e, down) {
  if (
    e.state == "DOWN" &&
    e.name == "F" &&
    (down["LEFT ALT"] || down["RIGHT ALT"])
  ) {
    //call your function
    return true;
  }
});


*/

//Call one listener only once (demonstrating removeListener())
// calledOnce = function (e) {
//   console.log("only called once");
//   v.removeListener(calledOnce);
// };
// v.addListener(calledOnce);
