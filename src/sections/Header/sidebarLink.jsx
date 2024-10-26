import { motion } from 'framer-motion';
import { slide, scale } from './Header';

export default function Index({ data, isActive, setSelectedIndicator }) {
  const { title, href, index } = data;

  const handleScroll = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById(href.replace("#", ""));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setSelectedIndicator(href);
    }
  };

  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => { setSelectedIndicator(href) }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
      onClick={handleScroll}
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className="w-[10px] h-[10px] bg-white rounded-full absolute left-[-30px]"
      >
      </motion.div>
      <a href={href} onClick={handleScroll} className="text-white no-underline">{title}</a>
    </motion.div>
  );
}
