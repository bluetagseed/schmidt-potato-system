// Central Data Hub for Schmidt Potato System
// Manages all data synchronization across apps

const DataHub = {
    // Initialize the data hub
    init: function() {
        if (!localStorage.getItem('schmidtPotatoInitialized')) {
            this.initializeCounters();
            localStorage.setItem('schmidtPotatoInitialized', 'true');
        }
    },
    
    // Initialize all counters
    initializeCounters: function() {
        if (!localStorage.getItem('palletCounter')) {
            localStorage.setItem('palletCounter', '1');
        }
        if (!localStorage.getItem('pickListCounter')) {
            localStorage.setItem('pickListCounter', '1');
        }
        if (!localStorage.getItem('truckCounter')) {
            localStorage.setItem('truckCounter', '1');
        }
        if (!localStorage.getItem('bolCounter')) {
            localStorage.setItem('bolCounter', '1');
        }
        if (!localStorage.getItem('printerCounter')) {
            localStorage.setItem('printerCounter', '1');
        }
    },
    
    // Pallet Management
    getPalletCounter: function() {
        return parseInt(localStorage.getItem('palletCounter') || '1');
    },
    
    setPalletCounter: function(value) {
        localStorage.setItem('palletCounter', value.toString());
        this.updateTimestamp();
    },
    
    incrementPalletCounter: function() {
        const current = this.getPalletCounter();
        this.setPalletCounter(current + 1);
        return current;
    },
    
    // Save pallet data
    savePallet: function(palletData) {
        const pallets = this.getAllPallets();
        palletData.timestamp = new Date().toISOString();
        pallets.push(palletData);
        localStorage.setItem('pallets', JSON.stringify(pallets));
        this.updateTimestamp();
    },
    
    // Get all pallets
    getAllPallets: function() {
        const data = localStorage.getItem('pallets');
        return data ? JSON.parse(data) : [];
    },
    
    // Get pallet by ID
    getPalletById: function(palletID) {
        const pallets = this.getAllPallets();
        return pallets.find(p => p.PalletID === palletID);
    },
    
    // Pick List Management
    getPickListCounter: function() {
        return parseInt(localStorage.getItem('pickListCounter') || '1');
    },
    
    setPickListCounter: function(value) {
        localStorage.setItem('pickListCounter', value.toString());
        this.updateTimestamp();
    },
    
    incrementPickListCounter: function() {
        const current = this.getPickListCounter();
        this.setPickListCounter(current + 1);
        return current;
    },
    
    // Save pick list
    savePickList: function(pickListData) {
        const pickLists = this.getAllPickLists();
        pickListData.timestamp = new Date().toISOString();
        pickLists.push(pickListData);
        localStorage.setItem('pickLists', JSON.stringify(pickLists));
        this.updateTimestamp();
    },
    
    // Get all pick lists
    getAllPickLists: function() {
        const data = localStorage.getItem('pickLists');
        return data ? JSON.parse(data) : [];
    },
    
    // Truck Management
    getTruckCounter: function() {
        return parseInt(localStorage.getItem('truckCounter') || '1');
    },
    
    setTruckCounter: function(value) {
        localStorage.setItem('truckCounter', value.toString());
        this.updateTimestamp();
    },
    
    incrementTruckCounter: function() {
        const current = this.getTruckCounter();
        this.setTruckCounter(current + 1);
        return current;
    },
    
    // Save truck data
    saveTruck: function(truckData) {
        const trucks = this.getAllTrucks();
        truckData.timestamp = new Date().toISOString();
        trucks.push(truckData);
        localStorage.setItem('trucks', JSON.stringify(trucks));
        this.updateTimestamp();
    },
    
    // Get all trucks
    getAllTrucks: function() {
        const data = localStorage.getItem('trucks');
        return data ? JSON.parse(data) : [];
    },
    
    // BOL Management
    getBOLCounter: function() {
        return parseInt(localStorage.getItem('bolCounter') || '1');
    },
    
    setBOLCounter: function(value) {
        localStorage.setItem('bolCounter', value.toString());
        this.updateTimestamp();
    },
    
    incrementBOLCounter: function() {
        const current = this.getBOLCounter();
        this.setBOLCounter(current + 1);
        return current;
    },
    
    // Save BOL
    saveBOL: function(bolData) {
        const bols = this.getAllBOLs();
        bolData.timestamp = new Date().toISOString();
        bols.push(bolData);
        localStorage.setItem('bols', JSON.stringify(bols));
        this.updateTimestamp();
    },
    
    // Get all BOLs
    getAllBOLs: function() {
        const data = localStorage.getItem('bols');
        return data ? JSON.parse(data) : [];
    },
    
    // Label Management
    saveLabel: function(labelData) {
        const labels = this.getAllLabels();
        labelData.timestamp = new Date().toISOString();
        labels.push(labelData);
        localStorage.setItem('labels', JSON.stringify(labels));
        this.updateTimestamp();
    },
    
    // Get all labels
    getAllLabels: function() {
        const data = localStorage.getItem('labels');
        return data ? JSON.parse(data) : [];
    },
    
    // Batch Number Management
    getBatchCounter: function(varietyCode, date) {
        const key = 'batchCounter_' + varietyCode + '_' + date;
        return parseInt(localStorage.getItem(key) || '1');
    },
    
    setBatchCounter: function(varietyCode, date, value) {
        const key = 'batchCounter_' + varietyCode + '_' + date;
        localStorage.setItem(key, value.toString());
        this.updateTimestamp();
    },
    
    incrementBatchCounter: function(varietyCode, date) {
        const current = this.getBatchCounter(varietyCode, date);
        this.setBatchCounter(varietyCode, date, current + 1);
        return current;
    },
    
    // Customer Management
    getCustomers: function() {
        const data = localStorage.getItem('customers');
        if (!data) {
            const defaultCustomers = {
                'sysco': {
                    name: 'Sysco Foods - Minneapolis',
                    address: 'Sysco Foods - Minneapolis\n5001 Sixth Street SE\nMinneapolis, MN 55414'
                },
                'usfoods': {
                    name: 'US Foods - Fargo',
                    address: 'US Foods - Fargo\n4141 31st Avenue S\nFargo, ND 58104'
                },
                'gordon': {
                    name: 'Gordon Food Service - Duluth',
                    address: 'Gordon Food Service - Duluth\n5102 Miller Trunk Hwy\nDuluth, MN 55811'
                },
                'pfg': {
                    name: 'Performance Food Group',
                    address: 'Performance Food Group\n1350 Mendota Heights Rd\nSt. Paul, MN 55120'
                },
                'reinhart': {
                    name: 'Reinhart Foodservice',
                    address: 'Reinhart Foodservice\n3333 7th Avenue S\nMoorhead, MN 56560'
                }
            };
            localStorage.setItem('customers', JSON.stringify(defaultCustomers));
            return defaultCustomers;
        }
        return JSON.parse(data);
    },
    
    addCustomer: function(id, name, address) {
        const customers = this.getCustomers();
        customers[id] = { name: name, address: address };
        localStorage.setItem('customers', JSON.stringify(customers));
        this.updateTimestamp();
    },
    
    // Printer Management
    getPrinterCounter: function() {
        return parseInt(localStorage.getItem('printerCounter') || '1');
    },
    
    setPrinterCounter: function(value) {
        localStorage.setItem('printerCounter', value.toString());
        this.updateTimestamp();
    },
    
    incrementPrinterCounter: function() {
        const current = this.getPrinterCounter();
        this.setPrinterCounter(current + 1);
        return current;
    },
    
    // Get all printers
    getAllPrinters: function() {
        const data = localStorage.getItem('printers');
        return data ? JSON.parse(data) : [];
    },
    
    // Get active printers only
    getActivePrinters: function() {
        return this.getAllPrinters().filter(p => p.isActive);
    },
    
    // Get printer by ID
    getPrinterById: function(printerId) {
        const printers = this.getAllPrinters();
        return printers.find(p => p.id === printerId);
    },
    
    // Save printer (add or update)
    savePrinter: function(printerData) {
        const printers = this.getAllPrinters();
        const existingIndex = printers.findIndex(p => p.id === printerData.id);
        
        printerData.updatedAt = new Date().toISOString();
        
        if (existingIndex >= 0) {
            // Update existing
            printers[existingIndex] = printerData;
        } else {
            // Add new
            printerData.createdAt = new Date().toISOString();
            printers.push(printerData);
        }
        
        localStorage.setItem('printers', JSON.stringify(printers));
        this.updateTimestamp();
    },
    
    // Delete printer
    deletePrinter: function(printerId) {
        const printers = this.getAllPrinters();
        const filtered = printers.filter(p => p.id !== printerId);
        localStorage.setItem('printers', JSON.stringify(filtered));
        this.updateTimestamp();
    },
    
    // Printer Defaults Management
    getPrinterDefaults: function() {
        const data = localStorage.getItem('printerDefaults');
        return data ? JSON.parse(data) : {
            dashboard: '',
            'truck-loading-chart': '',
            'scanner-app': ''
        };
    },
    
    // Get default printer for a specific form
    getDefaultPrinter: function(formName) {
        const defaults = this.getPrinterDefaults();
        return defaults[formName] || '';
    },
    
    // Set default printer for a form
    setDefaultPrinter: function(formName, printerId) {
        const defaults = this.getPrinterDefaults();
        defaults[formName] = printerId;
        localStorage.setItem('printerDefaults', JSON.stringify(defaults));
        this.updateTimestamp();
    },
    
    // Print Job Logging (optional)
    logPrintJob: function(printerId, printerName, formName, userId = 'system') {
        const printJobs = this.getAllPrintJobs();
        const jobId = 'job_' + Date.now();
        const job = {
            id: jobId,
            printerId: printerId,
            printerName: printerName,
            formName: formName,
            userId: userId,
            timestamp: new Date().toISOString(),
            status: 'completed'
        };
        printJobs.push(job);
        localStorage.setItem('printJobs', JSON.stringify(printJobs));
        this.updateTimestamp();
    },
    
    // Get all print jobs
    getAllPrintJobs: function() {
        const data = localStorage.getItem('printJobs');
        return data ? JSON.parse(data) : [];
    },
    
    // Statistics
    getStatistics: function() {
        return {
            totalPallets: this.getAllPallets().length,
            totalPickLists: this.getAllPickLists().length,
            totalTrucks: this.getAllTrucks().length,
            totalLabels: this.getAllLabels().length,
            totalBOLs: this.getAllBOLs().length,
            totalPrinters: this.getAllPrinters().length,
            activePrinters: this.getActivePrinters().length,
            totalPrintJobs: this.getAllPrintJobs().length,
            nextPalletID: 'P-' + String(this.getPalletCounter()).padStart(3, '0'),
            nextPickListID: 'PL-' + String(this.getPickListCounter()).padStart(3, '0'),
            nextTruckID: 'T-' + String(this.getTruckCounter()).padStart(3, '0'),
            nextBOLID: 'BOL-' + String(this.getBOLCounter()).padStart(4, '0')
        };
    },
    
    // Update timestamp
    updateTimestamp: function() {
        const now = new Date().toLocaleString();
        localStorage.setItem('lastSystemUpdate', now);
    },
    
    // Clear all data
    clearAll: function() {
        const keys = Object.keys(localStorage);
        keys.forEach(key => {
            if (key.startsWith('pallet') || 
                key.startsWith('pick') || 
                key.startsWith('truck') || 
                key.startsWith('bol') || 
                key.startsWith('batch') || 
                key === 'pallets' || 
                key === 'pickLists' || 
                key === 'trucks' || 
                key === 'bols' || 
                key === 'labels') {
                localStorage.removeItem(key);
            }
        });
        this.initializeCounters();
        this.updateTimestamp();
    },
    
    // Export all data
    exportAllData: function() {
        return {
            pallets: this.getAllPallets(),
            pickLists: this.getAllPickLists(),
            trucks: this.getAllTrucks(),
            bols: this.getAllBOLs(),
            labels: this.getAllLabels(),
            statistics: this.getStatistics(),
            exportDate: new Date().toISOString()
        };
    }
};

// Initialize on load
DataHub.init();