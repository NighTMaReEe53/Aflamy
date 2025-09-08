interface IShow {
  show: boolean;
}

const Overlay = ({ show }: IShow) => {
  return (
    <div
      className={`fixed top-0 left-0 ${
        show ? "translate-x-[0]" : "translate-x-[-100%]"
      } transition-transform duration-500 w-[100%] h-[100%] bg-[#fff1]`}
    >
      Overlay
    </div>
  );
};

export default Overlay;
