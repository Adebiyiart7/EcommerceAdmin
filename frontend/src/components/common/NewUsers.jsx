// NODE_MODULES
// LOCAL IMPORTS
import CardSkeleton from "./CardSkeleton";
import AppTable from "./Table";

const fields = [
  { name: "id", alias: "ID" },
  { name: "user", alias: "Full Name" },
  { name: "email", alias: "Email" },
  { name: "role", alias: "Role" },
  { name: "status", alias: "Status" },
  { name: "createdAt", alias: "CreatedAt" },
];

const createData = (id, user, email, role, status, createdAt) => {
  return { id, user, email, role, status, createdAt };
};

const NewUsers = ({ mediaQueries }) => {
  return (
    <CardSkeleton
      mediaQueries={mediaQueries}
      title={"New Users"}
      subTitle={"Last 10 New Users"}
    >
      <AppTable rows={rows} fields={fields} />
    </CardSkeleton>
  );
};

export default NewUsers;

const rows = [
  createData(
    "#12345",
    "Adeeyo Joseph Adebiyi",
    "adebiyiartworld@gmail.com",
    "Super Admin",
    "Active",
    "08/02/2022"
  ),
  createData(
    "#12346",
    "John Smith",
    "smith@gmail.com",
    "Admin",
    "Inactive",
    "15/04/2022"
  ),
  createData(
    "#12347",
    "Emmanuel Tony",
    "tony@gmail.com",
    "User",
    "Blocked",
    "18/04/2022"
  ),
  createData(
    "#12348",
    "Michael James",
    "james@gmail.com",
    "User",
    "Inactive",
    "16/06/2022"
  ),
  createData(
    "#12349",
    "Taylor Swift",
    "swift@gmail.com",
    "User",
    "Active",
    "25/09/2022"
  ),
];
