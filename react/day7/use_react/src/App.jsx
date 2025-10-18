import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        setData(response.data);

        console.log(response.data);
      } catch (error) {
        console.log(error);
        setError("Error while loading the data");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (error) return <h1>{error}</h1>;
  if (loading) return <p>loading.........</p>;
  return (
    <>
      {data.map((d) => (
        <li key={d.id}>
          {d.name}-{d.emali}
        </li>
      ))}
    </>
  );
}

export default App;
