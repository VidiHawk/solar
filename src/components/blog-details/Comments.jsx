/* eslint-disable @next/next/no-img-element */
import Ratings from "./Ratings";

const Comments = () => {
  const commmetContent = [
    {
      id: 1,
      img: "3",
      name: "Andrea Martin",
      ratings: (
        <>
          <Ratings />
        </>
      ),
      data: "",
      text: `We have done business with this broker twice. Overall a good experience but slow to process transactions.`,
    },
    {
      id: 2,
      img: "4",
      name: "Pablo Ramirez",
      ratings: (
        <>
          <Ratings />
        </>
      ),
      data: "",
      text: `Will do business with this broker again`,
    },
  ];
  return (
    <>
      {commmetContent.map((item) => (
        <div className="mbp_first media" key={item.id}>
          <img
            src={`/assets/images/testimonial/${item.img}.jpg`}
            className="mr-3"
            alt={item.img}
          />
          <div className="media-body">
            <h4 className="sub_title mt-0">
              {item.name}
              <span className="sspd_review">
                <ul className="mb0 pl15">{item.ratings}</ul>
              </span>
            </h4>
            <a className="sspd_postdate fz14" href="#">
              {item.data}
            </a>
            <p className="fz14 mt10">{item.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Comments;
