
import { useState, useEffect } from "react";
import AccessoryItem from "./AccessoryItem";

function Accessories() {

    const [accessories, setAccessories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        async function LoadAccessoires() {
            console.log("LoadData");

            try {
                const response = await fetch(
                    "http://localhost:3000/accessories",
                    { signal: controller.signal }
                );

                if (!response.ok) {
                    throw new Error("Fehler beim Laden der Produkte.");
                }

                const data = await response.json();
                setAccessories(data);

                console.log(data);

            } catch (requestError) {

                if (requestError.name !== 'AbortError') {
                    setError(requestError.message);
                }

            } finally {

                if (!controller.signal.aborted) {
                    setIsLoading(false);
                }
            }
        }

        LoadAccessoires();

        return () => controller.abort();

    }, []);

    if (error)
        return <p className="error" role="alert">{error}</p>;

    if (isLoading)
        return <p className="center">Produkte werden geladen...</p>;

    if (accessories.length === 0)
        return <p className="center">Keine Produkte verfügbar.</p>;

    return (
        <>
            <ul id="accessories">
                {accessories.map(accessory =>
                    <AccessoryItem
                        key={accessory.id}
                        accessory={accessory}
                    />
                )}
            </ul>
        </>
    );
}

export default Accessories;
