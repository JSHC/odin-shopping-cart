import '../styles/PurchaseConfirmation.css';

const PurchaseConfirmation = (props) => {
    return (
        <div className="purchase-confirmation">
            <h1>Thank you for your purchase!</h1>
            <button onClick={props.onClose}>CLOSE</button>
        </div>
    )
}

export default PurchaseConfirmation;