import Wrapper from "./Wrapper";
import Button from "./Button";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    // legend: {
    //   position: "5 t CO2",
    // },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "CO2",
      // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "#4dc66f",
    },
  ],
};

export default function DailyTarget() {
  return (
    <Wrapper>
      <div className='daily-wrapper'>
        <h1>Enter your trip details</h1>
        <h4>In order to slow climate change, your daily maximum amount of CO2 target is : 5 t CO2</h4>

        <div className='daily-target-chart-container'>
          <div className='daily-target-chart'>
            <Bar options={options} data={data} />
          </div>
          <p>You have used 2 t CO2 with this trip. You can use 3 t CO2 more before hitting your daily limit.</p>
          <Button to='/trip-details' text='add another' />
        </div>
      </div>
    </Wrapper>
  );
}
