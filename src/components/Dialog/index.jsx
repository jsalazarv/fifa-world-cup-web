import './styles.css';
import { useEffect, useState } from 'react';

export const Dialog = ({ open }) => {
  const [isOpen, setIsOpen] = useState(open);

  const close = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(open);
  });

  return (
    <div
      className={`dialog ${isOpen ? 'fixed' : 'hidden'}`}
      onClick={() => close()}>
      <div className="flex justify-center items-center min-h-screen pt-4 px-4 pb-4 text-center bg-black bg-opacity-70">
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-4 pb-4 text-left overflow-hidden shadow-xl transform transition-all h-full sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
          <h1>Dialog</h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          accusantium deleniti doloremque eius excepturi labore magni mollitia,
          non porro quas quasi quisquam saepe similique sint soluta, ut vero
          voluptas voluptates.
        </div>
      </div>
    </div>
  );
};
