import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const SpaceParticles = () => {
    const particlesInit = async (main: any) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };

    return ( 
        <div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                style={{position:'absolute', inset:0, zIndex:-1}}
                width="100%"
                height="100%"
                options={{
                    fullScreen:false,
                    "particles": {
                      "number": {
                        "value": 150,
                        "density": {
                          "enable": true,
                          "value_area": 275
                        }
                      },
                      "color": {
                        "value": "#ffffff"
                      },
                      "shape": {
                        "type": "circle",
                        "stroke": {
                          "width": 0,
                          "color": "#000000"
                        },
                        "polygon": {
                          "nb_sides": 5
                        },
                      },
                      "opacity": {
                        "value": 0.5,
                        "random": true,
                        "anim": {
                          "enable": true,
                          "speed": 0.2,
                          "opacity_min": 0.2,
                          "sync": false
                        }
                      },
                      "size": {
                        "value": 1.1,
                        "random": true,
                        "anim": {
                          "enable": true,
                          "speed": 1,
                          "size_min": 0.5,
                          "sync": false
                        }
                      },
                      "line_linked": {
                        "enable": false,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                      },
                      "move": {
                        "enable": true,
                        "speed": 0.3,
                        "direction": "none",
                        "random": true,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                          "enable": false,
                          "rotateX": 600,
                          "rotateY": 1200
                        }
                      }
                    },
                    "interactivity": {
                      "detect_on": "canvas",
                      "events": {
                        "onhover": {
                          "enable": true,
                          "mode": "grab"
                        },
                        "onclick": {
                          "enable": true,
                          "mode": "push"
                        },
                        "resize": true
                      },
                      "modes": {
                        "grab": {
                          "distance": 120,
                          "line_linked": {
                            "opacity": 1
                          }
                        },
                        "bubble": {
                          "distance": 400,
                          "size": 40,
                          "duration": 2,
                          "opacity": 8,
                          "speed": 3
                        },
                        "repulse": {
                          "distance": 200,
                          "duration": 0.4
                        },
                        "push": {
                          "particles_nb": 4
                        },
                        "remove": {
                          "particles_nb": 2
                        }
                      }
                    },
                    "retina_detect": true
                  }}
            />
        </div>
     );
}
 
export default SpaceParticles;