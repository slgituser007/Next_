const Wave = ({ Color }) => {
  return (
    <>
      <svg
        width="1920"
        height="1080"
        viewBox="0 0 1920 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1920 360L0 1080V0L1920 0V360Z"
          fill={Color ? Color : "blue"}
        />
      </svg>
    </>
  );
};

export default Wave;
