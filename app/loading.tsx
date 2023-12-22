const Loading = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#131313",
      }}
    >
      <div className="loader">
        <span className="loader-text">loading</span>
        <span className="load"></span>
      </div>
    </div>
  );
};

export default Loading;
