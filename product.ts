/////////////////////////// Task Four ///////////////////////////////////////
// Define the Product interface
interface Product {
    name: string; // name of the product
    price: number; // The price of the product
  }
  
  // Function to calculate the total price of all products
  function calculateTotalPrice(products: Product[]): number {
      // Use the `reduce` method to sum the prices of all products

    return products.reduce((total, product) => total + product.price, 0);
  }
  // Define an array of products

  const products: Product[] = [
    { name: "Apple", price: 10 },
    { name: "Banana", price: 15 },
    { name: "Orange", price: 20 },
  ];
  // Calculate and log the total price of the products
  const totalPrice = calculateTotalPrice(products);
  console.log("Total Price is: "+totalPrice); // Output: Total Price: 45
  console.log("................................");
/////////////////////////// Task Five /////////////////////////////////////

// Function to validate an email address
function isValidEmail(email: string): boolean {
    // Regular expression for basic email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Check if the email matches the basic pattern
    if(!email.match(emailRegex)){
      return false;
    }
    //  Check if the email length exceeds the maximum allowed length
    const maxEmailLength = 200;
    if(email.length>maxEmailLength){
      return false;
    }
    return true; // Email is Valid
  }
  
  // Test the email validation function with various examples
  console.log(isValidEmail("yazanalsade327@gmail.com")); // Output: true
  console.log(isValidEmail("yazan@email")); // Output: false
  console.log(isValidEmail("@email.com")); // Output: false
  console.log(isValidEmail("yazan@stu.najah.edu")); // Output: true
  console.log(isValidEmail("y@email.co")); // Output: true


  /* To run the code, save it as product.ts,
   compile it to JavaScript using tsc product.ts, 
   and execute the compiled file with node product.js. 
   Outputs include the total product price and email validation results.
   */
