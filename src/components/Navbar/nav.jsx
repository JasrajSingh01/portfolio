import "./nav.scss";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/sidebar";

function nav() {
  return (
    <div className="nav">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Jasraj Singh
        </motion.span>
        {/*         <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
        transition={{duration:0.5}}
        >
          JS
        </motion.span> */}
        <div className="social">
          <a href="#">
            <img src="/fb.svg" alt="" />
          </a>
          <a href="#">
            <img src="/instagram.svg" alt="" />
          </a>
          <a href="#">
            <img src="/dribble.svg" alt="" />
          </a>
          <a href="#">
            <img src="/youtube.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default nav;
