export const Loader = () => (
  <div
    id="toast-default"
    className="flex items-center animate-pulse w-full p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
    role="alert"
  >
    <div className="ml-3 h-2 rounded-full bg-zinc-400 w-full"></div>
    <button
      type="button"
      className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
      data-dismiss-target="#toast-default"
      aria-label="Close"
    >
      <span className="sr-only">Close</span>
      <div className="h-5 w-5 bg-zinc-400 animate-pulse" />
    </button>
    <button
      type="button"
      className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
      data-dismiss-target="#toast-default"
      aria-label="Close"
    >
      <span className="sr-only">Close</span>
      <div className="h-5 w-5 bg-zinc-400 animate-pulse" />
    </button>
  </div>
);
