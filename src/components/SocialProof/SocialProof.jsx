import './SocialProof.css';

const SocialProof = () => {
    const testimonials = [
        "https://res.cloudinary.com/dbvntoevg/image/upload/v1774026819/Screenshot_20260310_193049_Chrome.jpg_phv8je.jpg",
        "https://res.cloudinary.com/dbvntoevg/image/upload/v1774026819/Screenshot_20260310_193407_Chrome.jpg_ncr9dl.jpg",
        "https://res.cloudinary.com/dbvntoevg/image/upload/v1774026815/Screenshot_20260310_193018_Chrome.jpg_omqfya.jpg",
        "https://res.cloudinary.com/dbvntoevg/image/upload/v1774026815/Screenshot_20260310_193030_Chrome.jpg_jnzqmi.jpg",
        "https://res.cloudinary.com/dbvntoevg/image/upload/v1774026814/Screenshot_20260310_193002_Chrome.jpg_uxs7if.jpg",
        "https://res.cloudinary.com/dbvntoevg/image/upload/v1774026814/Screenshot_20260310_192952_Chrome.jpg_zwajuz.jpg",
        "https://res.cloudinary.com/dbvntoevg/image/upload/v1774026813/Screenshot_20260310_193045_Chrome.jpg_o74oxf.jpg"
    ];

    // Duplicate for seamless infinite scroll
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        <section id="social-proof" className="section social-proof">
            <div className="container">
                <h2>Loved by the Community</h2>
                <div className="proof-grid">
                    <div className="reel-container">
                        <div className="reel-track">
                            {duplicatedTestimonials.map((image, index) => (
                                <div key={index} className="reel-item">
                                    <img
                                        src={image}
                                        alt={`Testimonial ${index + 1}`}
                                        className="testimonial-image"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;