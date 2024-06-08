export const RegularForm = (props: any) => {
  return (
    <div className="flex flex-col p-2 gap-4 h-full w-full">
      <div className="shadow-2xl flex flex-col p-4 gap-4 rounded-xl">
        <div className="flex flex-col gap-4 ">
          <div className="w-full">
            <label
              htmlFor="first_name"
              className="block text-sm text-left font-medium text-gray-900 dark:text-white"
            >
              {props.labels[0]}
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div className="w-full ">
            <label
              htmlFor="first_name"
              className="block text-sm text-left font-medium text-gray-900 dark:text-white"
            >
              {props.labels[1]}
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <div className="w-full ">
            <label
              htmlFor="phone"
              className="block text-left text-sm font-medium text-gray-900 dark:text-white"
            >
              {props.labels[2]}
            </label>
            <input
              type="tel"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123-45-678"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
          <div className="w-full ">
            <label
              htmlFor="email"
              className="block text-left text-sm font-medium text-gray-900 dark:text-white"
            >
              {props.labels[3]}
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john.doe@company.com"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <div className="w-full ">
            <label
              htmlFor="phone"
              className="block text-left text-sm font-medium text-gray-900 dark:text-white"
            >
              {props.labels[4]}
            </label>
            <textarea
              id="phone"
              rows={4}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Let us know anythin you want"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <div className="w-full ">
            <label
              htmlFor="people-number"
              className="block text-left text-sm font-medium text-gray-900 dark:text-white"
            >
              {props.labels[5]}
            </label>
            <input
              type="number"
              id="people-number"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="1-20"
              required
            />
          </div>
          <div className="w-full ">
            <label
              htmlFor="bags-number"
              className="block text-left text-sm font-medium text-gray-900 dark:text-white"
            >
              {props.labels[6]}
            </label>
            <input
              type="number"
              id="bags-number"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="1-10"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <button
            type="button"
            className="focus:outline-none w-full text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            {props.labels[7]}
          </button>
        </div>
      </div>
    </div>
  );
};
