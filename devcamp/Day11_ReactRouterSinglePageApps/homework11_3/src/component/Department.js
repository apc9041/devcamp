import { Table, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import employeeList from "./data";

function Department() {
  const key = "department";

  const department = [
    ...new Map(employeeList.map((item) => [item[key], item])).values(),
  ];

  console.log(department);

  let departmentData = [];
  employeeList.map((x) => {
    !departmentData.find((y) => y === x.Department) &&
      departmentData.push(x.Department);
  });

  let navigate = useNavigate();

  const employeeListFunc = (e, Department) => {
    e.preventDefault();
    navigate(`/employee/${Department}`);
  };

  const employeeListFunc2 = (e, Department) => {
    e.preventDefault();
    navigate(`/employee/${Department.Department}`);
  };

  const columns = [
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Department Detail",
      dataIndex: "departmentDetail",
      key: "departmentDetail",
      render: (t, r) => (
        <Button type="primary" onClick={(e) => employeeListFunc2(e, r)}>
          Department Detail
        </Button>
      ),
    },
  ];

  return (
    <div style={{ margin: "50px" }}>
      {/* <Table dataSource={department} columns={columns} pagination={false} />
      <br /> */}
      <h2>ตัวอย่างอาจารย์</h2>
      <ul>
        {departmentData.map((x, i) => (
          <li>
            <p>
              {x}{" "}
              <input
                type="button"
                value="department detail"
                onClick={(e) => employeeListFunc(e, x)}
              />
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Department;