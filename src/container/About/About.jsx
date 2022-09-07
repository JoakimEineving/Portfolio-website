import { React} from "react";
import { motion } from "framer-motion";
import "./About.scss";



const About = () => {
  return (
    <div className="container-about">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="title"
      >
        <h1>About Me</h1>
        <p className="title-text">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur
        </p>
      </motion.div>
    </div>
  );
};
export default About;
