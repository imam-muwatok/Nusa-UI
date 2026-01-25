import React, { useState, useMemo, useRef, useEffect } from "react";
import { ChevronUpIcon, ChevronDownIcon, ChevronUpDownIcon, MagnifyingGlassIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import Pagination from "./Pagination";
import Dropdown, { DropdownItem } from "./Dropdown";
import Button from "./Button";

export default function Table({
  columns,
  data,
  pagination = false,
  itemsPerPage = 10,
  searchable = false,
  exportable = false,
  onExport,
  variant = "default",
  resizable = false,
  editable = false,
  onDataChange,
  className = "",
}) {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [colWidths, setColWidths] = useState({});
  const resizingCol = useRef(null);
  const startX = useRef(0);
  const startWidth = useRef(0);
  
  const [tableData, setTableData] = useState(data);
  const [editingCell, setEditingCell] = useState(null);
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    setTableData(data);
  }, [data]);

  const handleMouseDown = (e, key) => {
    e.preventDefault();
    e.stopPropagation();
    resizingCol.current = key;
    startX.current = e.clientX;
    const th = e.target.closest('th');
    startWidth.current = th.getBoundingClientRect().width;
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.body.style.cursor = 'col-resize';
  };

  const handleMouseMove = (e) => {
    if (resizingCol.current) {
      const diff = e.clientX - startX.current;
      setColWidths(prev => ({
        ...prev,
        [resizingCol.current]: Math.max(50, startWidth.current + diff)
      }));
    }
  };

  const handleMouseUp = () => {
    resizingCol.current = null;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    document.body.style.cursor = '';
  };

  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleCellClick = (row, colKey) => {
    if (editable && variant === "excel") {
      setEditingCell({ row, colKey });
      setEditValue(row[colKey]);
    }
  };

  const handleSave = () => {
    if (!editingCell) return;
    
    const newData = tableData.map((item) => {
      if (item === editingCell.row) {
        return { ...item, [editingCell.colKey]: editValue };
      }
      return item;
    });

    setTableData(newData);
    setEditingCell(null);
    if (onDataChange) onDataChange(newData);
  };

  const handleExport = (type) => {
    // Export all data regardless of search filter or pagination
    const dataToExport = tableData;

    if (onExport) {
      onExport(type, dataToExport);
      return;
    }

    const timestamp = new Date().toISOString().split('T')[0];

    if (type === 'json') {
      const jsonContent = JSON.stringify(dataToExport, null, 2);
      const blob = new Blob([jsonContent], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `export-${timestamp}.json`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (type === 'csv') {
      const headers = columns.map(col => col.label).join(",");
      const rows = dataToExport.map(row => columns.map(col => {
        let val = row[col.key];
        if (typeof val === 'string' && val.includes(',')) val = `"${val}"`;
        return val;
      }).join(","));
      const csvContent = [headers, ...rows].join("\n");
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `export-${timestamp}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (type === 'pdf') {
      window.print();
    }
  };

  const filteredData = useMemo(() => {
    if (!searchTerm) return tableData;
    return tableData.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [tableData, searchTerm]);

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return filteredData;

    return [...filteredData].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  }, [filteredData, sortConfig]);

  const paginatedData = useMemo(() => {
    if (!pagination) return sortedData;
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedData.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedData, currentPage, itemsPerPage, pagination]);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const isExcel = variant === "excel";

  return (
    <div className={`w-full ${className}`}>
      {(searchable || exportable) && (
        <div className="mb-4 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          {searchable && (
            <div className={`relative ${exportable ? 'w-full sm:max-w-xs' : 'w-full'}`}>
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon className="h-5 w-5 text-zinc-400" />
              </div>
              <input
                type="text"
                className="block w-full rounded-xl border border-zinc-200 bg-zinc-50 py-2 pl-10 pr-3 text-sm outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white transition-all"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          )}
          {exportable && (
            <Dropdown 
              align="right"
              trigger={<Button variant="secondary" type="outline" className="flex items-center gap-2"><ArrowDownTrayIcon className="h-4 w-4" /> Export</Button>}
            >
              <DropdownItem onClick={() => handleExport('csv')}>Excel (CSV)</DropdownItem>
              <DropdownItem onClick={() => handleExport('json')}>JSON</DropdownItem>
              <DropdownItem onClick={() => handleExport('pdf')}>PDF (Print)</DropdownItem>
            </Dropdown>
          )}
        </div>
      )}
      <div className={`overflow-x-auto ${isExcel ? "border border-zinc-300 dark:border-zinc-700" : "rounded-xl border border-zinc-200 dark:border-zinc-800"}`}>
        <table className={isExcel ? "w-full text-left text-sm border-collapse" : "w-full text-left text-sm text-zinc-600 dark:text-zinc-400"}>
          <thead className={isExcel ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200" : "bg-zinc-50 text-xs uppercase text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"}>
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  scope="col"
                  style={{ width: colWidths[col.key] }}
                  className={`relative ${isExcel ? "border border-zinc-300 dark:border-zinc-700 px-3 py-2 font-semibold" : "px-6 py-3"} ${col.sortable ? "cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800" : ""}`}
                  onClick={() => col.sortable && handleSort(col.key)}
                >
                  <div className="flex items-center gap-1">
                    {col.label}
                    {col.sortable && (
                      <span className="text-zinc-400">
                        {sortConfig.key === col.key ? (
                          sortConfig.direction === "asc" ? (
                            <ChevronUpIcon className="h-3 w-3" />
                          ) : (
                            <ChevronDownIcon className="h-3 w-3" />
                          )
                        ) : (
                          <ChevronUpDownIcon className="h-3 w-3" />
                        )}
                      </span>
                    )}
                  </div>
                  {resizable && (
                    <div
                      className="absolute right-0 top-0 h-full w-1 cursor-col-resize hover:bg-cyan-500 z-10"
                      onMouseDown={(e) => handleMouseDown(e, col.key)}
                      onClick={(e) => e.stopPropagation()}
                    />
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={isExcel ? "bg-white dark:bg-zinc-900" : "divide-y divide-zinc-200 dark:divide-zinc-800 bg-white dark:bg-zinc-950"}>
            {paginatedData.length > 0 ? (
              paginatedData.map((row, rowIndex) => (
                <tr key={rowIndex} className={isExcel ? "hover:bg-blue-50 dark:hover:bg-blue-900/20" : "hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors"}>
                  {columns.map((col) => (
                    <td 
                      key={`${rowIndex}-${col.key}`} 
                      className={isExcel ? "border border-zinc-300 dark:border-zinc-700 px-3 py-2 whitespace-nowrap cursor-text" : "px-6 py-4 whitespace-nowrap"}
                      onClick={() => handleCellClick(row, col.key)}
                    >
                      {editingCell?.row === row && editingCell?.colKey === col.key ? (
                        <input
                          type="text"
                          autoFocus
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          onBlur={handleSave}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") handleSave();
                            if (e.key === "Escape") setEditingCell(null);
                          }}
                          className="w-full h-full bg-transparent outline-none p-0 m-0"
                        />
                      ) : (
                        col.render ? col.render(row[col.key], row) : row[col.key]
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="px-6 py-8 text-center text-zinc-500">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {pagination && totalPages > 1 && (
        <div className="mt-4 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
}