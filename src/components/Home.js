const p1 = 'This app is intended to be an exercise for Development learning, it is created with create-react-app, an is using the react-router-dom as part of its structure. For the main contect, the Calculator, I am using Big.js library to help crating the logic; the logic files where provided to me.';
const p2 = 'I am also fetching a random quote in the Quote page, I choose the "Dad Jokes" category from the Ninjas API.';
const p3 = 'Please feel free tu use any code in this project,aswell as playing arround or maybe do some real calculations.';

const Home = () => (
  <main>
    <div className="home-text-container">
      <h2> Hello my friend!</h2>
      <p>{p1}</p>
      <p>{p2}</p>
      <p>{p3}</p>
    </div>
  </main>
);

export default Home;
