import ns from "../../../assets/images/network.png";
import sketch from "../../../assets/images/sketch_final.gif";
import fmask from "../../../assets/images/facemask.gif";
import pollute from "../../../assets/images/pollution.gif";
import dweb from "../../../assets/images/deepweb.gif";
import nba from "../../../assets/images/nba.webp";
import vib from "../../../assets/images/vib.gif";
import stocks from "../../../assets/images/stocks.gif";



const projectList = [
  {
    title: "Causal Analysis between Commmodity and US Stock Market",
    tag: "ML",
    desc: <div>This study aims to uncover granger causality between financial markets.</div>,
    cover: stocks,
    technologies: "Granger Causality, Time Series Analysis"
  },
  {
    
    title: "WearMaskNet: Real-Time Face Mask Detection",
    tag: "ML",
    desc: <div>A mobile deep learning model that identifies three classes (with mask, no mask, and incorrectly worn).
    Model has a <strong>99.26%</strong> test accuracy with  about 2.3 million
    parameters, making it <strong>lighter</strong> than other models in literature</div>,
    cover: fmask,
    technologies: "Deep Learning, MobileNetV2, Computer Vision",
  },
  {
    title: "Recreating Face Photos From Face Sketches",
    tag: "ML",
    desc: <div>Used a <strong>conditional generative adversarial network</strong> 
    {" "} using a <strong>pix2pix</strong> architecture to train a model for sketch to photo translation.</div>,
    cover: sketch,
    technologies: " GANs, pix2pix, U-NET",
  },
  {
    title: "Predicting who would win in an NBA match?",
    tag: "ML",
    desc: <div>Built an ML model that predicts who would win in an nba match up based on current stats.</div>,
    cover: nba,
    technologies: "Machine Learning, Simulations"
  },

  {
    title: "Analyzing vibration data",
    tag: "DMW",
    desc: <div>Analyze vibration data.</div>,
    cover: vib,
    technologies: "Fourier Analysis, Machine Learning"
  },

  {
    title: "Network of Works: A Network Science Approach to IT Job Market Analysis.",
    tag: "DMW",
    desc:  <div>Network science approach to IT Job Market Analysis. Uncovered insights such as which
    provide the best chance of transitioning to other high-paying jobs, 
    gaps on job-skill requirements, and essential skills to learn</div>,
    cover: ns,
    technologies: "Web scraping, Link/Graph Analysis",
  },
  {
    title: "Exploring Darknet Vendor Group Profiles",
    tag: "BD",
    desc: <div>Analyzed a collection of darknet marketplace HTML pages <strong>(50 GB)</strong>.
    Performed <strong>K-Means clustering and association rule mining</strong> to create vendor profiles.</div>,
    cover: dweb,
    technologies: "Association Rule Mining, Clustering, Dask, Parallel Computing",
    path: '/darkweb',

  },
  {
    title: "Forecasting Air Particle Pollutant Concentration",
    tag: "BD",
    desc: <div>Created a spark cluster  to process and analyze PM2.5 pollutant concentration <strong>(112GB of data)</strong>.
    Trained various ML models to <strong>predict future PM2.5 concentration.</strong></div>,
    cover: pollute,
    technologies: "Cloud Computing, Spark, LSTM, Time Series"
  },
]
export default projectList;
