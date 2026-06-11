import axios from "axios";

/**
 * AI Cat Recommendation Tool Utility Function
 * 
 * Yeh function external backend API (`/api/cats/recommended`) ko hit karta hai
 * aur parameters ke basis par compatible cat breeds ki list fetch karta hai.
 *
 * @param {boolean} kidsFriendly - Kya cat bacchon ke sath friendly honi chahiye?
 * @param {boolean} appartmentFriendly - Kya cat apartment environment ke liye suitable hai?
 * @returns {Promise<any>} API ka response data return karta hai, ya error handle karta hai.
 */
export const aiRecoomendTools = async (
  kidsFriendly: boolean,
  appartmentFriendly: boolean,
) => {
  try {
    // Backend server ko lifestyle preferences ke saath POST request bhejna
    const result = await axios.post(
      "http://localhost:3000/api/cats/recommended",
      {
        kidsFriendly,
        appartmentFriendly,
      },
    );

    // Debugging ke liye poora response object print karna
    console.log(result);
    
    // Sirf core response data return karna jo MCP server read karega
    return result.data;
  } catch (error) {
    // API failure ya network issues ko debug console mein log karna
    console.log(error);
    
    // Error object return karna taaki upstream caller failure handle kar sake
    return error;
  }
};
