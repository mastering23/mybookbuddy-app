# My BookBuddy APP
```
In this Career Simulation, Calliope is asking you to build the front 
end of the online public library service called BookBuddy.
Review the tabs below for more details and information 
from her and the team who developed the API.


Requirements
Tier I - Build a basic Frontend Application
All users should be able to:
See all books in the library’s catalog
View details of an individual book
Log in to an existing account
Register a new account
Tier II - Logged in Functionality
Logged in users should be able to:
Checkout an available book
View their account details
Name
Email
Books currently checked out
Users should be able to return books that they previously checked out.
 ```

 -----

 ![alt text](image.png)

 ### Fetch data return 
 ![alt text](image-3.png)
 
### See all books in the library’s catalog
 ![alt text](image-1.png)

### View details of an individual book
 ![alt text](image-2.png)

 ### Fixing an issues in Details Component 
The first issue I encountered was rendering the "Available" keyword from the API value, which was a boolean. I resolved this by using the .toString() method to convert the boolean value to a string. This also led me to figure out how to display the pictures using the URL tag for the `<img src="">`

----

 ![alt text](image-4.png)


 ### Login / Registration 
 
 Rendering components 
 ![alt text](image-5.png)

 ![alt text](image-6.png)


 ### Shopping cart
 ![alt text](image-7.png)


 "More work is needed. You should only add the available books. This can be easily done by adding an if condition that checks the Available keyword, which has a true or false value. Based on this, I can resolve the issue."

### fixed it books Available | Book Not Available
Using the singlebook.available keyword with true or false values, I created conditions to add books to the shopping cart based on true values. If the value is false, an alert is shown to the user. 
 ![alt text](image-9.png)
 ![alt text](image-10.png)
 Additionally, I added a tag indicating whether the book is available to guide users before they click "Add to Cart".if the user click on add cart , an alert message will pop 
 to remind the user that the book is not available.
 ![alt text](image-11.png)

### UseParams added 
![alt text](image-12.png)

-----
 ### Checkout Cart
 ![alt text](image-8.png)
"More work is needed. I need to integrate user details during checkout and send the information to the reserved API. Additionally, I will create a component to track these transactions, which will later be used to manage book returns and maintain a log."
### fixing the Checkout plan 
![alt text](image-13.png)
![alt text](image-15.png)

### userLog issues - fixed
"When creating the user log, I needed to print a receipt to track checkout history. I encountered an issue where each item was generating a separate receipt, even if they were part of the same checkout. To fix this, I grouped the items by their checkout time, meaning those checked out together would be grouped as one receipt. I stored this data in local storage.everything a checkout is generate from there my useglog can grab the data and generate the receipt"

----------------------

![alt text](image-14.png)

### Userlog was added to main menu 
![alt text](image-16.png)
![alt text](image-17.png)



 ### CSS Style 
 

![alt text](image-18.png)

----

"I resolved the broken image error (404) by creating a BookImage.jsx component. This component includes a fallback function that handles image errors by replacing the missing image with a default one from within the project. Ideally, the best solution would be to use an online image with global network access."

------

![alt text](image-20.png)
![alt text](image-21.png)
![alt text](image-22.png)