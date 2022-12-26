import ns from "../../../assets/images/network.gif";
import pq from "../../../assets/images/plot.png";
import fmask from "../../../assets/images/fmask.png";
import anim from "../../../assets/images/vib.gif";
import pollute from "../../../assets/images/pollution.gif";
import dweb from "../../../assets/images/deepweb.gif";




const projectList = [
  {
    title: "Causal Analysis between Commmodity and US Stock Market",
    tag: "ML",
    desc: `This study aims to uncover causality between financial markets.     `,
    cover: pollute,
    technologies: "Dynamic Causal Modelling, Causal Analysis"
  },
  {
    
    title: "Face Mask Detection",
    tag: "ML",
    desc: `A mobile deep learning model that identifies three classes (with mask, no mask, and incorrectly worn). \
    Model has a 99.26% test accuracy with  about 2.3 million\
    parameters, making it lighter than other models in literature`,
    cover: fmask,
    technologies: "Deep Learning, MobileNetV2, Computer Vision",
  },
  {
    title: "Recreating Face Photos From Face Sketches",
    tag: "ML",
    desc: `Used a conditional generative adversarial network
    using a pix2pix architecture to train a model for sketch to photo translation.`,
    cover: pq,
    technologies: " GANs, pix2pix, U-NET",
  },

  {
    title: "Network of Works",
    tag: "DMW",
    desc:  `Network science approach to IT Job Market Analysis. Uncovered insights such as which \
    provide the best chance of transitioning to other high-paying jobs, \
    gaps on job-skill requirements, and essential skills to learn`,
    cover: ns,
    technologies: "Web scraping, Link/Graph Analysis",
  },
  {
    title: "Exploring Darknet Vendor Group Profiles",
    tag: "BD",
    desc: `Analyzed a collection of darknet marketplace HTML pages (~50 GB).
    Performed K-Means clustering and association rule mining to create vendor profiles.`,
    cover: dweb,
    technologies: "Association Rule Mining, Clustering, Dask",
    path: '/darkweb',

  },
  {
    title: "Forecasting Air Particle Pollutant Concentration",
    tag: "BD",
    desc: `Created a spark cluster  to process and analyze PM2.5 pollutant concentration (112GB of data). \
    Trained various ML models to predict future PM2.5 concentration.`,
    cover: pollute,
    technologies: "Cloud Computing, Spark, LSTM, Time Series"
  },
]
export default projectList;
