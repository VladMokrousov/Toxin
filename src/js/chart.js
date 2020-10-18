import ApexCharts from "apexcharts";

export default () => {
  var options = {
    chart: {
      type: "donut",
    },
    colors: ["#ffd79c", "#6FCF97", "#BC9CFF", "#919191"],
    plotOptions: {
      pie: {
        startAngle: 180,
        expandOnClick: false,
        offsetX: -60,
        offsetY: -50,
        customScale: 0.6,
        donut: {
          size: "92%",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "20px",
              fontFamily: "Montserrat, Arial, sans-serif",
              fontWeight: 700,
              color: "#BC9CFF",
              offsetY: 20,
            },
            value: {
              show: true,
              fontSize: "40px",
              fontFamily: "Open Sans, Arial, sans-serif",
              fontWeight: 700,
              color: "#BC9CFF",
              offsetY: -20,
            },
            total: {
              show: true,
              showAlways: true,
              label: "ГОЛОСОВ",
              fontSize: "20px",
              fontFamily: "Montserrat, Arial, sans-serif",
              fontWeight: 700,
              color: "#BC9CFF",
            },
          },
        },
      },
    },
    legend: {
      fontSize: "14px",
      fontFamily: "Montserrat, Arial, sans-serif",
      fontWeight: 400,
      offsetX: 75,
      offsetY: -5,
      labels: {
        colors: "rgba(31, 32, 65, 0.75)",
      },
      markers: {
        width: 10,
        height: 10,
        fillColors: [
          "linear-gradient(180deg, #FFE39C 0%, #FFBA9C 100%)",
          "linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%)",
          "linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%)",
          "linear-gradient(180deg, #919191 0%, #3D4975 100%)",
        ],
        radius: 10,
        offsetX: "-2px",
      },
      onItemClick: {
        toggleDataSeries: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    series: [130, 65, 65, 0],
    labels: ["Великолепно", "Хорошо", "Удовлетворительно", "Разочарован"],
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);

  chart.render();
};
