import { Table } from "antd";
import { Link, useNavigate, useParams } from "react-router-dom";
import EmployeeList from "./EmployeeList";
import { Button } from "antd";
import employeeList from "./data";

function Employee() {
  let navigate = useNavigate();
  let param = useParams();

  let result = [];
  if (param.Department) {
    result = EmployeeList.filter((x) => x.Department === param.Department);
  } else {
    result = employeeList;
  }

  const employeeDetailFunc = (e, i) => {
    e.preventDefault();
    navigate("/employee-detail", {
      replace: true,
      state: employeeList[i],
    });
  };

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstname",
      key: "firstname",
    },
    {
      title: "Last Name",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "Department",
      dataIndex: "Department",
      key: "Department",
    },
    {
      title: "Employee Detail",
      dataIndex: "employeeDetail",
      key: "employeeDetail",
      render: (t, r) => (
        <Button
          type="primary"
          onClick={(e) => employeeDetailFunc(e, EmployeeList.indexOf(r))}
        >
          Employee Detail
        </Button>
      ),
    },
  ];

  return (
    <div style={{ margin: "50px" }}>
      {/* <h2>Employee List</h2> */}
      {/* <Table dataSource={result} columns={columns} pagination={false} /> */}
      <br />
      <h2>Employee List </h2>
      <ul>
        {result.map((x, i) => (
          <li>
            {x.firstname} : {x.Department}
            {/* <Link
              to={`${x.id}/${x.firstname}/${x.lastname}/${x.position}/${x.department}`}
            > */}
            <input
              type="button"
              value="employee detail"
              style={{ marginLeft: "10px" }}
              onClick={(e) => employeeDetailFunc(e, i)}
            />
            {/* </Link> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Employee;