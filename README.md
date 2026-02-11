# 🥔 Schmidt Potato System

**Integrated Warehouse & Shipping Management System**

A comprehensive, web-based solution for potato warehouse operations, shipping, labeling, and traceability. Built with pure HTML/JavaScript for maximum portability and ease of use.

---

## 🚀 Quick Start

### **Option 1: Access Online (Easiest)**
Visit the live system:
👉 **https://bluetagseed.github.io/schmidt-potato-system/dashboard.html**

No installation required! Works on any device with a web browser.

### **Option 2: Run Locally**
1. Download the repository (Click green "Code" button → "Download ZIP")
2. Extract the ZIP file to your computer
3. Open `dashboard.html` in any web browser
4. Done! No installation, no dependencies needed.

### **Option 3: Clone with Git**
```bash
git clone https://github.com/bluetagseed/schmidt-potato-system.git
cd schmidt-potato-system
# Open dashboard.html in your browser
```

---

## 📦 System Features

### **📊 Central Dashboard**
- Real-time statistics and system overview
- Quick access to all modules
- Data export to Excel (XLSX format)
- Centralized data management

### **🏭 Warehouse Operations**
- **Pick List Generator** - Create warehouse pick lists with smart product merging
- **Scanner App** - Mobile barcode scanning with Eyoyo scanner support
- **Pallet Packing Labels** - Internal labels with auto-incrementing IDs and SSCC

### **🏷️ Label Generation**
- **PTI Case Labels** - PTI-compliant labels with smart PLU/UPC learning
- **Pallet Shipping Labels** - Customer shipping labels with delivery info

### **🚛 Shipping & Loading**
- **Truck Loading Chart** - Visual 20-pallet placement tracker
- **Bill of Lading (BOL)** - Complete BOL with mobile signature capture

### **💾 Data Management**
- Export all data to Excel for compliance and record-keeping
- LocalStorage-based data persistence
- Traceability reports

---

## 🛠️ Technical Details

### **Technology Stack**
- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Data Storage**: Browser LocalStorage
- **Dependencies**: 
  - SheetJS (XLSX) for Excel export
  - JsBarcode for barcode generation
  - QRCode.js for QR code generation
- **No backend required** - runs entirely in the browser

### **Browser Compatibility**
- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### **Key Files**
- `dashboard.html` - Main dashboard and system hub
- `data-hub.js` - Centralized data management system
- `pick-list.html` - Pick list generator
- `scanner-app.html` - Mobile warehouse scanner
- `pallet-packing.html` - Internal packing labels
- `PTI.html` - PTI case label generator
- `pallet-shipping.html` - Customer shipping labels
- `truck-loading-chart.html` - Truck loading tracker
- `bol.html` - Bill of lading generator
- `signature-capture.html` - Mobile signature capture

---

## 📱 Mobile Support

All applications are fully responsive and work on:
- 📱 Smartphones (iOS & Android)
- 📱 Tablets
- 💻 Desktop computers

The Scanner App is optimized for Eyoyo handheld barcode scanners.

---

## 💼 Business Information

**Schmidt Potato**
- 📍 9036 70th St S, Sabin, MN 56580
- 📞 218-493-4254

---

## 📄 License

Proprietary - Schmidt Potato Company

---

## 🆘 Support

For questions or issues:
1. Check the system documentation in each module
2. Contact Schmidt Potato at 218-493-4254

---

## ✨ Version

**v1.0.0** - Full production release

**Last Updated**: February 2026