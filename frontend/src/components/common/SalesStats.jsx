// NODE_MODULES
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { red, blue } from "@mui/material/colors";

// LOCAL IMPORTS
import CardSkeleton from "./CardSkeleton";
import { green } from "@material-ui/core/colors";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const SalesStats = ({ mediaQueries }) => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        fill: true,
        label: "Total Order",
        borderWidth: 2,
        lineTension: 0.5,
        borderColor: [blue[700]],
        backgroundColor: [blue[50] + "44"],
        data: [15, 40, 30, 50, 47, 65, 49, 85, 80, 90, 100, 102],
      },
      {
        fill: true,
        label: "Canceled Order",
        borderWidth: 2,
        lineTension: 0.5,
        borderColor: [red[700]],
        backgroundColor: [red[50] + "44"],
        data: [0, 30, 20, 40, 30, 50, 45, 60, 55, 70, 65, 80],
      },
      {
        fill: true,
        label: "Sales",
        borderWidth: 2,
        lineTension: 0.5,
        borderColor: [green[700]],
        backgroundColor: [green[50] + "44"],
        data: [0, 15, 8, 20, 12, 30, 23, 40, 36, 50, 42, 60],
      },
    ],
  };

  return (
      <CardSkeleton mediaQueries={mediaQueries} title={"Sales Stats"}>
        <Line
          data={data}
          options={{
            responsive: true,
            plugins: {
              legend: {
                display: true,
              },
              title: {
                display: true,
                font: {
                  size: 20,
                  weight: 600,
                  family: "'Inter', serif",
                },
                text: "Monthly Sales Statistics",
              },
            },
          }}
        />
      </CardSkeleton>
  );
};

export default SalesStats;
