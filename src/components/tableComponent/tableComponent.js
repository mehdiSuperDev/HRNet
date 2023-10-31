import React from "react";
import "./tableComponent.css";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";

import DebouncedInput from "../deboucedInput/debouncedInput";

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

function TableComponent({ tableData }) {
  const [data] = React.useState(() => [...tableData]);
  const [sorting, setSorting] = React.useState([]);
  const [globalFilter, setGlobalFilter] = React.useState("");

  const table = useReactTable({
    data,
    columns,
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 10,
      },
    },
    state: {
      globalFilter: globalFilter,
      sorting,
    },
    onSortingChange: setSorting,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  return (
    <>
      <div className="preTable">
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 25, 50, 100].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <DebouncedInput
          value={globalFilter ?? ""}
          onChange={(value) => setGlobalFilter(value)}
          placeholder=""
        />
      </div>
      <div>
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder ? null : (
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? "cursor-pointer select-none"
                              : "",
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: " 🔼",
                            desc: " 🔽",
                          }[header.column.getIsSorted()] ?? null}
                        </div>
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row, index) => (
              <tr key={row.id} className={index % 2 === 0 ? "even" : "odd"}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <span>
            {table.getState().pagination.pageIndex *
              table.getState().pagination.pageSize +
              1}{" "}
            to{" "}
            {Math.min(
              table.getPageCount() * table.getState().pagination.pageSize,
              table.getFilteredRowModel().rows.length
            )}{" "}
            of {table.getFilteredRowModel().rows.length} entries
          </span>
          <button
            onClick={() => table.previousPage()}
            disabled={table.getCanPreviousPage() === false}
          >
            Previous
          </button>
          {table.getPageOptions().map((pageNumber, index) => (
            <button key={index} onClick={() => table.setPageIndex(index)}>
              {pageNumber + 1}
            </button>
          ))}
          <button
            onClick={() => table.nextPage()}
            disabled={table.getCanNextPage() === false}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default TableComponent;
