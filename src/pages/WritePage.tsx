const WritePage = () => {
  return (
    <div className="flex flex-col flex-1 gap-5 border border-gray-500 border-solid w-full h-full pt-[20px] pb-[20px] pl-[160px] pr-[160px] whitespace-nowrap min-w-[200px]">
      <div>
        <div className="text-4xl">Write a post</div>
        <div>Add a title and start writing</div>
      </div>
      <div className="flex flex-col ">
        <div>Title</div>
        <input className="border border-solid rounded-xl resize-none bg-gray-100 pl-2 pr-2 text-[16px] h-[40px] flex-grow-0"></input>
      </div>
      <div className="flex flex-col flex-grow border border-solid rounded-xl ">
        <textarea className="resize-none flex-grow"></textarea>
        <div className="flex justify-between">
          <div>button tags</div>
          <div>publish</div>
        </div>
      </div>
      <div />
    </div>
  );
};

export default WritePage;
