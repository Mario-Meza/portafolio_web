import { useReviews } from '../hooks/useReviews';
import React from "react";

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
        <p className="testimonial-text">{review.content}</p>
        <a href={"#"}>
            <p className="project-name">{review.project}</p>
        </a>
    </div>
);

export const ProjectsComponent = () => {
    const {reviews, loading, error } = useReviews();

    if(loading) return <div> Cargando reviews...</div>
    if(error) return  <div>Error: {error}</div>

    return (
        <section id="project" className="section-projects">
            <div className="testimonial-section">
                <h2 className="section-title">
                    <span className="text-gradient-primary">{'{ '}</span>
                        Some Things I’ve Built
                    <span className="text-gradient-primary">{' }'}</span>
                </h2>
                <div className="testimonial-grid">
                    { reviews.map((review, index) => (
                        <TestimonialCard key={index} review={review} />
                    ))}
                </div>
            </div>
        </section>
    );
};