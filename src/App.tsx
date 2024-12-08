import React, { useState } from "react";
import {Button, Modal} from "./index";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">My App</h1>
      <Button
        label="Open Modal"
        onClick={() => setIsModalOpen(true)}
        variant="Danger"
      />
      <Modal
        isOpen={isModalOpen}
        title="Modal Title"
        onClose={() => setIsModalOpen(false)}
      >
        <p>Modal Content</p>
      </Modal>
    </div>
  );
};

export default App;
