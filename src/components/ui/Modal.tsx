import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-full max-w-md max-h-[90vh] overflow-auto">
        {children}

        <button onClick={onClose} className="mt-4 text-sm text-gray-500">
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
