# WebAssembly Example

A simple example project demonstrating how to use Rust-compiled WebAssembly modules in Node.js.

## Project Structure

- **`rust/`** - Rust source code that compiles to WebAssembly
- **`node/`** - Node.js application that uses the WebAssembly module
- **`rust/pkg/`** - Generated WebAssembly bindings and output

## Quick Start

### TL;DR

```bash
cd node
npm start
```

## Detailed Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (for running the JavaScript application)
- [Rust](https://www.rust-lang.org/) and [wasm-pack](https://rustwasm.github.io/wasm-pack/) (only needed if you want to rebuild the Rust code)

### Running the Example

1. Navigate to the `node` directory:
   ```bash
   cd node
   ```

2. Run the script:
   ```bash
   npm start
   ```

This will execute the Node.js script that imports and uses the WebAssembly module compiled from Rust.

### What It Does

The example demonstrates a simple `add` function written in Rust that:
- Takes two numbers as input
- Logs a message to the console from Rust
- Returns the sum of the two numbers

The Node.js script calls this function and displays the result.

## Rebuilding the WebAssembly Module (Optional)

If you want to modify the Rust code and rebuild the WebAssembly module:

### Install Rust and wasm-pack (if you don't have them)

1. Install Rust and Cargo:
   ```bash
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   ```
   Follow the prompts to complete the installation.

2. Install wasm-pack:
   ```bash
   curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
   ```

### Build the WebAssembly Module

1. Navigate to the `rust` directory:
   ```bash
   cd rust
   ```

2. Build the WebAssembly module:
   ```bash
   wasm-pack build --target nodejs
   ```

This will regenerate the files in the `rust/pkg/` directory.

## License

MIT
