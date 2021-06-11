import { getChartData } from './data'
import { chart } from "./chart";
import './styles.scss';

const tgChart = chart(document.getElementById('chart'), getChartData());
tgChart.init();