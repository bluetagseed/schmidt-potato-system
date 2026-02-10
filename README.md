# Schmidt Potato Integrated Warehouse Management System

## System Overview
The Schmidt Potato Integrated Warehouse Management System is a robust solution designed to streamline the management of warehouse operations. This system allows for effective inventory tracking, order management, and reporting, enhancing the efficiency of warehouse operations.

## Features
- **Real-time Inventory Tracking:** Monitor stock levels in real-time to ensure optimal inventory management.
- **Order Management:** Efficiently handle incoming and outgoing orders with ease.
- **Reporting Tools:** Generate detailed reports on inventory status, order history, and warehouse performance.
- **User Management:** Control access to warehouse operations with role-based user management.
- **Data Analytics:** Utilize analytics to make informed decisions based on warehouse data.

## Setup Instructions
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/bluetagseed/schmidt-potato-system.git
   ```
2. **Navigate to the Project Directory:**
   ```bash
   cd schmidt-potato-system
   ```
3. **Install Dependencies:**
   Ensure you have all necessary dependencies installed, as specified in the `requirements.txt` file.
   ```bash
   pip install -r requirements.txt
   ```
4. **Start the Application:**
   Launch the application by running the following command:
   ```bash
   python app.py
   ```

## File Descriptions
- **app.py:** Main entry point for the application.
- **models.py:** Contains the data models used in the application.
- **controllers.py:** Manages the logic for handling requests and responses.
- **static/**: Directory containing static files (CSS, JavaScript, images).
- **templates/**: Contains HTML templates used for rendering views.

## Usage Guide
Once the application is running, you can access the management interface by navigating to `http://localhost:5000` in your web browser. 

To create a new inventory entry, click on "Add Item", fill in the required details, and submit the form. Monitor your inventory levels and manage orders using the navigation menu.

For any questions or issues, please refer to the [issue tracker](https://github.com/bluetagseed/schmidt-potato-system/issues).