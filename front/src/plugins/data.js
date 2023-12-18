export const fetchData = async (category) => {
    const apiKey = 'd3cdc04906ec6542bfb8fce5fbe7767a';
    const apiUrl = `https://api.themoviedb.org/3/${category}/movie?api_key=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

