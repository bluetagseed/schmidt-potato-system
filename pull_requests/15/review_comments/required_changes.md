## Required Changes for Pallet Packing System

### Remove Unnecessary Features
1. ❌ **Remove Pallet Configuration section** - Don't need the size selector (Standard/Square/Custom pallet options)
2. ❌ **Remove Pallet Layout Visualization** - Don't need the canvas drag-and-drop visualization or packing optimizer
3. ❌ **Remove manual Lot Code input field** - This will be auto-populated instead

### Add/Update Features
4. ✅ **Auto-populate Lot Code from PTI label system** - Integration with existing PTI.html system
5. ✅ **Fix packing calculation with bags per pallet based on weight**:
   - **3 LBS** = **600 bags per pallet** (1800 lbs total)
   - **4 LBS** = **500 bags per pallet** (2000 lbs total)
   - **5 LBS** = **400 bags per pallet** (2000 lbs total)
   - **10 LBS** = **200 bags per pallet** (2000 lbs total)
   - **25 LBS** = **80 bags per pallet** (2000 lbs total)
   - **50 LBS** = **40 bags per pallet** (2000 lbs total) - 5 bags per layer × 8 layers
   - **5/10 = 50 LBS** = **40 bags per pallet** (2000 lbs total)
   - **10/5 = 50 LBS** = **40 bags per pallet** (2000 lbs total)
   - **100 LBS** = **20 bags per pallet** (2000 lbs total)
   - **Bulk Pack** = TBD
6. ✅ **Update Pack Weight dropdown** to match pick-list.html options:
   - 3 LBS
   - 4 LBS
   - 5 LBS
   - 10 LBS
   - 25 LBS
   - 50 LBS (default)
   - 5/10 = 50 LBS
   - 10/5 = 50 LBS
   - 100 LBS
   - Bulk Pack
7. ✅ **Add Back Home button** - Return to dashboard.html

### Keep Standard Pallet Size
- Pallet size remains **40×48"** (not 42×48")

### Target Weight
- Most pallets target **2000 lbs total weight** (except 3 LBS bags = 1800 lbs)