const layoutStyle = {
  width: "100vw",
  height: "100vh",
};

const Component: React.FC<{}> = ({ children }) => (
  <div style={layoutStyle}>{children}</div>
);

export default Component;
