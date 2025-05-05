import * as inv from "../util/investment";

export default function Result({ userInput }) {
  console.log(userInput);
  const results = inv.calculateInvestmentResults({
    initialInvestment: userInput["Initial Investment"],
    annualInvestment: userInput["Annual Investment"],
    expectedReturn: userInput["Expected Return"],
    duration: userInput["Duration"],
  });
  console.log(results);
  let initialInvestment;
  if (results.length > 0) {
    initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;
  }
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((resData) => {
          const totalInterest = resData.valueEndOfYear - resData.annualInvestment * resData.year - initialInvestment;
          const totalAmountInvested = resData.valueEndOfYear - totalInterest;
          return (
            <tr key={resData.year}>
              <td>{resData.year}</td>
              <td>{inv.formatter.format(resData.valueEndOfYear)}</td>
              <td>{inv.formatter.format(resData.interest)}</td>
              <td>{inv.formatter.format(totalInterest)}</td>
              <td>{inv.formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
