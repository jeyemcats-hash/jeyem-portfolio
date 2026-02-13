const NeuButton = ({ onClick = () => {} }) => {
  return (
    <div className="bg-white min-h-[20px]">
      <button 
        onClick={onClick}
        className="px-3 sm:px-6 py-2 sm:ml-5 text-sm font-bold bg-neutral-100 text-[#1e1e1e] w-fit transition-all shadow-[3px_3px_0px_#1e1e1e] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
      >
        My Projects
      </button>
    </div>
  );
};

export default NeuButton;


