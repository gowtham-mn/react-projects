import { useEffect, useState } from "react";
import User from "./user";
import './styles.css';

export default function GithubProfileFinder() {
  const [username, setUsername] = useState("gowtham-mn");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    fetchGithubUserData();
  };

  const fetchGithubUserData = async () => {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();

    if (data) {
      setUserData(data);
      setLoading(false);
      setUsername("");
    }
  };

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <h1>Loading Data ! Please wait</h1>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-by-username"
          placeholder="Search Github Username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}
