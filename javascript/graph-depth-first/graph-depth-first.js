'use strict';

class Vertex {
  constructor(value) {
    this.value = value
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(value) {
    let vertex = new Vertex(value)
    this.adjacencyList.set(vertex, []);
    return vertex;
  }

  addEdge(startVertex, endVertex, weight = 0) {
    if (!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)) {
      throw new Error('__ERROR__ Invalid Vertices');
    }
    const adjancancies = this.adjacencyList.get(startVertex);
    adjancancies.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error('__ERROR__ Invalid Vertex', vertex);
    }
    return [...this.adjacencyList.get(vertex)];
  }

  size() {
    return this.adjacencyList.size;
  }

  getVertices() {
    return this.adjacencyList;
  }

  bfs(startNode) {
    const queue = [];
    const visitedVertices = new Set();

    queue.push(startNode);
    visitedVertices.add(startNode);

    while (queue.length) {
      const currentNode = queue.shift();

      const neighbors = this.getNeighbors(currentNode);

      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;

        if (visitedVertices.has(neighborNode)) {
          continue;
        } else {
          visitedVertices.add(neighborNode)
        }
        queue.push(neighborNode);
      }

    }
    console.log('visitedNodes', visitedNodes);
    return;
  }


dfs(vertex) {
  if(!this.adjacencyList.get(vertex)) return

    const visited = new Set();
    let neighborStack = new Stack();
    let current = vertex;

    while (current) {
      if (visited.has(current[0])) {
        current = neighborStack.pop()
      } else {
        
        visited.add(current[0]);
  
        const neighbors = this.getNeighbors(current[0]);

        for (let neighbor of neighbors) {
          neighborStack.push(neighbor)
        }
        current = neighborStack.pop()
      }
    }
    return visited
  }
}

  //while (stack) {
    // console.log('stack.vertex:', stack[0].vertex);
    // stack = stack.vertex
  

  /*
    Push the root node into the stack
    Start a while loop while the stack is not empty
    Peek at the top node in the stack
    If the top node has unvisited children, mark the top node as visited, and then Push any unvisited children back into the stack.
    If the top node does not have any unvisited children, Pop that node off the stack
    repeat until the stack is empty.
  */


const graph = new Graph();

const a = graph.addVertex('1');
const b = graph.addVertex('2');
const c = graph.addVertex('3');

graph.addEdge(a, c);
graph.addEdge(b, a);
graph.addEdge(c, b);

console.log(graph.size());