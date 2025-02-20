import { useReviews } from '../hooks/useReviews';
import "../styles/Articles.css"

const TestimonialCard = ({review}) => (
    <div className="testimonial-card">
        <div className="testimonial-header">
            <img
                src={review.image}
                alt={`Profesor-${review.name}`}
                className="profile-image"
            />
            <div className="profile-info">
                <h3 className="profile-name">{review.name}</h3>
                <p className="profile-role">{review.role}</p>
            </div>
        </div>
        <div className="quote-icon">"</div>
        <p className="testimonial-text">{review.content}</p>
        <p className="project-name">Project: {review.project}</p>
    </div>
);

export const ArticlesComponent = () => {
    const {reviews, loading, error } = useReviews();

    if(loading) return <div> Cargando reviews...</div>
    if(error) return  <div>Error: {error}</div>

    return (
        <section id="articles" className="section">
            <div className="testimonial-section">
                <h2 className="section-title">Reviews from my teachers</h2>
                <div className="testimonial-grid">
                    { reviews.map((review, index) => (
                        <TestimonialCard key={index} review={review} />
                    ))}
                </div>
            </div>
        </section>
    );
};