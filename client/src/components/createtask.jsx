// creation and viewing of tasks
export function CreateTask(){
    return(
        <div class="w-full max-w-xs">

            {/* heading for creation/view task card */}
            <form class="bg-slate-600 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-5">
                    <h1 class="text-center text-slate-200 text-xl font-roboto font-light"> Enter or View a Task</h1>
                </div>

                {/* title label & input */}
                <div class="mb-4">
                    <label class="block font-roboto text-slate-200 text-sm mb-2 font-light" for="title">
                        Title
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-slate-800 leading-tight focus:outline-slate-800 focus-shadow-outline" id="title" type="text" placeholder="Title" />
                </div>

                {/* category label and input */}
                <div class="mb-4">
                    <label class="block font-roboto text-slate-200 text-sm mb-2 font-light" for="category">
                        Category
                    </label>
                    {/* category button */}
                    <div class="relative inline text-left">
                        <button class="rounded inline-flex  justify-center gap-x-1.5 font-light font-sm bg-slate-200 py-2 px-4 focus:outline-none focus:shadow-outline" type="button" id="category">
                            Options 
                            <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        {/* category dropdown menu */}
                        <div class="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                            {/* <div class="py-1" role="none">
                                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Work</a>
                                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Personal</a>
                                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Self-Care</a>
                            </div> */}
                        </div>
                    </div>
                    
                </div>

                {/* deadline label and input */}
                <div class="mb-4">
                    <label class="block font-roboto text-slate-200 text-sm mb-2 font-light" for="deadline">
                        Deadline
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-slate-800 leading-tight focus:outline-slate-800" id="deadline" type="date" placeholder="Date" />
                </div>

                {/* status label and input */}
                <div class="mb-4">
                    <label class="block font-roboto text-slate-200 text-sm mb-2 font-light" for="status">
                        Status
                    </label>
                    <div class="flex items-center" >
                        <input class="w-4 h-4 text-blue-500 bg-slate-200 rounded" id="status" type="checkbox" />
                        <label class="font-roboto text-xs font-light text-slate-200 ml-2" for="status">
                            Done
                        </label>
                    </div>
                </div>

                {/* notes label and input */}
                <div class="mb-4">
                    <label class="block font-roboto text-slate-200 text-sm mb-2 font-light" for="notes">
                        Notes
                    </label>
                    <textarea class="px-2 shadow rounded focus:outline-none" name="notes" id="" cols="26" rows="5" for="notes" placeholder="Additional Comments"></textarea>
                </div>

                {/* submit and clear buttons */}
                <div class="flex items-center justify-between">
                    <button class="bg-slate-300 hover:bg-green-500 text-slate-800 font-roboto font-light py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" id="submit">
                        Submit New Task
                    </button>
                    <button class="bg-slate-500 hover:bg-red-400 text-slate-200 font-roboto font-light py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" id="clear">
                        Clear
                    </button>
                </div>

            </form>
        </div>
    )
}