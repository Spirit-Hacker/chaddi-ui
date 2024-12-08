# Chaddi UI

Chaddi UI is a customizable component library built with Tailwind CSS. Follow the instructions below to set it up and integrate it into your Tailwind CSS project.

---

## **Installation**

Install the library and its peer dependencies:

```bash
npm install chaddi-ui tailwindcss postcss autoprefixer
```


---

## **Configuration**

To ensure Tailwind CSS works seamlessly with `chaddi-ui`, you need to update your `tailwind.config.js` file.

### **1. Update the `content` Array**

Add the following paths to the `content` array in your Tailwind configuration:

```js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Your project files
    './node_modules/chaddi-ui/**/*.{js,ts,jsx,tsx}', // Include the UI library
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

This step ensures that Tailwind scans and includes the classes used in `chaddi-ui` components.

### **2. Restart Your Development Server**

After making changes to `tailwind.config.js`, restart your development server to apply the updates:

```bash
npm run dev
```

---

## **Usage**

Import the components and styles into your project. For example:

```js
import React from "react";
import { Button, Modal } from "chaddi-ui";

const App: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-red-500">My App</h1>
      <Button
        label="Click me"
        onClick={() => console.log("Clicked")}
        variant="Primary"
      />
      <Modal
        isOpen={true}
        title="Modal Title"
        onClose={() => console.log("Modal closed")}
      >
        <p>Modal content</p>
      </Modal>
    </div>
  );
};

export default App;
```

---

## **Why Update the Tailwind Configuration?**

The `content` array in `tailwind.config.js` determines which files Tailwind should scan for class names. By including `./node_modules/chaddi-ui/**/*.{js,ts,jsx,tsx}`, Tailwind can detect and generate the necessary styles for `chaddi-ui` components.

---

## **Support**

If you encounter any issues or have questions, please open an issue on the [GitHub repository](https://github.com/Spirit-Hacker/chaddi-ui).

---

## **License**

This project is licensed under the MIT License.
