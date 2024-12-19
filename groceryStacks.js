let groceryStack = [];

function peek() {
  if (groceryStack.length === 0) {
    console.log("The stack is empty.");
    return null;
  } else {
    console.log("Top of the stack:", groceryStack[groceryStack.length - 1]);
    return groceryStack[groceryStack.length - 1];
  }
}

function push(item) {
  groceryStack.push(item);
  console.log(`Added "${item}" to the stack.`);
  peek(); 
  console.log("Updated stack:", groceryStack);
}

function pop() {
  if (groceryStack.length === 0) {
    console.log("The stack is empty. Nothing to remove.");
    return null;
  } else {
    let removedItem = groceryStack.pop();
    console.log(`Removed "${removedItem}" from the stack.`);
    peek();
    console.log("Updated stack:", groceryStack);
    return removedItem;
  }
}

for (let i = 0; i < 5; i++) {
  let item = prompt(`Enter grocery item ${i + 1}:`);
  push(item); 
}

console.log("\nRemoving items from the stack:");
pop();
pop();