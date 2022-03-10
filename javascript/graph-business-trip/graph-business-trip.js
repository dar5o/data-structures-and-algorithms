const Graph = require('../graph/graph');


let businessTrip = (graph, arr) => {
  if (!graph) return 'Invalid or missing graph';
  for (let i = 0; i <= arr.length - 1; i++) {
    console.log('graph', graph.getNeighbors(arr[i]));
  }

}

// Graph
let graph = new Graph();

// Cites/Verticies
const berkeley = graph.addVertex('berkeley');
// console.log(berkeley);
const oakland = graph.addVertex('oakland');
const sanjose = graph.addVertex('san jose');
const sanfransisco = graph.addVertex('san fransisco');
const richmond = graph.addVertex('richmond');
const napa = graph.addVertex('napa');


graph.addEdge(berkeley, oakland, 150);
graph.addEdge(berkeley, sanjose, 82);

graph.addEdge(oakland, sanjose, 99);
graph.addEdge(oakland, napa, 42);
graph.addEdge(oakland, berkeley, 150);

graph.addEdge(sanjose, sanfransisco, 37);
graph.addEdge(sanjose, richmond, 26);
graph.addEdge(sanjose, napa, 105);
graph.addEdge(sanjose, berkeley, 82);
graph.addEdge(sanjose, oakland, 99);

graph.addEdge(sanfransisco, sanjose, 37);
graph.addEdge(sanfransisco, richmond, 250);

graph.addEdge(richmond, sanfransisco, 250);
graph.addEdge(richmond, sanjose, 26);
graph.addEdge(richmond, napa, 73);

graph.addEdge(napa, oakland, 42);
graph.addEdge(napa, sanjose, 105);
graph.addEdge(napa, richmond, 73);