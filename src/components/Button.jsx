const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red">
      {label}
      {iconURL && (
        <img
          src={iconURL}
          className="ml-2 rounded-full w-h h-5"
          alt="arrow right icon"
        />
      )}
    </button>
  );
};

export default Button;
