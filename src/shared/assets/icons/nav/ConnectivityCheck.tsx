export const ConnectivityCheck: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 15H17C18.105 15 19 14.105 19 13V10C19 8.895 18.105 8 17 8H16C15.448 8 15 8.448 15 9V14C15 14.552 15.448 15 16 15ZM16 15V16C16 17.105 15.105 18 14 18H11.875M16.5 8V7.5C16.5 3.91 13.59 1 10 1C6.41 1 3.5 3.91 3.5 7.5V8M11.875 18C11.875 17.31 11.315 16.75 10.625 16.75H9.375C8.685 16.75 8.125 17.31 8.125 18C8.125 18.69 8.685 19.25 9.375 19.25H10.625C11.315 19.25 11.875 18.69 11.875 18ZM4 15H3C1.895 15 1 14.105 1 13V10C1 8.895 1.895 8 3 8H4C4.552 8 5 8.448 5 9V14C5 14.552 4.552 15 4 15Z"
        stroke="#434B74"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
