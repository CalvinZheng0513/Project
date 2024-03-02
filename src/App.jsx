import React from 'react';
import './App.css';
import Card from './components/Card';

const App = () => {
  return (
    <div className="App">
      <h2>Top Restaurants</h2>
      <p>Come and look at some of the top restaurants in NYC.</p>
      <table>
        <tbody>
          <tr>
            <td><Card name="Le Bernardin" description="Upscale French seafood restaurant" location="155 W 51st St, New York, NY 10019" /></td>
            <td><Card name="Peter Luger Steak House" description="Iconic steakhouse serving dry-aged beef" location="178 Broadway, Brooklyn, NY 11211" /></td>
            <td><Card name="Katz's Delicatessen" description="Legendary Jewish deli famous for pastrami" location="205 E Houston St, New York, NY 10002" /></td>
          </tr>
          <tr>
            <td><Card name="Eleven Madison Park" description="High-end American restaurant with a tasting menu" location="11 Madison Ave, New York, NY 10010" /></td>
            <td><Card name="Per Se" description="Upscale French-American dining experience" location="10 Columbus Cir, New York, NY 10019" /></td>
            <td><Card name="Jean-Georges" description="French haute cuisine in a sleek, modern setting" location="1 Central Park W, New York, NY 10023" /></td>
          </tr>
          <tr>
            <td><Card name="Gramercy Tavern" description="Seasonal American fare & a bustling bar" location="42 E 20th St, New York, NY 10003" /></td>
            <td><Card name="Shake Shack" description="Modern-day roadside burger stand" location="Madison Square Park, New York, NY 10010" /></td>
            <td><Card name="Eataly NYC Flatiron" description="Italian marketplace with various eateries & food counters" location="200 5th Ave, New York, NY 10010" /></td>
          </tr>
          <tr>
            <td ><Card name="Joe's Pizza" description="Classic NYC pizzeria serving slices & pies since 1975" location="7 Carmine St, New York, NY 10014" /></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
