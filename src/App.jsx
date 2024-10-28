import Button from "@mui/material/Button";

function App() {
  const Click = () => {
    alert("Button was clicked!");
  };

  return (
    <div>
      <h1>Hello React!</h1>
      <div>
        <Button color="blue" onClick={Click}>
          Klick mich
        </Button>
      </div>
    </div>
  );
}

export default App;
