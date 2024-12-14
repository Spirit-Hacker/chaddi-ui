import React, { useEffect, useState } from "react";

export type Position = "top-right" | "top-left" | "bottom-right" | "bottom-left";

export interface ToastProps {
  message: string;
  color?: string;
  animation?: "slide" | "fade";
  position?: Position;
  duration?: number;
  onClose?: () => void;
};

const Toast: React.FC<ToastProps> = ({
  message,
  color = "#333",
  animation = "fade",
  position = "top-right",
  duration = 3000,
  onClose,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getPositionClass = () => {
    switch (position) {
      case "top-right":
        return "top-4 right-4";
      case "top-left":
        return "top-4 left-4";
      case "bottom-right":
        return "bottom-4 right-4";
      case "bottom-left":
        return "bottom-4 left-4";
      default:
        return "top-4 right-4";
    }
  };

  const getAnimationClass = () => {
    return animation === "slide" ? "animate-slide-in" : "animate-fade-in";
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed p-4 text-white rounded-lg shadow-lg z-50 text-sm max-w-xs ${getPositionClass()} ${getAnimationClass()}`}
      style={{ backgroundColor: color }}
    >
      {message}
    </div>
  );
};

export default Toast;
