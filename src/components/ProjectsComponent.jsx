import { useReviews } from '../hooks/useReviews';

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
        <a href={"#"}>
            <p className="project-name">Project: {review.project}</p>
        </a>
    </div>
);

export const ProjectsComponent = () => {
    const {reviews, loading, error } = useReviews();

    if(loading) return <div> Cargando reviews...</div>
    if(error) return  <div>Error: {error}</div>

    return (
        <section id="work" className="section-projects">
            <div className="testimonial-section">
                <h2 className="section-title">Some Things I’ve Built</h2>
                <div className="testimonial-grid">
                    { reviews.map((review, index) => (
                        <TestimonialCard key={index} review={review} />
                    ))}
                </div>
            </div>
        </section>
    );
};