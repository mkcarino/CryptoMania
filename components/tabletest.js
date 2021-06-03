function TableTest() {
  return (
    <div className="overflow-x-auto">
      <div className="flex items-center justify-center overflow-hidden font-sans bg-gray-100 min-w-screen">
        <div className="w-full lg:w-5/6">
          <div className="my-6 bg-white rounded shadow-md">
            <table className="w-full table-auto min-w-max">
              <thead>
                <tr className="text-sm leading-normal text-gray-600 uppercase bg-gray-200">
                  <th className="px-6 py-3 text-left">Project</th>
                  <th className="px-6 py-3 text-left">Client</th>
                  <th className="px-6 py-3 text-center">Users</th>
                  <th className="px-6 py-3 text-center">Status</th>
                  <th className="px-6 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm font-light text-gray-600">
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="px-6 py-3 text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="mr-2">
                      
                      </div>
                      <span className="font-medium">React Project</span>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-left">
                    <div className="flex items-center">
                      <div className="mr-2">
                        <img
                          className="w-6 h-6 rounded-full"
                          src="https://randomuser.me/api/portraits/men/1.jpg"
                        />
                      </div>
                      <span>Eshal Rosas</span>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <div className="flex items-center justify-center">
                      <img
                        className="w-6 h-6 transform border border-gray-200 rounded-full hover:scale-125"
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                      />
                      <img
                        className="w-6 h-6 -m-1 transform border border-gray-200 rounded-full hover:scale-125"
                        src="https://randomuser.me/api/portraits/women/2.jpg"
                      />
                      <img
                        className="w-6 h-6 -m-1 transform border border-gray-200 rounded-full hover:scale-125"
                        src="https://randomuser.me/api/portraits/men/3.jpg"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <span className="px-3 py-1 text-xs text-purple-600 bg-purple-200 rounded-full">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <div className="flex justify-center item-center">
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </div>
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </div>
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                  <td className="px-6 py-3 text-left">
                    <div className="flex items-center">
                      <div className="mr-2">
                        <img
                          className="w-6 h-6"
                          src="https://img.icons8.com/color/100/000000/vue-js.png"
                        />
                      </div>
                      <span className="font-medium">Vue Project</span>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-left">
                    <div className="flex items-center">
                      <div className="mr-2">
                        <img
                          className="w-6 h-6 rounded-full"
                          src="https://randomuser.me/api/portraits/women/2.jpg"
                        />
                      </div>
                      <span>Anita Rodriquez</span>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <div className="flex items-center justify-center">
                      <img
                        className="w-6 h-6 transform border border-gray-200 rounded-full hover:scale-125"
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                      />
                      <img
                        className="w-6 h-6 -m-1 transform border border-gray-200 rounded-full hover:scale-125"
                        src="https://randomuser.me/api/portraits/women/2.jpg"
                      />
                      <img
                        className="w-6 h-6 -m-1 transform border border-gray-200 rounded-full hover:scale-125"
                        src="https://randomuser.me/api/portraits/men/3.jpg"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <span className="px-3 py-1 text-xs text-green-600 bg-green-200 rounded-full">
                      Completed
                    </span>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <div className="flex justify-center item-center">
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </div>
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </div>
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="px-6 py-3 text-left">
                    <div className="flex items-center">
                      <div className="mr-2">
                        <img
                          className="w-6 h-6"
                          src="https://img.icons8.com/color/100/000000/angularjs.png"
                        />
                      </div>
                      <span className="font-medium">Angular Project</span>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-left">
                    <div className="flex items-center">
                      <div className="mr-2">
                        <img
                          className="w-6 h-6 rounded-full"
                          src="https://randomuser.me/api/portraits/men/3.jpg"
                        />
                      </div>
                      <span>Taylan Bush</span>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <div className="flex items-center justify-center">
                      <img
                        className="w-6 h-6 transform border border-gray-200 rounded-full hover:scale-125"
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                      />
                      <img
                        className="w-6 h-6 -m-1 transform border border-gray-200 rounded-full hover:scale-125"
                        src="https://randomuser.me/api/portraits/women/2.jpg"
                      />
                      <img
                        className="w-6 h-6 -m-1 transform border border-gray-200 rounded-full hover:scale-125"
                        src="https://randomuser.me/api/portraits/men/3.jpg"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <span className="px-3 py-1 text-xs text-yellow-600 bg-yellow-200 rounded-full">
                      Scheduled
                    </span>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <div className="flex justify-center item-center">
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </div>
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </div>
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                  <td className="px-6 py-3 text-left">
                    <div className="flex items-center">
                      <div className="mr-2">
                        <img
                          className="w-6 h-6"
                          src="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/laravel-64.png"
                        />
                      </div>
                      <span className="font-medium">Laravel Project</span>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-left">
                    <div className="flex items-center">
                      <div className="mr-2">
                        <img
                          className="w-6 h-6 rounded-full"
                          src="https://randomuser.me/api/portraits/men/4.jpg"
                        />
                      </div>
                      <span>Tarik Novak</span>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <div className="flex items-center justify-center">
                      <img
                        className="w-6 h-6 transform border border-gray-200 rounded-full hover:scale-125"
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                      />
                      <img
                        className="w-6 h-6 -m-1 transform border border-gray-200 rounded-full hover:scale-125"
                        src="https://randomuser.me/api/portraits/women/2.jpg"
                      />
                      <img
                        className="w-6 h-6 -m-1 transform border border-gray-200 rounded-full hover:scale-125"
                        src="https://randomuser.me/api/portraits/men/3.jpg"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <span className="px-3 py-1 text-xs text-red-600 bg-red-200 rounded-full">
                      Pending
                    </span>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <div className="flex justify-center item-center">
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </div>
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </div>
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="px-6 py-3 text-left">
                    <div className="flex items-center">
                      <div className="mr-2">
                        <img
                          className="w-6 h-6"
                          src="https://img.icons8.com/color/48/000000/git.png"
                        />
                      </div>
                      <span className="font-medium">GIT Project</span>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-left">
                    <div className="flex items-center">
                      <div className="mr-2">
                        <img
                          className="w-6 h-6 rounded-full"
                          src="https://randomuser.me/api/portraits/men/5.jpg"
                        />
                      </div>
                      <span>Oscar Howard</span>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <div className="flex items-center justify-center">
                      <img
                        className="w-6 h-6 transform border border-gray-200 rounded-full hover:scale-125"
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                      />
                      <img
                        className="w-6 h-6 -m-1 transform border border-gray-200 rounded-full hover:scale-125"
                        src="https://randomuser.me/api/portraits/women/2.jpg"
                      />
                      <img
                        className="w-6 h-6 -m-1 transform border border-gray-200 rounded-full hover:scale-125"
                        src="https://randomuser.me/api/portraits/men/3.jpg"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <span className="px-3 py-1 text-xs text-purple-600 bg-purple-200 rounded-full">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <div className="flex justify-center item-center">
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </div>
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </div>
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                  <td className="px-6 py-3 text-left">
                    <div className="flex items-center">
                      <div className="mr-2">
                        <img
                          className="w-6 h-6"
                          src="https://img.icons8.com/color/48/000000/nodejs.png"
                        />
                      </div>
                      <span className="font-medium">NodeJS Project</span>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-left">
                    <div className="flex items-center">
                      <div className="mr-2">
                        <img
                          className="w-6 h-6 rounded-full"
                          src="https://randomuser.me/api/portraits/women/6.jpg"
                        />
                      </div>
                      <span>Melisa Moon</span>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <div className="flex items-center justify-center">
                      <img
                        className="w-6 h-6 transform border border-gray-200 rounded-full hover:scale-125"
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                      />
                      <img
                        className="w-6 h-6 -m-1 transform border border-gray-200 rounded-full hover:scale-125"
                        src="https://randomuser.me/api/portraits/women/2.jpg"
                      />
                      <img
                        className="w-6 h-6 -m-1 transform border border-gray-200 rounded-full hover:scale-125"
                        src="https://randomuser.me/api/portraits/men/3.jpg"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <span className="px-3 py-1 text-xs text-yellow-600 bg-yellow-200 rounded-full">
                      Scheduled
                    </span>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <div className="flex justify-center item-center">
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </div>
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </div>
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="px-6 py-3 text-left">
                    <div className="flex items-center">
                      <div className="mr-2">
                        <img
                          className="w-6 h-6"
                          src="https://img.icons8.com/color/48/000000/javascript.png"
                        />
                      </div>
                      <span className="font-medium">JavaScript Project</span>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-left">
                    <div className="flex items-center">
                      <div className="mr-2">
                        <img
                          className="w-6 h-6 rounded-full"
                          src="https://randomuser.me/api/portraits/women/7.jpg"
                        />
                      </div>
                      <span>Cora Key</span>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <div className="flex items-center justify-center">
                      <img
                        className="w-6 h-6 transform border border-gray-200 rounded-full hover:scale-125"
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                      />
                      <img
                        className="w-6 h-6 -m-1 transform border border-gray-200 rounded-full hover:scale-125"
                        src="https://randomuser.me/api/portraits/women/2.jpg"
                      />
                      <img
                        className="w-6 h-6 -m-1 transform border border-gray-200 rounded-full hover:scale-125"
                        src="https://randomuser.me/api/portraits/men/3.jpg"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <span className="px-3 py-1 text-xs text-red-600 bg-red-200 rounded-full">
                      Pending
                    </span>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <div className="flex justify-center item-center">
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </div>
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </div>
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                  <td className="px-6 py-3 text-left">
                    <div className="flex items-center">
                      <div className="mr-2">
                        <img
                          className="w-6 h-6"
                          src="https://img.icons8.com/color/48/000000/php.png"
                        />
                      </div>
                      <span className="font-medium">PHP Project</span>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-left">
                    <div className="flex items-center">
                      <div className="mr-2">
                        <img
                          className="w-6 h-6 rounded-full"
                          src="https://randomuser.me/api/portraits/men/8.jpg"
                        />
                      </div>
                      <span>Kylan Dorsey</span>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <div className="flex items-center justify-center">
                      <img
                        className="w-6 h-6 transform border border-gray-200 rounded-full hover:scale-125"
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                      />
                      <img
                        className="w-6 h-6 -m-1 transform border border-gray-200 rounded-full hover:scale-125"
                        src="https://randomuser.me/api/portraits/women/2.jpg"
                      />
                      <img
                        className="w-6 h-6 -m-1 transform border border-gray-200 rounded-full hover:scale-125"
                        src="https://randomuser.me/api/portraits/men/3.jpg"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <span className="px-3 py-1 text-xs text-green-600 bg-green-200 rounded-full">
                      Completed
                    </span>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <div className="flex justify-center item-center">
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </div>
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </div>
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableTest;
