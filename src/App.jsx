import benepassLogo from "./assets/logo.svg";
import visaLogo from "./assets/visa.svg";
import { useState } from "react";

function Card({
  cardInfo: { number, last4, expMonth, expYear, cvc, zipCode },
  detailsHidden,
}) {
  return (
    <div className="bg-[url('./assets/background.png')] p-5 max-w-sm rounded-xl shadow-md ">
      <div className="flex justify-between mb-6">
        <img alt="Benepass Logo" className="h-8" src={benepassLogo} />
        <div className="bg-white px-3 py-1 text-base text-black rounded-full">
          Virtual
        </div>
      </div>
      <div className="flex mb-6">
        <div className="flex items-center text-white text-2xl font-medium gap-4">
          {detailsHidden ? (
            <>
              <div className="font-medium">••••</div>
              <div className="font-medium">{last4}</div>
            </>
          ) : (
            <div>{number}</div>
          )}
        </div>
      </div>
      <div className="flex mb-6 gap-8">
        <div className="font-medium">
          <div className="text-xs text-[#D3D2DE]">VALID THRU</div>
          <div className="text-white text-lg">
            {expMonth}/{expYear}
          </div>
        </div>
        <div className="font-medium">
          <div className="text-xs text-[#D3D2DE]">CVC</div>
          <div className="text-white text-lg">
            {detailsHidden ? "•••" : cvc}
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-white text-base">ZIP {zipCode}</div>
        <img alt="Visa Logo" src={visaLogo} />
      </div>
    </div>
  );
}

const CheckboxLabel = ({
  checked,
  onChange,
  label = "",
}) => {
  return (
    <label className="flex items-center gap-4 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={`h-5 w-5 text-pink-600 accent-pink-600 rounded border-transparent bg-pink-600 ${
          checked ? "border-transparent bg-pink-600" : "border-gray-300"
        }`}
      />
      <div
        className={`font-medium text-base ${
          checked ? "text-pink-600 font-medium" : "text-gray-500 font-normal"
        }`}
      >
        {label}
      </div>
    </label>
  );
};

function App() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.currentTarget.checked);
  };

  const cardInfo = {
    number: "1232 2223 4432 1732",
    last4: "1732",
    expMonth: "8",
    expYear: "28",
    cvc: "345",
    zipCode: "66062",
  };

  return (
    <div className="p-4 sm:p-16">
      <div className="text-3xl font-medium">Flex card</div>
      <div className="text-xl font-normal">Used for pre-tax purchases</div>
      <div className="h-8" />
      <Card cardInfo={cardInfo} detailsHidden={!isChecked} />
      <div className="h-4" />
      <CheckboxLabel
        checked={isChecked}
        onChange={handleCheckboxChange}
        label="Show details"
      />
    </div>
  );
}

export default App;
