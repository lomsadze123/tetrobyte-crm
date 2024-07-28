import { Request, Response } from "express";
import excel from "exceljs";

const exportExcel = async (req: Request, res: Response) => {
  if (req.method === "POST") {
    const tableData = req.body;

    const workbook = new excel.Workbook();
    const worksheet = workbook.addWorksheet("Exported Data");

    // Add headers
    worksheet.addRow(Object.keys(tableData[0]));

    // Add data
    tableData.forEach((row: { [s: string]: unknown } | ArrayLike<unknown>) => {
      worksheet.addRow(Object.values(row));
    });

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=exported_data.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

export default exportExcel;
