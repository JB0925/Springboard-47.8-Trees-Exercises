/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;

    let total = 0;
    let toVisit = [this.root];

    while (toVisit.length) {
      let current = toVisit.pop();
      total += current.val;
      for (let child of current.children) {
        toVisit.push(child);
      }
    }
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    let totalEvens = 0;
    let toVisit = [this.root];

    while (toVisit.length) {
      let current = toVisit.pop();
      if (current.val % 2 === 0) totalEvens++;
      for (let child of current.children) {
        toVisit.push(child);
      };
    };
    return totalEvens;
  };

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;
    
    let totalGreater = 0;
    let toVisit = [this.root];

    while (toVisit.length) {
      let current = toVisit.pop();
      if (current.val > lowerBound) totalGreater++;
      for (let child of current.children) toVisit.push(child);
    };
    return totalGreater;
  };
};

module.exports = { Tree, TreeNode };
