export default function FocusAreas() {
    const areas = [
        {
            title: "Healthcare Camps",
            description:
                "Providing free medical checkups and health awareness programs in underserved communities.",
        },
        {
            title: "Education Support",
            description:
                "Helping children with school supplies, mentorship and access to quality education.",
        },
        {
            title: "Food Distribution",
            description:
                "Supporting families facing food insecurity through community food drives.",
        },
        {
            title: "Women Empowerment",
            description:
                "Skill training and support programs to help women become financially independent.",
        },
        {
            title: "Plantation Drives",
            description:
                "Organizing tree plantation drives to promote environmental sustainability.",
        },
        {
            title: "Disaster Relief",
            description:
                "Providing emergency help and supplies during natural disasters.",
        },
        {
            title: "Community Development",
            description:
                "Working on long-term welfare initiatives to uplift local communities.",
        },
    ];

    return (
        <section className="bg-gray-100 py-20">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-3xl md:text-4xl text-green-700 font-bold text-center">
                    Our Focus Areas
                </h2>

                <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
                    Humrise Welfare Foundation works across multiple social initiatives
                    to support and uplift communities.
                </p>

                <div className="mt-12 grid gap-8 md:grid-cols-3">

                    {areas.map((area, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
                        >
                            <h3 className="text-xl font-semibold text-green-700">
                                {area.title}
                            </h3>

                            <p className="text-gray-600 mt-3">
                                {area.description}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}