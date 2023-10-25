import React from "react";
import "./tableComponent.css";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const defaultData = [
  {
    firstName: "mehdi",
    lastName: "raheemun",
    dateOfBirth: "10/03/2023",
    startDate: "10/10/2023",
    department: "Sales",
    street: "1",
    city: "rue",
    state: "AL",
    zipCode: "6000",
  },
  {
    firstName: "loic",
    lastName: "durand",
    dateOfBirth: "10/12/1954",
    startDate: "09/05/2023",
    department: "Marketing",
    street: "1 rue charles dupont",
    city: "paris",
    state: "AL",
    zipCode: "75017",
  },
  {
    firstName: "mehdi",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    department: "Sales",
    street: "",
    city: "",
    state: "AL",
    zipCode: "",
  },
  {
    firstName: "Sophie",
    lastName: "Martin",
    dateOfBirth: "05/06/1987",
    startDate: "12/01/2023",
    department: "HR",
    street: "2 avenue de la République",
    city: "lyon",
    state: "AL",
    zipCode: "69001",
  },
  {
    firstName: "Lucas",
    lastName: "Bernard",
    dateOfBirth: "03/15/1991",
    startDate: "03/18/2023",
    department: "Finance",
    street: "28 rue du Pont",
    city: "marseille",
    state: "AL",
    zipCode: "13003",
  },
  {
    firstName: "Emma",
    lastName: "Dubois",
    dateOfBirth: "11/23/1995",
    startDate: "06/09/2023",
    department: "Sales",
    street: "47 boulevard de Grenelle",
    city: "nice",
    state: "AL",
    zipCode: "06000",
  },
  {
    firstName: "Olivier",
    lastName: "Girard",
    dateOfBirth: "08/14/1984",
    startDate: "07/03/2023",
    department: "IT",
    street: "140 rue de la Gare",
    city: "nantes",
    state: "AL",
    zipCode: "44000",
  },
  {
    firstName: "Marie",
    lastName: "Lefevre",
    dateOfBirth: "09/05/1989",
    startDate: "02/14/2023",
    department: "Operations",
    street: "32 rue de l'Église",
    city: "strasbourg",
    state: "AL",
    zipCode: "67000",
  },
  {
    firstName: "Julien",
    lastName: "Roux",
    dateOfBirth: "01/19/1992",
    startDate: "04/22/2023",
    department: "Marketing",
    street: "89 avenue du Président Kennedy",
    city: "montpellier",
    state: "AL",
    zipCode: "34000",
  },
  {
    firstName: "Caroline",
    lastName: "Moreau",
    dateOfBirth: "04/07/1990",
    startDate: "05/29/2023",
    department: "HR",
    street: "67 rue des Poissonniers",
    city: "bordeaux",
    state: "AL",
    zipCode: "33000",
  },
  {
    firstName: "Thomas",
    lastName: "Lambert",
    dateOfBirth: "07/02/1988",
    startDate: "08/30/2023",
    department: "Finance",
    street: "25 rue de la Paix",
    city: "lille",
    state: "AL",
    zipCode: "59000",
  },
];

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("firstName", {
    header: () => "First Name",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("lastName", {
    header: () => "Last Name",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("startDate", {
    header: () => "Start Date",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("department", {
    header: () => "Department",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("dateOfBirth", {
    header: () => "Date Of Birth",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("street", {
    header: () => "Street",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("city", {
    header: () => "City",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("state", {
    header: () => "State",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("zipCode", {
    header: () => "Zip Code",
    cell: (info) => info.renderValue(),
  }),
];

function TableComponent() {
  const [data] = React.useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
  });

  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
