import './style.css';

/* A Queue object for queue-like functionality over JavaScript arrays. */
const Queue = function () {
  this.items = [];
};
Queue.prototype.enqueue = function (obj) {
  this.items.push(obj);
};
Queue.prototype.dequeue = function () {
  return this.items.shift();
};
Queue.prototype.isEmpty = function () {
  return this.items.length === 0;
};

/*
 * Performs a breadth-first search on a graph
 * @param {array} graph - Graph, represented as adjacency lists.
 * @param {number} source - The index of the source vertex.
 * @returns {array} Array of objects describing each vertex, like
 *     [{distance: _, predecessor: _ }]
 */
const doBFS = function (graph, source) {
  const bfsInfo = [];

  for (let i = 0; i < graph.length; i++) {
    bfsInfo[i] = {
      distance: null,
      predecessor: null,
    };
  }

  bfsInfo[source].distance = 0;

  const queue = new Queue();
  queue.enqueue(source);

  while (!queue.isEmpty()) {
    // pop queue item into vertex variable
    const vertex = queue.dequeue();

    // iterate through vertex subarray in graph
    for (let u = 0; u < graph[vertex].length; u++) {
      // set neighbor var to be the current index iteration
      const neighbor = graph[vertex][u];

      // check if neighbor has been visited
      if (bfsInfo[neighbor].distance === null) {
        // add 1 to the distance of current vertex, then set for neighbor
        bfsInfo[neighbor].distance = bfsInfo[vertex].distance + 1;
        // origin for the current vertex
        bfsInfo[neighbor].predecessor = vertex;
        queue.enqueue(neighbor);
      }
    }
  }
  return bfsInfo;
};

const adjList = [
  [1],
  [0, 4, 5],
  [3, 4, 5],
  [2, 6],
  [1, 2],
  [1, 2, 6],
  [3, 5],
  [],
];

const bfsInfo = doBFS(adjList, 3);

for (let i = 0; i < adjList.length; i++) {
  console.log(
    `vertex ${i}: distance = ${bfsInfo[i].distance}, predecessor = ${bfsInfo[i].predecessor}`
  );
}
