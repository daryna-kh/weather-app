type SvgProps = {
  deg: number;
};
export const Arrow = (props: SvgProps) => {
  const { deg } = props;
  return (
    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform={`rotate(${deg})`}>
      <path d="M12 6V18M12 6L7 11M12 6L17 11" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};
