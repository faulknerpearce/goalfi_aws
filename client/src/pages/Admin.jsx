import React, { useContext } from 'react';
import { TransactionContext } from "../context/TransactionContext";

// Admin component for managing token operations and administrative tasks
const Admin = () => {
  const { currentAccount, fetchToken, fetchParticipantsTokens} = useContext(TransactionContext);

  // Handler to fetch tokens for the current user account
  const handleGetToken = async () => {
    try {
      const tokens = await fetchToken(currentAccount); 
      console.log('Fetched tokens:', tokens);
    } catch (error) {
      console.error('Error fetching tokens:', error);
    }
  };

  // Handler to fetch tokens for all participants in a specific goal (goalId: 11)
  const handlefetchAllTokens = async () => {
    try {
      const tokens = await fetchParticipantsTokens(11);
      console.log('Fetched tokens:', tokens);
    } catch (error) {
      console.error('Error fetching tokens:', error);
    }
  };

  return (
    <div className="text-white">
      {/* Button to fetch current user's tokens */}
      <button 
        className="text-white bg-blue-700 rounded-full px-4 py-2" 
        onClick={handleGetToken}
      >
        Fetch Token
      </button>
      {/* Button to fetch all participants' tokens for goal 11 */}
      <button 
        className="text-white bg-blue-700 rounded-full px-4 py-2" 
        onClick={handlefetchAllTokens}
      >
        Fetch Participants Tokens
      </button>
    </div>
  );
};

export default Admin;
