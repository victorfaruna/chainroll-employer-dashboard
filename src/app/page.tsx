import BalanceTray from "../components/ui/BalanceTray";
import ChartTray from "../components/ui/ChartTray";

const HomePage = () => {
  return (
    <section>
      <div className="inner flex flex-col gap-4">
        <p className="text-[20px] text-secondary/90 font-semibold font-clash-display">
          Dashboard
        </p>
        <BalanceTray
          expenses={{ amount: "$15,585", growth: "+0.5%" }}
          income={{ amount: "$54,253", growth: "+0.5%" }}
          transactions={{ amount: "$15,585", growth: "+0.5%" }}
        />
        <ChartTray />
      </div>
    </section>
  );
};

export default HomePage;
