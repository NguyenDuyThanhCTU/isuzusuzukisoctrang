const Button = ({ text, style }) => {
  const handleClick = () => {
    window.location.href = "http://zalo.me/0939699629";
  };
  return (
    <button
      className={`${style} rounded-[10px] font-poppins font-medium `}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
