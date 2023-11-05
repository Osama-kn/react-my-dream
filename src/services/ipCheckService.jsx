const checkIP = async () => {
  try {
    const response = await fetch("https://api.db-ip.com/v2/free/self");
    const data = await response.json();
    const ip = data.ipAddress;
    const ipNumbers = ip.split(".").map((num) => parseInt(num, 10));
    const sum = ipNumbers.reduce((acc, curr) => acc + curr, 0);

    return sum > 100;
  } catch (error) {
    console.error("Error fetching IP:", error);
    throw error;
  }
};

export default checkIP;
