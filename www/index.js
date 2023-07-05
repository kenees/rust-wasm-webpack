// import * as wasm from "wasm-game-of-life";

// wasm.greet("wwwaa");

import { Universe } from "wasm-game-of-life";

// 获取我们刚加的<pre>元素，并实例化新 Universe 的元素:
const pre = document.getElementById("game-of-life-canvas");
const universe = Universe.new();

// JavaScript 运行在[一个requestAnimationFrame循环][requestanimationframe]。 在每次迭代中，它将当前的 Universe 绘制到<pre>，然后运行Universe::tick。
const renderLoop = () => {
  pre.textContent = universe.render();
  universe.tick();

  requestAnimationFrame(renderLoop);
};

requestAnimationFrame(renderLoop);
