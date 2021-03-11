export const Wave = ({ className }: { className: string }) => (
  <svg viewBox="0 0 100 10" className={className}>
    {/*<path fill="currentColor" opacity="0.5" d="M0 30 V15 Q30 3 60 15 V30z" />*/}
    {/*<path fill="currentColor" d="M0 20 V12 Q30 17 55 12 T100 11 V30z" />*/}
    <path fill="currentColor" d="M0 25 V5 Q20 12 55 8 T100 7 V30z" />
  </svg>
);
