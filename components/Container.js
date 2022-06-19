import { useState } from "react";

export default function Container({ theme, setTheme }) {
  const [light, setLight] = useState(false);
  const [dark, setDark] = useState(true);
  const [violette, setViolette] = useState(false);

  const [calculate, setCalculate] = useState("");
  const [result, setResult] = useState("");

  const ops = ["*", "/", ".", "-", "+"];

  const update = (value) => {
    if (value == "0" && calculate == "0" || value !=="."  && calculate == "0") {
      return;
    }
    if (value !=="-" &&
      (ops.includes(value) && calculate === "") || value !=="-" &&
      (ops.includes(value) && ops.includes(calculate.slice(-1)))
    ) {
      return;
    } else if (value !== "DEL") {
      setCalculate(calculate + value);
    }
    if (!ops.includes(value) && value !== "DEL") {
      setResult(eval(calculate + value));
    }

    if (value === "DEL") {
      const val = calculate.slice(0, -1);
      setCalculate(val);
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "DEL",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "/",
    "*",
  ];

  return (
    <div
      className={`flex flex-col space-y-4 ${
        theme === "Dark"
          ? "bg-Dark-main"
          : theme === "Light"
          ? "bg-Light-main"
          : theme === "Violette"
          ? "bg-Violette-main"
          : ""
      } w-[80%] sm:w-[50%] md:w-[40%] lg:w-[30%] h-[70%] p-2 px-5 rounded-xl`}
    >
      <div
        className={`${
          theme === "Dark"
            ? "text-Dark-white-text"
            : theme === "Light"
            ? "text-Light-blue-text"
            : theme === "Violette"
            ? "text-Violette-yellow-text"
            : ""
        } flex w-full justify-between items-center h-10 p-[2px]`}
      >
        <span className=" text-xl w-[20%]">Calc</span>
        <div className="flex justify-between w-[30%] h-[100%] items-center">
          <div className="p-1 h-[100%] w-[100%] flex flex-col items-center justify-end">
            <span className="text-[10px] flex-end">THEME</span>
          </div>
          <div className="flex flex-col w-[100%] h-[100%] items-center justify-center">
            <span className="text-[9px] w-[100%] h-2/6 flex items-center justify-around gap-1.5">
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </span>
            <span
              className={`${
                theme === "Dark"
                  ? "bg-Dark-toggle-background"
                  : theme === "Light"
                  ? "bg-Light-toggle-background"
                  : theme === "Violette"
                  ? "bg-Violette-toggle-background"
                  : ""
              } rounded-md text-[10px] w-[100%] h-4/6 flex items-center justify-around`}
            >
              <button
                onClick={(e) => {
                  setTheme(e.target.value);
                  setDark(true);
                  setLight(false);
                  setViolette(false);
                }}
                value={"Dark"}
                className={`${
                  dark === true ? "bg-Dark-red-key-background" : ""
                } outline-none rounded-full h-[50%] w-[25%] cursor-pointer`}
              ></button>
              <button
                onClick={(e) => {
                  setTheme(e.target.value);
                  setDark(false);
                  setLight(true);
                  setViolette(false);
                }}
                value={"Light"}
                className={`${
                  light === true ? "bg-Light-red-key-background" : ""
                } outline-none  rounded-full h-[50%] w-[25%] cursor-pointer`}
              ></button>
              <button
                onClick={(e) => {
                  setTheme(e.target.value);
                  setDark(false);
                  setLight(false);
                  setViolette(true);
                }}
                value={"Violette"}
                className={`${
                  violette === true ? "bg-Violette-red-key-background" : ""
                } outline-none rounded-full h-[50%] w-[25%] cursor-pointer`}
              ></button>
            </span>
          </div>
        </div>
      </div>
      <div
        className={`${
          theme === "Dark"
            ? "bg-Dark-screen"
            : theme === "Light"
            ? "bg-Light-screen"
            : theme === "Violette"
            ? "bg-Violette-screen"
            : ""
        } flex justify-center items-center w-full h-[20%] p-2 rounded-xl break-all overflow-hidden p-2`}
      >
        <div
          className={`p-1 flex items-center justify-end w-full h-[70%] text-xl ${
            theme === "Dark"
              ? "text-Dark-white-text"
              : theme === "Light"
              ? "text-Light-blue-text"
              : theme === "Violette"
              ? "text-Violette-yellow-text"
              : ""
          } font-bold `}
        >
          <div className="flex flex-col items-end">
            {result !== "" ? <span className="text-xs">({result})</span> : ""}{" "}
            {calculate}
          </div>
        </div>
      </div>
      <div
        className={`p-4 flex flex-col items-center justify-center ${
          theme === "Dark"
            ? "bg-Dark-keypad"
            : theme === "Light"
            ? "bg-Light-keypad"
            : theme === "Violette"
            ? "bg-Violette-keypad"
            : ""
        } w-full h-[65%] rounded-xl font-bold`}
      >
        <div className="w-full h-[80%] flex flex-wrap justify-center gap-2 p-1 overflow-hidden outline-none">
          {buttons.map((item, index) => {
            return (
              <button
                onClick={(e) => {
                  update(e.target.value.toString());
                }}
                key={index}
                value={item}
                className={`${
                  item == "DEL"
                    ? `text-sm ${
                        theme === "Dark"
                          ? "text-Dark-white-text shadow-Dark-blue-key-shadow bg-Dark-blue-key-background"
                          : theme === "Light"
                          ? "text-Light-white-text shadow-Light-blue-key-shadow bg-Light-blue-key-background"
                          : theme === "Violette"
                          ? "text-Violette-white-text shadow-Violette-blue-key-shadow bg-Violette-blue-key-background"
                          : ""
                      }`
                    : "text-xl"
                } font-bold shadow-sm ${
                  theme === "Dark" && item !== "DEL"
                    ? "bg-Dark-gray-key-background shadow-Dark-gray-key-shadow text-Dark-blue-text"
                    : theme === "Light" && item !== "DEL"
                    ? "bg-Light-gray-key-background shadow-Light-gray-key-shadow text-Light-blue-text"
                    : theme === "Violette" && item !== "DEL"
                    ? "bg-Violette-gray-key-background shadow-Violette-gray-key-shadow text-Violette-yellow-text"
                    : ""
                } cursor-pointer w-[22%] h-[22%] rounded-[0.3rem] flex items-center justify-center`}
              >
                {item}
              </button>
            );
          })}
        </div>
        <div className="mt-2 items-center w-full h-[20%] flex justify-center gap-2">
          <button
            onClick={() => {
              setCalculate("");
              setResult("");
            }}
            className={`shadow-sm shadow-Dark-blue-key-shadow ${
              theme === "Dark"
                ? "text-Dark-white-text shadow-Dark-blue-key-shadow bg-Dark-blue-key-background"
                : theme === "Light"
                ? "text-Light-white-text shadow-Light-blue-key-shadow bg-Light-blue-key-background"
                : theme === "Violette"
                ? "text-Violette-white-text shadow-Violette-blue-key-shadow bg-Violette-blue-key-background"
                : ""
            }  w-[45%] h-[85%] flex items-center rounded-[0.3rem] justify-center text-md text-Dark-white-text outline-none`}
          >
            RESET
          </button>
          <button
            onClick={() => {
              setCalculate(eval(calculate).toString());
            }}
            className={`shadow-sm shadow-Dark-red-key-shadow ${
              theme === "Dark"
                ? "bg-Dark-red-key-background"
                : theme === "Light"
                ? "bg-Light-red-key-background"
                : theme === "Violette"
                ? "bg-Violette-red-key-background"
                : ""
            } w-[45%] h-[85%] flex items-center rounded-[0.3rem] justify-center text-xl`}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
