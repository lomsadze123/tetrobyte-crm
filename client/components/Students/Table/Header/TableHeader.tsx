import headers from "@/data/tableTitles";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        {headers.map((header) => (
          <th key={header} className="px-4 py-2">
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
