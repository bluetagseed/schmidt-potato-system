# 🥔 Schmidt Potato System

**Integrated Warehouse & Shipping Management Platform**

A comprehensive, browser-based solution for potato warehouse operations, shipping coordination, compliance labeling, and full traceability. Built entirely with HTML5/JavaScript for maximum portability and ease of deployment.

---

## 🚀 Quick Start

### **Access the Live System**
👉 **https://bluetagseed.github.io/schmidt-potato-system/dashboard.html**

No installation required! Works on desktop, tablet, and mobile devices.

### **Run Locally**
1. Download the repository (green "Code" button → "Download ZIP")
2. Extract the files
3. Open `dashboard.html` in any modern web browser
4. Start using immediately - no server, no dependencies!

### **For Developers**
```bash
git clone https://github.com/bluetagseed/schmidt-potato-system.git
cd schmidt-potato-system
# Open dashboard.html in your browser - that's it!
```

---

## 📦 Complete Feature Set

### **📊 Central Dashboard**
- Real-time statistics and system overview
- Live data tracking (pallets, pick lists, trucks, labels)
- Quick access to all modules
- Excel export for compliance and record-keeping
- Centralized data management with LocalStorage

### **🏭 Warehouse Operations**

#### **📋 Pick List Generator** (`pick-list.html`)
- Create warehouse pick lists for customer orders
- **Smart Product Merging**: Automatically consolidates identical products from multiple customers
- Auto-generates pallet IDs with counter
- Pallet optimization (40 bags per full pallet)
- Dual Excel exports:
  - Scanner-ready CSV with barcode expectations
  - Office report with order summaries
- Saves to data hub for traceability

#### **📱 Mobile Scanner App** (`scanner-app.html`)
- Eyoyo handheld barcode scanner support
- Real-time barcode scanning and validation
- CSV pick list import functionality
- Pick list progress tracking
- Live statistics display
- Excel export capability
- Mobile-optimized interface

#### **📦 Pallet Packing Labels** (`pallet-packing.html`)
- Generate internal warehouse packing labels
- Auto-incrementing pallet IDs
- SSCC barcode generation
- Product details: variety, weight, grade, bag count
- Pack date and lot code tracking
- Printable 4x6" label format

### **🏷️ Label Generation**

#### **PTI Case Labels** (`PTI.html`)
- PTI (Produce Traceability Initiative) compliant labels
- **Smart PLU/UPC Learning**: Remembers previous codes
- Support for multiple varieties: Red Pontiac, Russet Burbank, Yukon Gold, Red Norland
- Pack weights: 50 LBS, 10 LBS, 5 LBS
- Grades: Blue Tag Size A, Blue Tag Size B, Red Tag
- Auto-incrementing batch numbers
- CODE128 barcode generation
- Pack date and lot code tracking
- Net weight capture

#### **Pallet Shipping Labels** (`pallet-shipping.html`)
- Customer-specific shipping labels
- Pre-configured major customers:
  - Sysco Foods
  - US Foods
  - Gordon Food Service
- Ship-from/ship-to address management
- Pallet count and total weight
- Product description field
- Delivery date scheduling
- Special instructions support
- Barcode generation for tracking

### **🚛 Shipping & Loading**

#### **Truck Loading Chart** (`truck-loading-chart.html`)
- **Live visual truck loading tracker**
- Configurable truck configurations (up to 13 rows, 26 pallets)
- Double-wide or single-wide row support
- Real-time pallet scanning and placement
- Visual truck map (front cab to back door)
- Save/load truck configurations
- Save/load customer profiles
- Driver information capture
- Customer PO# with barcode generation
- Live statistics:
  - Loaded count
  - Empty spots
  - Total weight
  - Capacity percentage
- Printable loading charts
- Date/time stamping

#### **Bill of Lading (BOL)** (`bol.html`)
- Complete BOL generation
- Auto-incrementing BOL numbers
- Pre-filled shipper information (Schmidt Potato)
- Customer database with quick-select
- Carrier and driver information
- Shipment details (pallets, weight, description)
- Special handling instructions
- **Mobile Electronic Signatures**:
  - Shipper signature
  - Driver signature
  - Receiver signature
- QR code generation for mobile signing
- Signature capture integration
- Print-ready format
- Saves to data hub

#### **Electronic Signature Capture** (`signature-capture.html`)
- Mobile-friendly signature pad
- Touch and stylus support
- Canvas-based drawing
- QR code workflow integration
- Signature image storage
- Auto-return to BOL after signing

### **💾 Data Management**

#### **Centralized Data Hub** (`data-hub.js`)
- LocalStorage-based persistence
- Auto-incrementing counters:
  - Pallet IDs
  - Pick List IDs
  - BOL Numbers
  - Label IDs
- Statistics aggregation
- Data export functions
- Cross-module data sharing

