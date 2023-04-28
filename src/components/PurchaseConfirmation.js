import { useEffect, useState } from "react";
import "../styles/PurchaseConfirmation.css";

const PurchaseConfirmation = (props) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    });

    return (
        <div className={`purchase-confirmation ${animate ? "show" : "hidden"}`}>
            <h1>Thank you for your purchase!</h1>
            <button
                onClick={props.onClose}
                aria-label="close-purchase-confirmation"
            >
                CLOSE
            </button>
        </div>
    );
};

export default PurchaseConfirmation;
