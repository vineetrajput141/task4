import "./styles.css";
import react from "react";

export default function Card() {
  return (
    <div className="lorem">
      <div>
        <text className="batch">Batch Name | PHY_B1</text>
        <img
          className="image2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png"
          alt=""
        />
      </div>

      <div>
        <img
          className="image1"
          src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
          alt=""
        />
        <text className="font14">Marvin McKinney</text>
        <img
          className="image2"
          src="https://image.flaticon.com/icons/png/512/64/64508.png"
          alt=""
        />
      </div>

      <div>
        <img
          className="image1"
          src="https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"
          alt=""
        />
        <p className="font14">125 Students</p>
      </div>

      <div>
        <img
          className="image1"
          src="https://lh3.googleusercontent.com/proxy/_-ppVozcYSVMWKRLDO7WLuv1r9AKR81rN29OGnaNoQ7_r6sDgZJ9mh6qlT9kOQ3AWLVnFnYoLDPAa_82HVqaTcKHCzMsj9A5YCm7dlYbNhbbkibqh3GtK4NdJLP8"
          alt=""
        />
        <button type="button" className="button">
          View
        </button>
        <text className="font14">
          Upcoming Activity <br />
          Thursday,25th May <br />
        </text>

        <text className="fontbold">12:00 pm - 12:00 pm</text>
      </div>
    </div>
  );
}
