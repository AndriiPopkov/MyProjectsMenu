import React from "react";
import { useState } from "react";

export default function Numerology() {
  function checkAndAdjustNumber(number) {
    while (number > 22) {
      number -= 22;
    }
    return number;
  }

  const [dplus, setDplus] = useState(15);
  const [mplus, setMplus] = useState(6);
  const [yplus, setYplus] = useState(1983);
  const position4 = dplus + mplus;

  let sumYear = yplus
    .toString()
    .split("")
    .reduce((acc, el) => acc + Number(el), 0);

  const position5 = mplus + sumYear;
  const position6 = position4 + position5;
  const position7 = dplus + position5;
  const position8 = mplus + position6;
  const positionA = dplus + position4;
  const positionB = mplus + position4;
  const positionC = mplus + position5;
  const positionD = sumYear + position5;
  const positionE = position4 + position6;
  const positionF = position6 + position5;

  return (
    <div className="container">
      <div className="position">
        <h2>Position 1</h2>
        <div className="day">
          <div
            className="minus"
            onClick={() => setDplus(dplus > 1 ? dplus - 1 : dplus)}
          >
            -1
          </div>
          <div className="data">{dplus}</div>
          <div className="plus" 
          onClick={() => setDplus(dplus < 31 ? dplus + 1 : dplus)}
          >
            +1
          </div>
        </div>
      </div>

      <div className="position">
        <h2>Position 2</h2>
        <div className="month">
          <button
            className="minus"
            onClick={() => setMplus(mplus > 1 ? mplus - 1 : mplus)}
          >
            -1
          </button>
          <div className="data">{mplus}</div>
          <button
            className="plus"
            onClick={() => setMplus(mplus === 12 ? mplus : mplus + 1)}
          >
            +1
          </button>
        </div>
      </div>

      <div className="position">
        <h2>Position 3</h2>
        <div className="year">
          <div className="btngroup">
            <div className="minus" onClick={() => setYplus(yplus - 10)}>
              -10
            </div>
            <div className="minus" onClick={() => setYplus(yplus - 1)}>
              -1
            </div>
          </div>
          <div className="data">{yplus}</div>
          <div className="btngroup">
            <div className="plus" onClick={() => setYplus(yplus + 1)}>
              +1
            </div>
            <div className="plus" onClick={() => setYplus(yplus + 10)}>
              +10
            </div>
          </div>
        </div>
      </div>

      <div className="position" style={{ display: "none" }}>
        <p>{dplus > 22 ? dplus - 22 : dplus}</p>
        <p>{mplus}</p>
        <p>{sumYear > 22 ? sumYear - 22 : sumYear}</p>
      </div>

      <div className="position">
        <h2>Position 4</h2>
        <div className="tire"></div>
        <p className="data">{position4 > 22 ? position4 - 22 : position4}</p>
      </div>

      <div className="position">
        <h2>Position 5</h2>
        <div className="tire"></div>
        <p className="data">{position5 > 22 ? position5 - 22 : position5}</p>
      </div>

      <div className="position">
        <h2>Position 6</h2>
        <div className="tire"></div>
        <p className="data">{checkAndAdjustNumber(position6)}</p>
      </div>

      <div className="position">
        <h2>Position 7</h2>
        <div className="tire"></div>
        <p className="data">{checkAndAdjustNumber(position7)}</p>
      </div>

      <div className="position">
        <h2>Position 8</h2>
        <div className="tire"></div>
        <p className="data">{checkAndAdjustNumber(position8)}</p>
      </div>

      <div className="ef">
        <div className="position">
          <h2>Position A</h2>
          <div className="tire"></div>
          <p className="data">{checkAndAdjustNumber(positionA)}</p>
        </div>

        <div className="position">
          <h2>Position B</h2>
          <div className="tire"></div>
          <p className="data">{checkAndAdjustNumber(positionB)}</p>
        </div>
      </div>

      <div className="ef">
        <div className="position">
          <h2>Position C</h2>
          <div className="tire"></div>
          <p className="data">{checkAndAdjustNumber(positionC)}</p>
        </div>

        <div className="position">
          <h2>Position D</h2>
          <div className="tire"></div>
          <p className="data">{checkAndAdjustNumber(positionD)}</p>
        </div>
      </div>

      <div className="ef">
        <div className="position">
          <h2>Position E</h2>
          <div className="tire"></div>
          <p className="data">{checkAndAdjustNumber(positionE)}</p>
        </div>

        <div className="position">
          <h2>Position F</h2>
          <div className="tire"></div>
          <p className="data">{checkAndAdjustNumber(positionF)}</p>
        </div>
      </div>
    </div>
  );
}
