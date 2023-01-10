import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

const initMotionPath = () => {
  gsap.registerPlugin(MotionPathPlugin);
  let tween;

  const createTween = () => {
    let progress = tween ? tween.progress() : 0;
    tween && tween.progress(0).kill();

    tween = gsap.to("#dot", {
      motionPath: {
        path: "#path",
        align: "#path",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      duration: 8,
      repeat: -1,
      repeatDelay: 1,
      ease: "none",
    });

    tween.progress(progress);
  };
  createTween();
  window.addEventListener("resize", createTween);
};

document.addEventListener("DOMContentLoaded", initMotionPath);
