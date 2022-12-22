import placeholder from "../assets/images/placeholder.png";
import ns from "../assets/images/network.gif";
import pq from "../assets/images/plot.png";
import fmask from "../assets/images/fmask.png";
import anim from "../assets/images/vib.gif";
import pollute from "../assets/images/pollution.gif";
import dweb from "../assets/images/deepweb.gif";

const projectList = [
  {
    title: "Face Mask Detection",
    tag: "ML",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    cover: fmask,
    technologies: "Deep Learning, Computer Vision",
  },
  {
    title: "Sketch to Photo",
    tag: "ML",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    cover: pq,
    technologies: "GANs, Deep Learning, Python",
  },
  {
    title: "Vibration Analysis",
    tag: "DMW",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.w",
    cover: anim,
    technologies: "Fourier Transform, Signal Processing",
  },
  {
    title: "Network of Works",
    tag: "DMW",
    desc: "Network science approach to IT Job Market Analysis. Uncovered insights such as which \
    provide the best chance of transitioning to other high-paying jobs, \
    gaps on job-skill requirements, and essential skills to learn",
    cover: ns,
    technologies: "Web scraping, Link/Graph Analysis",
  },
  {
    title: "Itemset Mining",
    tag: "BD",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    cover: dweb,
    technologies: "Association Pattern Mining, Itemset",
  },
  {
    title: "Forecasting Air Pollution",
    tag: "BD",
    desc: "Processed 112GB of air quality data by building compute clusters using Spark. Explored various ML algorithms for forecasting.",
    cover: pollute,
    technologies: "Spark, AWS, Big Data LSTM, ML",
  },
];

export default projectList;
