import Header from "../Header/Header";
import BuySellCurrencies from "./BuySellCurrencies/BuySellCurrencies";
import ChartCurrencies from "./ChartCurrencies/ChartCurrencies";
import Currencies from "./Currencies/Currencies";
import SwapCurrencies from "./SwapCurrencies/SwapCurrencies";

const Main = () => {
  return (
    <div className="m-0  box-border">
      <Header />
      <div className="flex flex-col ">
        <div className=" gap-4 justify-between items-center flex">
          <div className="flex flex-col gap-4">
            <BuySellCurrencies />
            <SwapCurrencies />
          </div>
          <ChartCurrencies />
        </div>
      </div>
      <div className="w-screen gap-4 justify-between items-center flex">
        <Currencies />
      </div>
    </div>
  );
};

export default Main;
