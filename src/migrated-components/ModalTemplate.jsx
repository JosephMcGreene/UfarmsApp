import { useEffect, useRef } from "react";

export default function ModalTemplate({ modalIsOpen, closeModal, children }) {
  const ref = useRef();

  useEffect(() => {
    if (modalIsOpen) return ref.current?.showModal();
    return ref.current?.close();
  }, [modalIsOpen]);

  return (
    <dialog
      className="w-auto h-fit rounded-xl max-w-screen-sm"
      ref={ref}
      onCancel={closeModal}
    >
      <header className="flex justify-end rounded-t-xl bg-white h-10">
        <button
          className="bg-white text-black text-3xl font-extrabold max-h-5 px-3 align-middle"
          onClick={closeModal}
        >
          &times;
        </button>
      </header>

      <div className="flex flex-col p-5">{children}</div>
    </dialog>
  );
}
