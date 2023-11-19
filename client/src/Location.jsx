//AIzaSyCzaZV9j_747A-c9_nAAMkIQq6U1kAfVD8
import { useState, useEffect, useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

function Location() {
  const [mapSrc, setMapSrc] = useState("");
  const destination = "13450+102+Dr,+Burnaby,+BC+V3T+0A3"; // SFU Burnaby
  const apiKey = "AIzaSyCzaZV9j_747A-c9_nAAMkIQq6U1kAfVD8";

  const init = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const origin = `${position.coords.latitude},${position.coords.longitude}`;
          const newMapSrc = `https://www.google.com/maps/embed/v1/directions?key=${apiKey}&origin=${origin}&destination=${destination}&mode=driving`;
          setMapSrc(newMapSrc);
        },
        () => {
          alert("Error getting your location");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4 bg-[#023047]">
      <h1 className="text-5xl text-white">Directions to SFU Surrey</h1>
      {!mapSrc && (
        <div className="w-16 h-16 border-8 border-gray-800 border-t-slate-200 rounded-full animate-spin z-20"></div>
      )}

      <iframe
        className="z-20"
        width="600"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src={mapSrc}
      ></iframe>

      <Particles
        className="z-10"
        options={{
          particles: {
            number: {
              value: 6,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#1b1e34",
            },
            shape: {
              type: "polygon",
              stroke: {
                width: 0,
                color: "#000",
              },
              polygon: {
                nb_sides: 6,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.3,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 160,
              random: false,
              anim: {
                enable: true,
                speed: 10,
                size_min: 40,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 200,
              color: "#ffffff",
              opacity: 1,
              width: 2,
            },
            move: {
              enable: true,
              speed: 8,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
                mode: "grab",
              },
              onclick: {
                enable: false,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
        init={init}
      />
    </div>
  );
}

export default Location;
