interface WritingHeaderProps {
  handleSave: () => Promise<void>;
  handleCancel: () => void;
}

const WritingHeader = (props: WritingHeaderProps) => {
  return (
    <header className="flex h-20 w-full flex-shrink-0 items-center justify-end border-b border-solid border-[#E5E8EB] px-4">
      <div className="flex gap-2">
        <button
          type="button"
          className="header-button bg-[#A7A7A7] hover:bg-[#606060]"
          onClick={() => props.handleCancel()}
        >
          취소
        </button>
        <button
          type="button"
          className="header-button bg-[#808080] hover:bg-[#606060]"
          onClick={() => props.handleSave()}
        >
          저장
        </button>
      </div>
    </header>
  );
};

export default WritingHeader;
