/* eslint-disable react/prop-types */
const Pill = ({ children, id }) => {
  return (
    <span
      key={id}
      className="my-1 mr-2 rounded bg-accentDark px-3 py-1 text-xs font-medium text-textLight ">
      {children}
    </span>
  );
};

export default Pill;
