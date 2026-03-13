import UserCard from "./components/UserCard";

function App() {

  const user = {
    name: "Iron Man",
    age: 45,
    city: "New York",
    Active: true,
    img: "https://i.ytimg.com/vi/IYr6tFo6r-Y/maxresdefault.jpg"
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#0f172a"
      }}
    >
      <UserCard user={user} />
    </div>
  );
}

export default App;