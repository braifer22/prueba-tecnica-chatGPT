import { useEffect, useState } from 'react';
import './App.css';
import { useFetch } from './hooks/useFetch';
import { Loading } from './components/Loading';

function App() {
    const { data, isLoading } = useFetch();

    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState('');

    const [filteredData, setFilteredData] = useState(data);

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
            <header>
                <h2 className="text-4xl font-bold pt-8">Prueba Técnica</h2>
                <form className="flex flex-col md:flex-row gap-2 items-center justify-center py-12 *:border-none *:h-10">
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
            </header>

            {isLoading ? (
                <div className="flex justify-center">
                    <Loading />
                </div>
            ) : (
                <section className="flex justify-center">
                    <table className="h-fit bg-neutral-800 m-2 table-fixed w-full max-w-screen-lg border-separate border-spacing-2 border border-neutral-500 text-left *:*:*:p-2 *:*:*:border *:*:*:border-neutral-600 *:*:*:overflow-auto">
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
