export const Wallet: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.026 4.27647H11.6667C12.4033 4.27647 13 4.87314 13 5.6098V11.6665C13 12.3998 12.4 12.9998 11.6667 12.9998H2.33333C1.59667 12.9998 1 12.4031 1 11.6665V4.52714C1 3.97247 1.34333 3.4758 1.86267 3.2798L8.76467 0.673803C9.20067 0.509136 9.66667 0.831136 9.66667 1.29714V4.2758"
        stroke="#E12828"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
