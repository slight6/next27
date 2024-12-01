
import StyledHr from "../StyledHr";

interface InfoCardProps {
    title: string;
    value: string | number;
    icon: JSX.Element;
    borderRadius?: string; // Optional for dynamic rounded corners
}

const InfoCard = ({ title, value, icon, borderRadius = "md" }: InfoCardProps) => {
    return (
        <div
            className={`info-card border-2 border-red-600 shadow-[0_4px_10px_rgba(0,0,0,0.8)] rounded-${borderRadius} p-4`}
        >
            <div className="info-card__icon mb-2">{icon}</div>
            <div className="info-card__content">
                <h3 className="text-lg font-bold mb-1">{title}</h3>
                <p className="text-sm text-gray-700">{value}</p>
            </div>
        </div>
    );
};

export default InfoCard;
