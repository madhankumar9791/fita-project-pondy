import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoIosQuote } from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai";
import "./Clients.css";

const Clients = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const clients = [
    {
      name: "John Michel",
      position: "web developer",
      img_url:
        "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
      stars: 3,
      disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
    },
    {
      name: "Ravivarman",
      position: "Frontend developer",
      img_url:
        "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
      stars: 4,
      disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
    },
    {
      name: "John Michel",
      position: "web developer",
      img_url:
        "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
      stars: 5,
      disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
    },
    {
      name: "Jennifer",
      position: "Backend developer",
      img_url:
        "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
      stars: 5,
      disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
    },
  ];

  return (
    <div className="container" id="client">
      <div>
        <span>testimonials</span>
        <h1>what student say</h1>
      </div>
      <div className="container" id="testimonial">
        <Carousel
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          transitionDuration={500}
          dotListClass="custom-dot-list-style"
        >
          {clients.map((item, i) => (
            <div className="card-map">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-title">
                  <span className="quote">
                    <IoIosQuote />
                  </span>
                  <div>
                    {Array(item.stars)
                      .fill()
                      .map((_, i) => (
                        <span className="star" key={i}>
                          <AiOutlineStar />
                        </span>
                      ))}
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text">{item.disc}</p>
                </div>
                <div className="card-footer">
                  <img
                    src={item.img_url}
                    className="card-img-end"
                    alt={item.name}
                  />
                  <div className="details">
                    <h1>{item.name}</h1>
                    <p>{item.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>  
  );
};

export default Clients;
