// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export function fetchProducts(params: any) {
  return new Promise<{ data: any[] }>((resolve, reject) => {
    fetch('https://api.example.com/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
      credentials : 'include'
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        reject(new Error('Error fetching products'));
      }
    })
    .then(data => {
      resolve({ data: data });
    })
    .catch(error => {
      reject(error);
    });
    });
  }