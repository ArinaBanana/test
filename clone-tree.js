class Node {
    constructor(value, children) {
        this.value = value;
        this.children = children;
    }
}

const tree = new Node('block', [
    new Node('span', [
        new Node('Заголовок 1', []),
        new Node('Текст', [
            new Node('Картинка', [])
        ]),
    ])
]);

const cloneTree = (node) => {
    const newNode = new Node(node.value, node.children.map((child) => cloneTree(child)));
    return newNode;
}

class StackItem {
    constructor(value, parent) {
        this.value = value;
        this.parent = parent;
    }
}

const cloneTreeWithStack = (node) => {
    const stack = [node];
    const callStack = [];
    let parent = null;

    while (stack.length !== 0) {
        const currentNodeArray = stack.pop();

        currentNodeArray.forEach(currentNode => {
            const stackItem = new StackItem(currentNode.value, parent);

            callStack.push(stackItem);

            stack.push(currentNode.children);
        })
        parent = stackItem;
    }
}

// 1
// 2
// 3
//
// [1, 2, 3] -> 3 2 1
//
// push -> 1 2 3 <- pop
