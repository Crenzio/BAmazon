# BAmazon

**Overview:** 

The JS file (bamazon.js) fetches data from a table (stored in bamazon.sql) and allows the user to access it via node.js. The user is then able to buy a variable quantity of a selected item. 

**Using Bamazon.js** 

After launching the JS file in node...

1. You will be asked to choose from 1 of 3 options by entering "1," "2," or "3' (this section is to entertain the user, your selection here has no bearing on the data you receive)

2. A list of files (extracted from bamazon.sql) will apepar. Note that each file includes an **Item #** and a **Stock** variable. 

3. You will be asked to enter the ID the item you want to buy (the JS will prevent you from entered non-numbers or invalid numbers). 

4. You will be asked to enter the quantity of the item you want to buy (once again, you will be prevented from entering non-numbers or invalid numbers).

5. If you enter an appropriate quantity, you will be told how much $ your choice cost. The list will then reset with updated quantities (example: if an item has a **Stock of 4** and you **Buy 3** the item's stock will **Decrease to 1**). You will then be returned to step 3. 

If you enter an inappropriate quantity (example: an item has a **Stock of 1** and you attempt to **Buy 9**), you willl encounter an error saying there are not enough items to fulfill your order. You will then be returned to step 3. 

**Tutorial** 

A video tutorial can be found here [tutorial.mp4]