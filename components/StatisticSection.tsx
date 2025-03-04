import { staticticsData } from "@/constants/data";

const StatisticSection = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto ">
          {staticticsData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center space-y-2"
            >
              <h3 className="text-4xl font-bold">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticSection;
