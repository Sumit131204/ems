import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5  mt-10 ">
      <div className="h-full flex-shrink-0 w-[300px] bg-yellow-400 rounded-xl "></div>
      <div className="h-full flex-shrink-0 w-[300px] bg-yellow-400 rounded-xl "></div>
      <div className="h-full flex-shrink-0 w-[300px] bg-yellow-400 rounded-xl "></div>
      <div className="h-full flex-shrink-0 w-[300px] bg-yellow-400 rounded-xl "></div>
    </div>
  );
}

export default TaskList
