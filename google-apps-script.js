/**
 * Google Apps Script — Aerobics युग Enrollment Data Receiver
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://script.google.com and create a new project
 * 2. Paste this entire code into the script editor
 * 3. Click Deploy → New Deployment
 * 4. Select "Web App"
 * 5. Set "Execute as" → Me
 * 6. Set "Who has access" → Anyone
 * 7. Click Deploy and copy the Web App URL
 * 8. Paste the URL into enroll.html and payment.html replacing 'YOUR_GOOGLE_APPS_SCRIPT_URL'
 */

const SHEET_NAME = 'Enrollments';

function doPost(e) {
    try {
        const sheet = getOrCreateSheet();
        const data = JSON.parse(e.postData.contents);

        // Check if this is an update (same phone + program already exists with empty txn)
        const existingRow = findExistingRow(sheet, data.phone, data.program);

        if (existingRow && data.transactionId) {
            // Update existing row with transaction info
            sheet.getRange(existingRow, 7).setValue(data.transactionId);   // Transaction ID
            sheet.getRange(existingRow, 8).setValue(data.screenshot || ''); // Screenshot
            sheet.getRange(existingRow, 10).setValue(new Date());           // Updated timestamp
        } else if (!existingRow) {
            // Add new row
            sheet.appendRow([
                data.name || '',
                data.phone || '',
                data.email || '',
                data.city || '',
                data.program || '',
                data.amount || '',
                data.transactionId || '',
                data.screenshot || '',
                data.status || 'Pending',
                new Date()  // Timestamp
            ]);
        }

        return ContentService.createTextOutput(
            JSON.stringify({ result: 'success' })
        ).setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        return ContentService.createTextOutput(
            JSON.stringify({ result: 'error', message: error.toString() })
        ).setMimeType(ContentService.MimeType.JSON);
    }
}

function doGet(e) {
    return ContentService.createTextOutput('Aerobics Yug API is running');
}

function getOrCreateSheet() {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
        sheet = ss.insertSheet(SHEET_NAME);
        // Add headers
        sheet.appendRow([
            'Name',
            'Phone',
            'Email',
            'City',
            'Program',
            'Amount',
            'Transaction ID',
            'Screenshot',
            'Payment Status',
            'Timestamp'
        ]);

        // Format header row
        const headerRange = sheet.getRange(1, 1, 1, 10);
        headerRange.setFontWeight('bold');
        headerRange.setBackground('#FF7F6E');
        headerRange.setFontColor('#FFFFFF');

        // Set column widths
        sheet.setColumnWidth(1, 180); // Name
        sheet.setColumnWidth(2, 120); // Phone
        sheet.setColumnWidth(3, 200); // Email
        sheet.setColumnWidth(4, 120); // City
        sheet.setColumnWidth(5, 200); // Program
        sheet.setColumnWidth(6, 100); // Amount
        sheet.setColumnWidth(7, 160); // Transaction ID
        sheet.setColumnWidth(8, 150); // Screenshot
        sheet.setColumnWidth(9, 130); // Payment Status
        sheet.setColumnWidth(10, 180); // Timestamp
    }

    return sheet;
}

function findExistingRow(sheet, phone, program) {
    if (!phone) return null;

    const data = sheet.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
        if (data[i][1] == phone && data[i][4] == program && !data[i][6]) {
            return i + 1; // 1-indexed row number
        }
    }
    return null;
}
