import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] p-8 text-center">
      <h1 className="text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
        Welcome to <span className="text-blue-600">PlotFlow</span>
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mb-12">
        The ultimate real estate management platform designed specifically for land plots, ventures, and multi-tenant SaaS organizations.
      </p>
      
      <div className="flex space-x-4">
        <Link 
          href="/dashboard" 
          className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-lg hover:shadow-blue-200"
        >
          Go to Dashboard
        </Link>
        <Link 
          href="/login" 
          className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-slate-300 transition"
        >
          Partner Login
        </Link>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        <FeatureCard 
          title="Multi-Tenant" 
          description="Manage multiple organizations and sub-projects under a single unified dashboard."
        />
        <FeatureCard 
          title="Map-Ready" 
          description="Full support for plot coordinates and future polygon boundaries on interactive maps."
        />
        <FeatureCard 
          title="Lead Tracking" 
          description="Never lose a potential customer with integrated lead and activity management."
        />
      </div>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-8 bg-white border rounded-2xl text-left shadow-sm">
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
