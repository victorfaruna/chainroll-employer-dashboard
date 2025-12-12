import BalanceTray from "@/src/components/ui/BalanceTray";
import ChartTray from "@/src/components/ui/ChartTray";
import TeamTray from "@/src/components/ui/TeamTray";

const DashboardPage = () => {
  return (
    <section>
      <div className="inner flex flex-col gap-3">
        <p className="text-[20px] text-secondary/90 font-semibold font-clash-display">
          Dashboard
        </p>
        <BalanceTray
          expenses={{ amount: "$15,585", growth: "+0.5%" }}
          income={{ amount: "$54,253", growth: "+0.5%" }}
          transactions={{ amount: "$15,585", growth: "+0.5%" }}
        />
        <ChartTray />
        <TeamTray />
      </div>
    </section>
  );
};

export default DashboardPage;
