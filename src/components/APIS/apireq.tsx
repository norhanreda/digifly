import BASE_URL from "../APIS/api"
const getUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/user-informations`);
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      return {data,error:null};
    } else {
      throw new Error('Error in server');
    }
  } catch (error) {
    console.error('Error:', error);
    return {data:null,error};
  }
};

const createUser = async (userData) => {
    try {
        const response = await fetch(`${BASE_URL}/user-informations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (response.status === 201) { // Assuming 201 for successful creation
            const data = await response.json();
            console.log(data);
            return { data, error: null };
        } else {
            throw new Error('Error creating user');
        }
    } catch (error) {
        console.error('Error:', error);
        return { data: null, error };
    }
};



export  {getUsers,createUser};