import React from 'react';
import { Head, Link, router, usePage } from '@inertiajs/react';

interface News {
    id: number;
    title: string;
    excerpt: string;
    image: string | null;
    category: string;
    published_at: string;
    author: {
        name: string;
    };
}

interface Props {
    news: {
        data: News[];
        links: Array<{
            url: string | null;
            label: string;
            active: boolean;
        }>;
        current_page: number;
        last_page: number;
    };
    filters: {
        category?: string;
        search?: string;
    };
    categories: Record<string, string>;
    [key: string]: unknown;
}

export default function NewsIndex() {
    const { news, filters, categories } = usePage<Props>().props;

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const search = formData.get('search') as string;
        
        router.get('/berita', {
            search: search || undefined,
            category: filters.category
        }, {
            preserveState: true,
            replace: true
        });
    };

    const handleCategoryFilter = (category: string | null) => {
        router.get('/berita', {
            category: category || undefined,
            search: filters.search
        }, {
            preserveState: true,
            replace: true
        });
    };

    return (
        <>
            <Head title="Berita & Artikel - SMP Digital" />
            
            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-orange-900">
                {/* Header */}
                <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-50 dark:bg-gray-900/80 dark:border-gray-700/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            <Link href="/" className="flex items-center space-x-2">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">🎓</span>
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold text-gray-900 dark:text-white">SMP Digital</h1>
                                </div>
                            </Link>
                            
                            <nav className="flex items-center space-x-6">
                                <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium dark:text-gray-300">Beranda</Link>
                                <Link href="/profil" className="text-gray-700 hover:text-blue-600 font-medium dark:text-gray-300">Profil</Link>
                                <Link href="/berita" className="text-orange-600 font-medium">Berita</Link>
                            </nav>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 dark:text-white">
                                📰 <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Berita & Artikel</span>
                            </h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
                                Ikuti perkembangan terbaru sekolah, prestasi siswa, dan informasi pendidikan terkini.
                            </p>
                        </div>

                        {/* Search & Filter */}
                        <div className="bg-white rounded-xl shadow-lg p-6 mb-12 dark:bg-gray-800">
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Search */}
                                <form onSubmit={handleSearch}>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                                        🔍 Cari Berita
                                    </label>
                                    <div className="flex">
                                        <input
                                            type="text"
                                            name="search"
                                            defaultValue={filters.search || ''}
                                            placeholder="Masukkan kata kunci..."
                                            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                        />
                                        <button
                                            type="submit"
                                            className="bg-orange-600 text-white px-4 py-2 rounded-r-lg hover:bg-orange-700 transition-colors"
                                        >
                                            Cari
                                        </button>
                                    </div>
                                </form>

                                {/* Category Filter */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                                        📂 Filter Kategori
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        <button
                                            onClick={() => handleCategoryFilter(null)}
                                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                                !filters.category
                                                    ? 'bg-orange-600 text-white'
                                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                                            }`}
                                        >
                                            Semua
                                        </button>
                                        {Object.entries(categories).map(([key, label]) => (
                                            <button
                                                key={key}
                                                onClick={() => handleCategoryFilter(key)}
                                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                                    filters.category === key
                                                        ? 'bg-orange-600 text-white'
                                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                                                }`}
                                            >
                                                {label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* News Grid */}
                <section className="pb-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {news.data.length > 0 ? (
                            <>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                    {news.data.map((article) => (
                                        <article key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow dark:bg-gray-800">
                                            <div className="h-48 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900 dark:to-red-900"></div>
                                            <div className="p-6">
                                                <div className="flex items-center space-x-2 mb-3">
                                                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium dark:bg-orange-900 dark:text-orange-200">
                                                        {categories[article.category] || article.category}
                                                    </span>
                                                    <span className="text-gray-500 text-sm dark:text-gray-400">
                                                        {formatDate(article.published_at)}
                                                    </span>
                                                </div>
                                                <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 dark:text-white">
                                                    {article.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm mb-4 line-clamp-3 dark:text-gray-300">
                                                    {article.excerpt}
                                                </p>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                                        {article.author.name}
                                                    </span>
                                                    <Link
                                                        href={`/berita/${article.id}`}
                                                        className="text-orange-600 hover:text-orange-700 font-medium text-sm dark:text-orange-400"
                                                    >
                                                        Baca Selengkapnya →
                                                    </Link>
                                                </div>
                                            </div>
                                        </article>
                                    ))}
                                </div>

                                {/* Pagination */}
                                {news.last_page > 1 && (
                                    <div className="flex justify-center">
                                        <nav className="flex items-center space-x-2">
                                            {news.links.map((link, index) => (
                                                <Link
                                                    key={index}
                                                    href={link.url || '#'}
                                                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                                        link.active
                                                            ? 'bg-orange-600 text-white'
                                                            : link.url
                                                            ? 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700'
                                                            : 'text-gray-400 cursor-not-allowed dark:text-gray-600'
                                                    }`}
                                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                                />
                                            ))}
                                        </nav>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="text-center py-16">
                                <div className="text-6xl mb-4">📰</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2 dark:text-white">
                                    Tidak ada berita ditemukan
                                </h3>
                                <p className="text-gray-600 mb-6 dark:text-gray-300">
                                    {filters.search || filters.category 
                                        ? 'Coba ubah kata kunci pencarian atau filter kategori.'
                                        : 'Belum ada berita yang dipublikasikan.'
                                    }
                                </p>
                                {(filters.search || filters.category) && (
                                    <button
                                        onClick={() => handleCategoryFilter(null)}
                                        className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors"
                                    >
                                        Lihat Semua Berita
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </>
    );
}