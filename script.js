document.getElementById('generateTemplate').addEventListener('click', generateTemplate);

function generateTemplate() {
    const orgColumns = ['First Name', 'Last Name', 'DOB', 'City'];

    const wsData = [orgColumns]; 

    const ws = XLSX.utils.aoa_to_sheet(wsData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Organization Data");

    const fileName = "OrganizationData_Template_" + new Date().toISOString().slice(0, 10) + ".xlsx";

    const blob = XLSX.write(wb, { bookType: 'xlsx', type: 'blob' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
}
