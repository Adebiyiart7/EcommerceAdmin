// NODE_MODULES
// LOCAL IMPORTS
import CardSkeleton from "./CardSkeleton"
import AppTable from "./Table";

const fields = [
  { name: "name", alias: "Order No" },
  { name: "user", alias: "Full Name" },
  { name: "amount", alias: "Amount (USD)" },
  { name: "status", alias: "Status" },
  { name: "date", alias: "Date" },
];

const createData = (name, user, amount, status, date) =>  {
  return { name, user, amount, status, date };
}

const rows = [
  createData('#12345', "Adeeyo Joseph Adebiyi", 29, "PAID", "08/02/2022"),
  createData('#12346', "John Smith", 43, "CANCELED", "15/04/2022"),
  createData('#12347', "Emmanuel Tony", 15, "PAID", "18/04/2022"),
  createData('#12348', "Michael James", 31, "CANCELED", "16/06/2022"),
  createData('#12349', "Taylor Swift", 50, "PAID", "25/09/2022"),
];

const RecentOrder = ({mediaQueries}) => {
  return (
    <CardSkeleton mediaQueries={mediaQueries} title={"Recent Order"} subTitle={"Last 10 Orders"}>
      <AppTable rows={rows} fields={fields} />
    </CardSkeleton>
  )
}

export default RecentOrder