import { FaXmark } from 'react-icons/fa6';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';

type PropsType = {
  show: boolean;
  title: string;
  onClose: (bol: boolean) => void;
  children: React.ReactNode;
};

const Modal = (props: PropsType) => {
  return (
    <Dialog
      open={props.show}
      as="div"
      transition
      className="fixed z-50 inset-0 flex w-screen items-center justify-center bg-gray-900/50 transition duration-300 ease-out data-[closed]:opacity-0"
      onClose={() => props.onClose(false)}
    >
      <div className="fixed w-screen inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <DialogPanel className="relative rounded-lg bg-white px-5 py-6 text-left w-full sm:max-w-lg ">
            <DialogTitle className="font-bold">{props.title}</DialogTitle>
            <button
              onClick={() => props.onClose(false)}
              className="absolute top-2 right-2 p-2 rounded-full transition duration-300 text-gray-800 hover:bg-gray-300"
            >
              <FaXmark size={20} />
            </button>

            <div className="pt-4">{props.children}</div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
