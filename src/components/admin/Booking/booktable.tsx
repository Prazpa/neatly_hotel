"use client";
import React, { useState, useMemo, useCallback } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Pagination,
  SortDescriptor,
} from "@nextui-org/react";

import { SearchIcon } from "../../../assets/svg/SearchIcon";
import { columns, users } from "../../../providers/admin/Bookdata";

type UserType = (typeof users)[0];

const Booktable = () => {
  const [filterValue, setFilterValue] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "amount",
    direction: "ascending",
  });
  const [page, setPage] = useState(1);

  const pages = Math.ceil(users.length / rowsPerPage);
  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = useMemo(() => columns, [columns]);

  const filteredItems = useMemo(() => {
    let filteredUsers = [...users];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.customer_name.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }

    return filteredUsers;
  }, [users, filterValue]);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = useMemo(() => {
    return [...items].sort((a: UserType, b: UserType) => {
      const first = a[sortDescriptor.column as keyof UserType] as number;
      const second = b[sortDescriptor.column as keyof UserType] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = useCallback((user: UserType, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof UserType];
    return cellValue;
  }, []);

  const onSearchChange = useCallback((value?: string) => {
    setFilterValue(value || "");
    setPage(1);
  }, []);

  const topContent = useMemo(
    () => (
      <div className="flex flex-col gap-4">
        <div className="flex items-end justify-between gap-3">
          <span className="text-[20px] font-bold">Customer Booking</span>
          <Input
            isClearable
            classNames={{
              base: "w-[320px] h-[48px]",
              inputWrapper: "border-1",
            }}
            placeholder="Search"
            startContent={<SearchIcon className="text-default-300" />}
            value={filterValue}
            variant="bordered"
            onClear={() => setFilterValue("")}
            onValueChange={onSearchChange}
          />
        </div>
      </div>
    ),
    [filterValue, onSearchChange],
  );

  const bottomContent = useMemo(
    () => (
      <div className="flex items-center justify-center px-2 py-2">
        <Pagination
          showControls
          classNames={{ cursor: "bg-foreground text-background" }}
          color="default"
          isDisabled={hasSearchFilter}
          page={page}
          total={pages}
          variant="light"
          onChange={setPage}
        />
      </div>
    ),
    [page, pages, hasSearchFilter],
  );

  const classNames = useMemo(
    () => ({
      wrapper: ["max-h-[382px]", "max-w-3xl"],
      th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
      td: [
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:last:before:rounded-none",
        "group-data-[middle=true]:before:rounded-none",
        "group-data-[last=true]:first:before:rounded-none",
        "group-data-[last=true]:last:before:rounded-none",
      ],
    }),
    [],
  );

  return (
    <Table
      isCompact
      removeWrapper
      aria-label="Table with custom cells, pagination and sorting"
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      classNames={classNames}
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align="start"
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent="No users found" items={sortedItems}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default Booktable;
