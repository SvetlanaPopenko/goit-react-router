import { Link, Outlet } from "react-router-dom";

export const About = () => {
  return (
    <div>
      <h1>About us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, nobis
        accusamus. At facere odio autem temporibus necessitatibus ab tempore ut
        velit minus voluptatum beatae consequuntur ullam facilis animi quod
        possimus assumenda non exercitationem sed architecto consectetur
        officia, a soluta consequatur? Adipisci reiciendis necessitatibus,
        voluptatum officia corporis recusandae suscipit hic natus!
          </p>
          <ul>
              <li>
                  <Link to="mission">Read about our mission</Link>
              </li>
              <li>
                  <Link to="team">Get to know the team</Link>
              </li>
              <li>
                  <Link to="reviews">Go through the reviews</Link>
              </li>
          </ul>
          <Outlet/>
    </div>
  );
};
