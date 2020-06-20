import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { ExclamationCircle, CircleFill, TypeH3 } from "react-bootstrap-icons";
import { Context } from "../Context";

export default function TableList() {
 const { DeleteUser, data } = useContext(Context);
 console.log("data", data);
 return (
  <Table striped bordered hover variant="light">
   <thead>
    <tr>
     <th>
      {" "}
      <ExclamationCircle />{" "}
     </th>
     <th>Name</th>
     <th>Profile Link</th>
     <th>Interest</th>
     <th>Folowers NO</th>
     <th>Country</th>
     <th>Data Added</th>
     <th>Note</th>
    </tr>
   </thead>
   <tbody>
    {data.map(t => (
     <tr>
      <td>
       {" "}
       <CircleFill style={{ fill: "green", width: "10px" }} />{" "}
      </td>{" "}
      <td>{t.name}</td> <td>{t.profileLink}</td> <td>{t.interest}</td>
      <td>{t.folowersNo}</td>
      <td>{t.country}</td>
      <td>{t.dataAdded}</td>
      <td>{t.note}</td>
      <td>
       <Button
        variant="outline-danger"
        size="sm"
        onClick={() => {
         DeleteUser(t.id);
        }}
       >
        delete
       </Button>
      </td>
     </tr>
    ))}
   </tbody>
  </Table>
 );
}
