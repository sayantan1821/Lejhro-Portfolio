import React,{useState,useEffect} from 'react'
import "../styles/Portfolio.css"
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio,
  } from "../data.js"
  import PortfolioList from './PortfolioList';

function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
      {
        id: "featured",
        title: "Featured",
      },
      {
        id: "web",
        title: "Web App",
      },
      {
        id: "mobile",
        title: "Mobile App",
      },
      {
        id: "design",
        title: "Design",
      }
    ];

    useEffect(() => {
        switch (selected) {
          case "featured":
            setData(featuredPortfolio);
            break;
          case "web":
            setData(webPortfolio);
            break;
          case "mobile":
            setData(mobilePortfolio);
            break;
          case "design":
            setData(designPortfolio);
            break;
          case "content":
            setData(contentPortfolio);
            break;
          default:
            setData(featuredPortfolio);
        }
      }, [selected]);

    return (
        <div className="porfolio">
             <h1 className="portfolio__header">Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
        </div>
    )
}

export default Portfolio
