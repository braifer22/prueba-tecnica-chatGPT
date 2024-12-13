import { useEffect, useState } from 'react';
import './App.css';
import { useFetch } from './hooks/useFetch';

function App() {
    const { data, isLoading } = useFetch();
    const [inputValue, setInputValue] = useState('');
    const [filteredData, setFilteredData] = useState(data);
    const [selectValue, setSelectValue] = useState('');

    function handleSelectChange(event) {
        setSelectValue(event.target.value);
    }

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    useEffect(() => {
        let result = data;

        if (selectValue !== '') {
            result = result.filter((user) => user.city === selectValue);
        }

        if (inputValue !== '') {
            result = result.filter((user) => {
                return user.name
                    .toLowerCase()
                    .includes(inputValue.toLowerCase());
            });
        }

        setFilteredData(result);
    }, [inputValue, selectValue, data]);

    return (
        <>
            <h2 className="text-4xl font-bold">Prueba Técnica</h2>

            <form className="flex gap-2 items-center justify-center my-12 *:border-none *:h-10">
                <input
                    type="text"
                    className="p-2"
                    placeholder="Buscar por nombre:"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <select
                    value={selectValue}
                    onChange={handleSelectChange}
                    className="p-2 border-y border-black"
                >
                    <option value="">No filtrar por ciudad</option>
                    {data.map((user) => {
                        return (
                            <option key={user.city} value={user.city}>
                                {user.city}
                            </option>
                        );
                    })}
                </select>
            </form>

            {isLoading ? (
                <div className="flex justify-center">
                    <svg
                        className="animate-spin -ml-1 mr-3 size-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                    </svg>
                </div>
            ) : (
                <section className="flex justify-center">
                    <table className="bg-neutral-800 table-fixed w-full max-w-screen-lg border-separate border-spacing-2 border border-neutral-500 text-left *:*:*:p-2 *:*:*:border *:*:*:border-neutral-600">
                        <thead className="bg-neutral-700">
                            <tr className=" text-center !font-light">
                                <th>Name</th>
                                <th>Email</th>
                                <th>Ciudad</th>
                                <th>Empresa</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {filteredData.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.city}</td>
                                    <td>{user.company}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            )}
        </>
    );
}

export default App;
