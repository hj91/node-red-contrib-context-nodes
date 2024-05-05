# Node-RED Custom Context Nodes

These are nodes for setting and getting context variables in Node-RED.

## Description

This Node-RED module provides two custom nodes:

- **context-set**: Sets context variables for global, flow, or node scope.
- **context-get**: Retrieves context variables from global, flow, or node scope.

Node-RED's context data feature allows you to store information within your flows, making it accessible across different nodes. These custom nodes simplify the process of interacting with context variables, enabling you to manage and utilize them effectively.

## Why Use These Nodes?

1. **Simplify Context Management**: Instead of writing JavaScript code to set and get context variables, you can use these nodes, which offer a user-friendly interface within the Node-RED editor.

2. **Reduce Development Time**: These nodes abstract away the complexities of handling context data, allowing you to focus on building your flows without worrying about low-level implementation details.

3. **Promote Reusability**: By encapsulating context-related functionality into dedicated nodes, you can easily reuse them across multiple flows, promoting modularity and maintainability.

## Installation

To install these nodes, you can use the Node-RED Palette Manager or manually install them:

1. Open your Node-RED instance.
2. Click on the menu icon in the top right corner and select "Manage palette".
3. Go to the "Install" tab and search for "node-red-contrib-context-nodes".
4. Click "Install".

Alternatively, you can install them manually by running the following command in your Node-RED user directory (typically `~/.node-red`):

```bash
npm install node-red-contrib-context-nodes
```

## Usage

### context-set Node

This node sets a context variable based on the specified scope (global, flow, or node).

#### Configuration
- **Variable**: Name of the context variable.
- **Value**: Value to be assigned to the context variable.
- **Scope**: Scope of the context variable (global, flow, or node).

### context-get Node

This node retrieves the value of a context variable based on the specified scope (global, flow, or node).

#### Configuration
- **Variable**: Name of the context variable.
- **Scope**: Scope of the context variable (global, flow).

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.

## Author

- **Harshad Joshi** - [GitHub](https://github.com/hj91)

## Contributions

Contributions are welcome! Please feel free to submit issues or pull requests.
