const Container = (props) => {
  return <div className={`max-w-[1140px] mx-auto ${props.className}`}>{props.children}</div>;
};

export default Container;
