const getUser = async () => {
    try {
        const response = await fetch('http://localhost:5000/users');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
}


const Homepage = async () => {
    const users =await getUser();
  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-full gap-4 text-black">
      <h1 className="text-4xl font-bold">Welcome to the Homepage</h1>
      <p className="text-lg">User Count: {users.length}</p>
      
    </div>
  );
};

export default Homepage;
