export const Wave = ({ className }: { className: string }) => (
  <svg viewBox="0 0 100 20" className={className}>
    {/*<path fill="currentColor" opacity="0.5" d="M0 30 V15 Q30 3 60 15 V30z" />*/}
    <path fill="currentColor" d="M0 30 V12 Q30 17 55 12 T100 11 V30z" />
  </svg>
);
