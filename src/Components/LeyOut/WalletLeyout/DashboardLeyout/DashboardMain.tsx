import CercelChart from "./CercelChart/CercelChart";
import ChartOwner from "./ChartOwner/ChartOwner";
import UserWallet from "./UserWallet/UserWallet";

const DashboardMain = () => {
  return (
    <div className="lg:flex flex-col -mt-10 2xl:w-[124%] w-[90%] ">
      <UserWallet />
      <ChartOwner />
      <CercelChart />
    </div>
  );
};

export default DashboardMain;
