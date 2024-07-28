const exportExcel = async (tableData: any) => {
  try {
    const response = await fetch("http://localhost:3001/api/exportExcel", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tableData),
    });

    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "exported_data.xlsx";
      a.click();
      window.URL.revokeObjectURL(url);
    } else {
      console.error("Export failed");
    }
  } catch (error) {
    console.log("Error while export Excel " + error);
  }
};

export default exportExcel;
