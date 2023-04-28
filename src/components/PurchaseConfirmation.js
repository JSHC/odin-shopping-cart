import { useEffect, useRef, useState } from "react";
import "../styles/PurchaseConfirmation.css";

const PurchaseConfirmation = (props) => {
    const [animate, setAnimate] = useState(false);
    const ref = useRef(null);
    const onClickOutside = (event) => {
        if (!ref.current.contains(event.target)) {
            props.onClose();
        }
    };
    useEffect(() => {
        setAnimate(true);

        document.addEventListener("click", onClickOutside, true);
        return () => {
            document.removeEventListener("click", onClickOutside, true);
        };
    });

    return (
        <div
            ref={ref}
            className={`purchase-confirmation ${animate ? "show" : "hidden"}`}
        >
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
