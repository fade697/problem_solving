const fs = require('fs');
const XLSX = require('xlsx');

fs.readFile('NodeJs_course_1.xlsx', function (err, data) {
    if (err) {
        console.error(err);
        return;
    }

    const workbook = XLSX.read(data, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(sheet);

    console.log(jsonData);
});
