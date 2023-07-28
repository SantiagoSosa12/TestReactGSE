const url = "https://jkcge88asd.execute-api.us-east-2.amazonaws.com/qa/license/api/customer/create";

const fetchPetition = async (dataToSend) => {
    try {
        const response = await fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(dataToSend), // body data type must match "Content-Type" header
        });
        const ResponseOf = await response.json();
        console.log(ResponseOf);
        return ResponseOf;
    } catch (error) {
        console.error("Error:", error);
    }

}

export { fetchPetition };