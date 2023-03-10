import { useState, useEffect } from "react";
import divider from "../images/pattern-divider-desktop.svg";
import diceIcon from "../images/icon-dice.svg";

function AdviceCard() {
  const [advice, setAdvice] = useState({});
  const [clicked, setClicked] = useState(false);

  console.log(advice);
  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => setAdvice(data.slip));
  }, [clicked]);

  return (
    <div className=" md:w-96 md:h-[16rem] w-64 h-56 text-center  rounded-lg bg-dark-grayish-blue p-5 flex flex-col justify-around relative">
      <h3 className="text-primary-neon  text-[13px] tracking-[3px] uppercase ">
        Advice #{advice.id}
      </h3>
      <div className="h-full flex items-center justify-center">
        <div>
          <p className="text-[#e2e8f0] font-bold md:text-base text-sm pb-4">
            {advice.advice}
          </p>
        </div>
      </div>

      <div className="w-full  mb-8 ">
        <img src={divider} alt="" />
      </div>
      <div className="absolute -bottom-5 right-1/2 translate-x-5">
        <button
          onClick={() => setClicked((prev) => !prev)}
          className="rounded-full bg-primary-neon p-3  cursor-pointer  hover:shadow-custom transition ease-in-out"
        >
          <img src={diceIcon} alt="button-icon" className="w-4" />
        </button>
      </div>
    </div>
  );
}

export default AdviceCard;
