import { useEffect } from 'react';

interface NotificationProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

const Notification = ({ message, isVisible, onClose }: NotificationProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 3000); // Hide the notification after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    isVisible && (
      <div className="fixed top-4 right-4 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg">
        <p>{message}</p>
      </div>
    )
  );
};

export default Notification;