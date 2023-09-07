interface response_data {
    row: number;
    column: number;
    layout: number[][];
    price: number;
}

// demo data

const response : response_data = {
    row: 10,
    column: 5,
    layout: [
        [3, 1, 0, 1, 1],
        [1, 1, 0, 1, 1],
        [4, 4, 0, 4, 4],
        [1, 1, 0, 4, 5],
        [3, 3, 0, 4, 5],
        [3, 2, 0, 1, 1],
        [1, 1, 0, 1, 1],
        [1, 1, 0, 1, 1],
        [1, 1, 0, 1, 1],
        [1, 1, 1, 1, 1],
    ],
    price: 50,
}

export const getSeatLayout = async (): Promise<response_data> => {
    const transport_id = sessionStorage.getItem('transportId');
    const price = sessionStorage.getItem('transportPrice');
    response.price = price ? parseInt(price) : 0;
    console.log(transport_id);
    return response;
}