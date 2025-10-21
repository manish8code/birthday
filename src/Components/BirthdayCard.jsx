import "./birthdayCard.css";
export default () => (
  <div className="birthdayCard h-50 lg:w-72 w-64 ">
    <div className="cardFront">
      <h3 className="happy">HAPPY BIRTHDAY Love!</h3>
      <div className="balloons">
        <div className="balloonOne" />
        <div className="balloonTwo" />
        <div className="balloonThree" />
        <div className="balloonFour" />
        <div className="balloonFive" />
      </div>
    </div>
    <div className="cardInside ">
      <h3 className="back">Best Wishes from me!</h3>
      <p>Dear Pooja,</p>
      <p>
        Happy birthday!! I hope your day is filled with lots of love and
        laughter! May all of your birthday wishes come true.
      </p>
      <p className="name">Manish</p>
    </div>
  </div>
);
