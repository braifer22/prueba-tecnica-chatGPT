export async function getFetch() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const result = data.map((user) => ({
        name: user.name,
        email: user.email,
        city: user.address.city,
        company: user.company.name,
        id: user.id,
    }));

    return result;
}
