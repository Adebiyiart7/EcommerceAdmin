const customScrollBar = () => {
  return {
    "&::-webkit-scrollbar": {
      width: "0",
    },
    "&:hover": {
      "&::-webkit-scrollbar": {
        width: "0.4em",
      },
      "&::-webkit-scrollbar-track": {
        boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
        webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "var(--lightText)",
        // outline: '1px solid black'
      },
    },
  };
};

export default customScrollBar;
