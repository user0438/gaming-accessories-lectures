import { useState, useEffect } from "react";
import AccessoryItem from "./AccessoryItem";
 
function Accessories({}) {
    // const accessories = [
    //     {
    //         id: "g1",
    //         name: "RGB Gaming Mouse",
    //         price: "49.99",
    //         description: "High-precision gaming mouse with customizable RGB lighting and 8 programmable buttons.",
    //         image: "images/gaming-mouse.png"
    //     },
    //     {
    //         id: "g2",
    //         name: "Mechanical Keyboard",
    //         price: "89.99",
    //         description: "Mechanical keyboard with blue switches, RGB backlight, and detachable wrist rest.",
    //         image: "images/mechanical-keyboard.png"
    //     }];
   
    const [accessories, setAccessories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const handleClick = (e) => {
        setIsLoading(!isLoading);
    }
 
    useEffect(() => {
        const controller = new AbortController();
 
        async function LoadAccessoires() {
            console.log("LoadData");
 
            try {
                const response = await fetch("http://localhost:3000/accessories",
                    { signal: controller.signal }
                );
 
                console.log(response);
            } catch (requestError) {
                console.log("Error")
            }
            finally {
                if (!controller.signal.aborted) {
                    setIsLoading(false);
                }
            }
        }
 
        LoadAccessoires();
       
        return () => controller.abort();
    }, []);
 
    if (isLoading)
        return <p className="center">Produkte werden geladen...</p>;
 
    if (accessories.length === 0)
        return <p className="center">Keine Produkte verfügbar.</p>;
 
 
    return(
        <>
            <ul id="accessories">
                {accessories.map(accessory => <AccessoryItem key={accessory.id} accessory={accessory} />)}
            </ul>
           
        </>
    )
}
 
export default Accessories;