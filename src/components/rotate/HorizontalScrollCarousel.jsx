import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import './Rotate.css'

const Example = () => {
  return (
    <div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useViewportScroll();
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the screen size is mobile
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
  };

  // Listen for resize events
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["150%", "-110%"]);

  // Swipeable handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      // Swipe left logic
    },
    onSwipedRight: () => {
      // Swipe right logic
    },
  });

  return (
    <section ref={targetRef} className="hs-one" {...(isMobile && handlers)}>
      <div className="hs-two">
        <motion.div style={{ x }} className="hs-three">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="hs-four"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="hs-five"
      >
        <div className="overlay">
          <img src={card.icon} alt="Icon" className="icon" />
          <h3 className="title">{card.title}</h3>
          <p className="subtitle">{card.subtitle}</p>
        </div>
      </div>
      <div className="hs-six">
        <p className="hs-seven">
          {card.description}
        </p>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    icon: "/icons/icon1.png",
    title: "Title 1",
    subtitle: "Subtitle 1",
    description: "Description 1",
    id: 1,
  },
  {
    url: "/imgs/abstract/1.jpg",
    icon: "/icons/icon1.png",
    title: "Title 1",
    subtitle: "Subtitle 1",
    description: "Description 1",
    id: 1,
  },
  {
    url: "/imgs/abstract/1.jpg",
    icon: "/icons/icon1.png",
    title: "Title 1",
    subtitle: "Subtitle 1",
    description: "Description 1",
    id: 1,
  },
  {
    url: "/imgs/abstract/1.jpg",
    icon: "/icons/icon1.png",
    title: "Title 1",
    subtitle: "Subtitle 1",
    description: "Description 1",
    id: 1,
  },
  {
    url: "/imgs/abstract/1.jpg",
    icon: "/icons/icon1.png",
    title: "Title 1",
    subtitle: "Subtitle 1",
    description: "Description 1",
    id: 1,
  },
  {
    url: "/imgs/abstract/1.jpg",
    icon: "/icons/icon1.png",
    title: "Title 1",
    subtitle: "Subtitle 1",
    description: "Description 1",
    id: 1,
  },
];
