## Required Changes for Pallet Packing System

### Remove Unnecessary Features
1. ❌ **Remove Pallet Configuration section** - Don't need the size selector (Standard/Square/Custom pallet options)
2. ❌ **Remove Pallet Layout Visualization** - Don't need the canvas drag-and-drop visualization or packing optimizer
3. ❌ **Remove manual Lot Code input field** - This will be auto-populated instead

### Add/Update Features
4. ✅ **Auto-populate Lot Code from PTI label system** - Integration with existing PTI.html system
5. ✅ **Fix packing calculation**: 
   - **5 bags per layer** (fixed)
   - **8 layers high** (fixed)
   - = **40 bags total per pallet** for 50lb bags
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

Let me know if you need any clarification on these requirements!