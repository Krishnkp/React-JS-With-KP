import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Read() {
  const [APIData, setAPIData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://652cf067f9afa8ef4b267db8.mockapi.io/kptrailblazers`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Checkbox Value", checkbox);
  };

  const getData = () => {
    axios
      .get(`https://652cf067f9afa8ef4b267db8.mockapi.io/kptrailblazers`)
      .then((getData) => {
        if (getData.data <= 0) {
          navigate("/");
        }
        setAPIData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(
        `https://652cf067f9afa8ef4b267db8.mockapi.io/kptrailblazers/${id}`
      )
      .then(() => {
        getData();
      });
  };

  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Checkbox Value</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row key={data.id}>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>
                  {data.checkbox ? "Checked" : "Unchecked"}
                </Table.Cell>

                <Table.Cell>
                  <Link to="/update">
                    <button
                      className="btn btn-outline-dark"
                      onClick={() => setData(data)}
                    >
                      Update
                    </button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => onDelete(data.id)}
                  >
                    Delete
                  </button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
