function PostCard({title, excerpt, author, date}) {
    return (
        <article className="post-card">
            <h3>{title}</h3>
            <p>{excerpt}</p>

            <div className="post-meta">
                <span>By {author}</span>
                <span>Posted on {date}</span>
            </div>
        </article>
    )
}

function PostList() {
    return (
        <div className="post-list">
            <PostCard
                title="Alumni Spotlight: Martha Mueni"
                excerpt="Discover the inspiring journey of Martha Mueni, an IYF alumna who has made significant strides in the tech industry. From her early days at IYF to her current role as a software engineer, learn how Martha's passion for technology and dedication to learning have propelled her career forward."
                author="Martha Mueni"
                date="2026-04-18"
            />
            <PostCard
                title="Networking Tips for Alumni"
                excerpt="Networking is a crucial aspect of career growth, especially for alumni looking to connect with industry professionals. In this post, we share effective networking strategies, including how to leverage LinkedIn, attend industry events, and build meaningful relationships that can open doors to new opportunities."
                author="Ngatia Philip"
                date="2026-04-21"
            />
            <PostCard
                title="Career Development Resources for Alumni"
                excerpt="Explore the various career development resources available to our alumni, including mentorship programs, workshops, and online courses designed to help you advance in your field."
                author="Connie Bosibori"
                date="2026-04-25"
            />
        </div>
    )
}

export default PostCard;