#### **Excel Export System**
- Export all data in one workbook (multiple sheets)
- Individual exports:
  - Pallets only
  - Pick lists only
  - Trucks only
  - Labels only
- Timestamp-based filenames
- XLSX format for full Excel compatibility
- CSV format for scanner imports

---

## 🛠️ Technical Architecture

### **Technology Stack**
- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Data Storage**: Browser LocalStorage
- **External Libraries**:
  - [SheetJS (XLSX)](https://sheetjs.com/) - Excel export
  - [JsBarcode](https://github.com/lindell/JsBarcode) - Barcode generation (CODE128)
  - [QRCode.js](https://davidshimjs.github.io/qrcodejs/) - QR code generation

### **Key Technical Features**
- **Zero backend** - runs entirely client-side
- **No installation** - works in any modern browser
- **No dependencies** - all libraries loaded via CDN
- **Mobile-responsive** - adapts to any screen size
- **Print-optimized** - all documents print-ready
- **LocalStorage persistence** - data survives page refreshes
- **Real-time updates** - statistics refresh automatically

### **Browser Compatibility**
- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ⚠️ Requires JavaScript enabled
- ⚠️ Requires LocalStorage enabled

### **Performance**
- Lightweight: Total size < 1MB
- Fast loading: All files cached by GitHub Pages
- No server calls: Everything runs locally
- Instant response: No network latency

---

## 📁 File Structure

```
schmidt-potato-system/
├── dashboard.html              # Central hub with statistics
├── data-hub.js                # Centralized data management
├── pick-list.html             # Pick list generator
├── scanner-app.html           # Mobile warehouse scanner
├── pallet-packing.html        # Internal packing labels
├── PTI.html                   # PTI case labels
├── pallet-shipping.html       # Customer shipping labels
├── truck-loading-chart.html   # Truck loading tracker
├── bol.html                   # Bill of lading generator
├── signature-capture.html     # Electronic signature pad
├── .github/
│   └── workflows/
│       └── static.yml         # GitHub Pages deployment
└── README.md                  # This file
```

---

## 🎯 Usage Workflow

### **Typical Daily Operations**

1. **Morning: Generate Pick Lists**
   - Open Pick List Generator
   - Add customer orders
   - System merges identical products
   - Export CSV for warehouse scanners

2. **Warehouse: Pack & Label**
   - Workers use Scanner App to track picking
   - Generate Pallet Packing Labels as pallets complete
   - Generate PTI Case Labels for compliance

3. **Shipping Prep: Create Shipping Labels**
   - Generate Pallet Shipping Labels for customers
   - Create Bill of Lading with electronic signatures

4. **Loading: Track Truck Loading**
   - Open Truck Loading Chart
   - Scan pallets as loaded
   - Visual map shows placement
   - Print final loading chart for driver

5. **End of Day: Export Data**
   - Dashboard → Export All Data
   - Save Excel file for records
   - Traceability compliance maintained

---

## 📱 Mobile Support

All applications are fully responsive and optimized for:
- 📱 Smartphones (iOS & Android)
- 📱 Tablets (iPad, Android tablets)
- 💻 Desktop computers
- 🖥️ Large monitors

**Scanner App** is specifically optimized for:
- Eyoyo handheld barcode scanners
- Touch-based signature capture
- Mobile QR code scanning

---

## 💼 Company Information

**Schmidt Potato**
- 📍 9036 70th St S, Sabin, MN 56580
- 📞 218-493-4254
- 🌐 https://bluetagseed.github.io/schmidt-potato-system/

**System Version**: 1.0.0  
**Last Major Update**: February 2026

---

## 📄 License

Proprietary - Schmidt Potato Company

---

## 🆘 Support & Troubleshooting

### **Common Issues**

**Q: Labels won't print correctly**  
A: Use Chrome or Edge for best print results. Check print settings for proper paper size.

**Q: Data disappeared after browser update**  
A: LocalStorage may have been cleared. Export data regularly to Excel as backup.

**Q: Scanner not recognizing barcodes**  
A: Ensure scanner is in keyboard emulation mode. Check barcode format matches CODE128.

**Q: Signatures not saving**  
A: Check that LocalStorage is enabled. Try clearing browser cache and retry.

### **Contact Support**
For technical issues or questions:
- 📞 Call: 218-493-4254
- 📧 Contact: Schmidt Potato main office

---

## 🔒 Data & Privacy

- **All data stored locally** in your browser's LocalStorage
- **No data transmitted** to external servers
- **No analytics or tracking** - completely private
- **Export anytime** to Excel for your own records
- **Backups recommended** - export data regularly

---

## ✨ Future Enhancements

Potential improvements under consideration:
- Cloud backup integration
- Multi-user synchronization
- Advanced reporting dashboards
- Inventory management integration
- Customer portal access
- Automated email notifications

---

**Built with ❤️ for Schmidt Potato warehouse operations**