
import StyledHr from "../StyledHr";

interface InfoCardProps {
    title: string;
    value: string;
    icon: React.ReactNode;
}

const InfoCard = ({ title, value, icon }: InfoCardProps) => {
    return (
        <div className="info-card">
            <div className="info-card__icon">
                {icon}
            </div>
            <div className="info-card__content">
                <h3>{title}</h3>
                
                <p>{value}</p>
            </div>
        </div>
    )
}

export default InfoCard;
    
