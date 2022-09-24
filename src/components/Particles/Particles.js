import "./Particles.scss";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesJs = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div id="particles-js">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          detect_on: "canvas",
          pauseOnOutsideViewport: true,
          fpsLimit: 120,
          fullsreen: false,
          detectRetina: true,
          particles: {
            color: { value: "#ffffff" },
            move: {
              direction: "none",
              enable: true,
              outModes: "out",
              random: false,
              speed: 2,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 80 },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
        }}
      />
    </div>
  );
};

export default ParticlesJs;
