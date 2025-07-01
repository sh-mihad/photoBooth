
export default function Modal({ onClose, children,isShowClose = true}) {
  return (
     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 ">
      <div className="relative bg-white rounded-lg shadow-lg w-full  max-w-md p-6 mx-4">
        {isShowClose && <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 hover:text-black text-2xl"
        >
          &times;
        </button>}
        {children}
      </div>
    </div>
  )
}
