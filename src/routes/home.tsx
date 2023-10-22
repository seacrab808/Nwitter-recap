import { auth } from "../firebase";

const Home = () => {
  const logOut = () => {
    auth.signOut();
  };

  return (
    <>
      <div>Home</div>
      <button onClick={logOut}>Log Out</button>
    </>
  );
};

export default Home;
