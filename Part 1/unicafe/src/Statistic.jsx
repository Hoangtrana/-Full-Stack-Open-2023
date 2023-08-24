import StatisticLine from "./StatisticLine";

const Statistic = (props) => (
  <div>
    <table>
      <tbody>
        <tr>
          <td>
            {" "}
            <StatisticLine text="good" />
          </td>
          <td>
            {" "}
            <StatisticLine value={props.good} />
          </td>
        </tr>
        <tr>
          <td>
            <StatisticLine text="neutral" />
          </td>
          <td>
            <StatisticLine value={props.neutral} />
          </td>
        </tr>
        <tr>
          <td>
            <StatisticLine text="bad" />
          </td>
          <td>
            <StatisticLine value={props.bad} />
          </td>
        </tr>
        <tr>
          <td>
            <StatisticLine text="all" />
          </td>
          <td>
            <StatisticLine value={props.all} />
          </td>
        </tr>
        <tr>
          <td>
            <StatisticLine text="average" />
          </td>
          <td>
            <StatisticLine value={props.average} />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Statistic;
