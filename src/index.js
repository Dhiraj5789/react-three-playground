import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";

function Overlay() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate3d(-50%,-50%,0)",
        }}
      >
        <h1
          style={{
            margin: 0,
            padding: 0,
            fontSize: "5em",
            fontWeight: 500,
            letterSpacing: "-0.05em",
          }}
        >
          <p>Hello 👋🏻</p>
          My name is Miles Teller
        </h1>
      </div>
    </div>
  );
}

ReactDOM.render(
  <>
    <App /> <Overlay />
  </>,
  document.getElementById("root")
);
