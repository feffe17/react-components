

export default function Card({ title, description, buttonText }) {
    return (
        <div className="card">
            <div className="top-section">600x400</div>
            <div className="bot-section">
                <h5>{title}</h5>
                <p>{description}</p>
                <button>{buttonText}</button>
            </div>
        </div>
    );
}