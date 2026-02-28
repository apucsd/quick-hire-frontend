import { Link } from "react-router-dom"
const categories = [
    { title: "Design", count: "115 Jobs", icon: "🎨", color: "bg-purple-100 text-purple-600" },
    { title: "Development", count: "312 Jobs", icon: "💻", color: "bg-green-100 text-green-600" },
    { title: "Marketing", count: "84 Jobs", icon: "📈", color: "bg-orange-100 text-orange-600" },
    { title: "Business", count: "42 Jobs", icon: "💼", color: "bg-blue-100 text-blue-600" },
];
const CategoriesSection = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Explore by <span className="text-primary">Category</span></h2>
                    <p className="text-body">Find jobs that match your expertise and passion.</p>
                </div>
                <Link to="/" className="text-primary font-bold hover:underline">View All Categories &rarr;</Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((cat, i) => (
                    <div key={i} className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-primary/20 hover:shadow-xl hover:shadow-slate-200/50 transition-all cursor-pointer text-center">
                        <div className={`w-16 h-16 ${cat.color} rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                            {cat.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{cat.title}</h3>
                        <p className="text-body text-sm">{cat.count}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CategoriesSection
