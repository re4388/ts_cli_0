




## # use pnpm

1. **Install `pnpm` globally**:

   ```bash
   npm install -g pnpm
   ```

   This will install `pnpm` globally on your system, making it available as a command-line tool.

### Usage:

1. **Initialize a new project**:

   To start a new project with `pnpm`, navigate to your project directory in the terminal and run:

   ```bash
   pnpm init
   ```

   This will create a new `package.json` file and initialize your project.

2. **Install dependencies**:
   ```bash
   pnpm install <package-name>
   ```

3. **Add a new dependency**:
   ```bash
   pnpm add <package-name>
   ```
4. **Remove a dependency**:
   ```bash
   pnpm remove <package-name>
   ```

5. **Update dependencies**:

   ```bash
   pnpm update
   ```

6. **Run scripts**:
run scripts defined in your `package.json`  and if available:
   ```bash
   pnpm run start
   ```

### Additional Features:
- **Workspace Support**: `pnpm` has built-in support for managing multiple packages within a single repository (monorepo) using workspaces.
- **Automatic Pruning**: `pnpm` automatically removes unused dependencies from your `node_modules` directory, reducing disk space usage.
- **Fast**: `pnpm` uses a unique approach to package management that enables faster installation and better disk space utilization compared to other package managers.

### Configuration:
- You can configure `pnpm` using various options. Check out the documentation for more information: [pnpm Configuration](https://pnpm.io/configuration)

### Help:
-  use `pnpm --help` or `pnpm <command> --help`.
