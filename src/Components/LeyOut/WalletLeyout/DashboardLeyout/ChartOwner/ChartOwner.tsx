import { Card } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const ChartOwner = () => {
  const data = [
    { month: "Jan", Created: 30, Solved: 20 },
    { month: "Feb", Created: 20, Solved: 10 },
    { month: "Mar", Created: 50, Solved: 40 },
    { month: "Apr", Created: 40, Solved: 30 },
    { month: "May", Created: 60, Solved: 50 },
    { month: "Jun", Created: 70, Solved: 60 },
    { month: "Jul", Created: 90, Solved: 70 },
    { month: "Aug", Created: 80, Solved: 60 },
    { month: "Sep", Created: 60, Solved: 50 },
    { month: "Oct", Created: 50, Solved: 40 },
    { month: "Nov", Created: 40, Solved: 30 },
    { month: "Dec", Created: 30, Solved: 20 },
  ];

  const latestVisits = [
    { id: 1, name: "Esther Howard", specialty: "Dermatology", time: "8:44" },
    {
      id: 2,
      name: "Eleanor Pena",
      specialty: "Gastroenterology",
      time: "8:54",
    },
    {
      id: 3,
      name: "Cameron Keimasi",
      specialty: "Rheumatology",
      time: "12:23",
    },
    {
      id: 4,
      name: "Mohamad Afshari",
      specialty: "Rheumatology",
      time: "13:24",
    },
    {
      id: 5,
      name: "Martin Williamson",
      specialty: "Rheumatology",
      time: "17:42",
    },
  ];

  return (
    <div className="p-0 lg:flex grid gap-2">
      <Card title="Revenue Over Time" className="rounded-lg lg:w-2/3 w-full">
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Created" fill="rgb(255, 147, 24)" />
            <Bar dataKey="Solved" fill="rgb(0, 0, 0)" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Card
        className="lg:w-1/3 w-screen"
        style={{ minHeight: "410px" }}
        title="Session by Country"
      >
        <ul className="divide-y divide-gray-200">
          {latestVisits.map((visit) => (
            <li key={visit.id} className="flex justify-between py-2">
              <div>
                <div className="font-semibold">{visit.name}</div>
                <div className="text-sm text-gray-500">{visit.specialty}</div>
              </div>
              <div className="text-sm text-gray-400">{visit.time}</div>
            </li>
          ))}
        </ul>
        <p
          className="text-blue-400 text-center cursor-pointer"
          role="button"
          tabIndex={0}
          onClick={() => {
            console.log("View more clicked");
          }}
        >
          view more
        </p>
      </Card>
    </div>
  );
};

export default ChartOwner;
