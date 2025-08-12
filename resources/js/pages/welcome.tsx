import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

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

interface Announcement {
    id: number;
    title: string;
    content: string;
    priority: string;
    created_at: string;
}

interface Event {
    id: number;
    title: string;
    description: string;
    start_date: string;
    location: string | null;
    category: string;
}

interface Props extends SharedData {
    heroNews: News[];
    latestNews: News[];
    announcements: Announcement[];
    upcomingEvents: Event[];
    [key: string]: unknown;
}

export default function Welcome() {
    const { auth, latestNews, announcements, upcomingEvents } = usePage<Props>().props;

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    const getPriorityBadge = (priority: string) => {
        const badges = {
            urgent: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
            high: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
            medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
            low: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
        };
        return badges[priority as keyof typeof badges] || badges.medium;
    };

    return (
        <>
            <Head title="SMP Digital - Portal Informasi Sekolah">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700" rel="stylesheet" />
            </Head>
            
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
                {/* Header */}
                <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-50 dark:bg-gray-900/80 dark:border-gray-700/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            <div className="flex items-center space-x-2">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">🎓</span>
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold text-gray-900 dark:text-white">SMP Digital</h1>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Portal Informasi Sekolah</p>
                                </div>
                            </div>
                            
                            <nav className="flex items-center space-x-4">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <div className="flex items-center space-x-3">
                                        <Link
                                            href={route('login')}
                                            className="text-gray-700 hover:text-blue-600 font-medium dark:text-gray-300 dark:hover:text-blue-400"
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                                        >
                                            Register
                                        </Link>
                                    </div>
                                )}
                            </nav>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 dark:text-white">
                                🏫 <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    SMP Digital
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto dark:text-gray-300">
                                Portal informasi digital modern untuk siswa, guru, orang tua, dan calon siswa. 
                                Akses mudah ke semua informasi sekolah dalam satu platform.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/spmb"
                                    className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg inline-flex items-center justify-center"
                                >
                                    📝 Pendaftaran SPMB
                                </Link>
                                <Link
                                    href="/profil"
                                    className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg inline-flex items-center justify-center dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20"
                                >
                                    🏛️ Profil Sekolah
                                </Link>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                            {[
                                { icon: '📚', title: 'Akademik', href: '/akademik', color: 'from-green-500 to-emerald-500' },
                                { icon: '🎯', title: 'Kesiswaan', href: '/kesiswaan', color: 'from-purple-500 to-violet-500' },
                                { icon: '📰', title: 'Berita', href: '/berita', color: 'from-orange-500 to-red-500' },
                                { icon: '📸', title: 'Galeri', href: '/galeri', color: 'from-pink-500 to-rose-500' }
                            ].map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.href}
                                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 dark:bg-gray-800"
                                >
                                    <div className={`w-12 h-12 bg-gradient-to-br ${link.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                                        <span className="text-2xl">{link.icon}</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-center text-gray-900 dark:text-white">{link.title}</h3>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Main Content Grid */}
                <section className="py-16 bg-white/50 dark:bg-gray-800/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Latest News */}
                            <div className="lg:col-span-2">
                                <div className="flex items-center justify-between mb-8">
                                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">📰 Berita Terkini</h2>
                                    <Link
                                        href="/berita"
                                        className="text-blue-600 hover:text-blue-700 font-medium dark:text-blue-400"
                                    >
                                        Lihat Semua →
                                    </Link>
                                </div>
                                
                                <div className="grid md:grid-cols-2 gap-6">
                                    {latestNews.map((news) => (
                                        <article key={news.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow dark:bg-gray-800">
                                            <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900"></div>
                                            <div className="p-6">
                                                <div className="flex items-center space-x-2 mb-3">
                                                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium dark:bg-blue-900 dark:text-blue-200">
                                                        {news.category}
                                                    </span>
                                                    <span className="text-gray-500 text-sm dark:text-gray-400">
                                                        {formatDate(news.published_at)}
                                                    </span>
                                                </div>
                                                <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 dark:text-white">
                                                    {news.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm mb-4 line-clamp-3 dark:text-gray-300">
                                                    {news.excerpt}
                                                </p>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                                        {news.author.name}
                                                    </span>
                                                    <Link
                                                        href={`/berita/${news.id}`}
                                                        className="text-blue-600 hover:text-blue-700 font-medium text-sm dark:text-blue-400"
                                                    >
                                                        Baca →
                                                    </Link>
                                                </div>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-8">
                                {/* Announcements */}
                                <div className="bg-white rounded-xl shadow-lg p-6 dark:bg-gray-800">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center dark:text-white">
                                        📢 Pengumuman Penting
                                    </h3>
                                    <div className="space-y-4">
                                        {announcements.map((announcement) => (
                                            <div key={announcement.id} className="border-l-4 border-blue-500 pl-4">
                                                <div className="flex items-center space-x-2 mb-1">
                                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityBadge(announcement.priority)}`}>
                                                        {announcement.priority.toUpperCase()}
                                                    </span>
                                                </div>
                                                <h4 className="font-semibold text-gray-900 mb-1 dark:text-white">{announcement.title}</h4>
                                                <p className="text-sm text-gray-600 mb-2 line-clamp-2 dark:text-gray-300">
                                                    {announcement.content}
                                                </p>
                                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                                    {formatDate(announcement.created_at)}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Upcoming Events */}
                                <div className="bg-white rounded-xl shadow-lg p-6 dark:bg-gray-800">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center dark:text-white">
                                        📅 Agenda Terdekat
                                    </h3>
                                    <div className="space-y-4">
                                        {upcomingEvents.map((event) => (
                                            <div key={event.id} className="flex items-start space-x-3">
                                                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center dark:bg-blue-900">
                                                    <span className="text-blue-600 font-bold text-sm dark:text-blue-300">
                                                        {new Date(event.start_date).getDate()}
                                                    </span>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="font-semibold text-gray-900 text-sm dark:text-white">{event.title}</h4>
                                                    <p className="text-xs text-gray-600 mb-1 dark:text-gray-300">{event.description}</p>
                                                    <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                                                        <span>{formatDate(event.start_date)}</span>
                                                        {event.location && (
                                                            <>
                                                                <span>•</span>
                                                                <span>{event.location}</span>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Contact Info */}
                                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl shadow-lg p-6 text-white">
                                    <h3 className="text-xl font-bold mb-4">📞 Hubungi Kami</h3>
                                    <div className="space-y-3 text-sm">
                                        <div>
                                            <strong>Alamat:</strong><br />
                                            Jl. Pendidikan No. 123<br />
                                            Jakarta Selatan 12345
                                        </div>
                                        <div>
                                            <strong>Telepon:</strong> (021) 1234-5678
                                        </div>
                                        <div>
                                            <strong>Email:</strong> info@smpdigital.sch.id
                                        </div>
                                    </div>
                                    <Link
                                        href="/kontak"
                                        className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-medium mt-4 hover:bg-gray-100 transition-colors"
                                    >
                                        Lihat Detail →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4 dark:text-white">✨ Fitur Unggulan</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                Platform lengkap untuk semua kebutuhan informasi sekolah
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { 
                                    icon: '🎓', 
                                    title: 'Portal Siswa & Guru',
                                    desc: 'Akses nilai, materi pembelajaran, dan tugas dalam satu platform terintegrasi.'
                                },
                                { 
                                    icon: '📊', 
                                    title: 'Dashboard Admin',
                                    desc: 'Sistem manajemen konten lengkap untuk mengelola berita, galeri, dan pengumuman.'
                                },
                                { 
                                    icon: '📱', 
                                    title: 'Responsif Mobile',
                                    desc: 'Akses mudah dari berbagai perangkat dengan desain yang optimal.'
                                },
                                { 
                                    icon: '🔍', 
                                    title: 'Pencarian Cerdas',
                                    desc: 'Temukan informasi dengan cepat menggunakan fitur pencarian internal.'
                                },
                                { 
                                    icon: '📧', 
                                    title: 'Notifikasi Email',
                                    desc: 'Pemberitahuan otomatis untuk pendaftaran SPMB dan informasi penting.'
                                },
                                { 
                                    icon: '📈', 
                                    title: 'Laporan & Analitik',
                                    desc: 'Data pendaftar SPMB yang dapat diekspor ke format Excel dan CSV.'
                                }
                            ].map((feature) => (
                                <div key={feature.title} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow dark:bg-gray-800">
                                    <div className="text-4xl mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 dark:text-white">{feature.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="md:col-span-2">
                                <div className="flex items-center space-x-2 mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">🎓</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">SMP Digital</h3>
                                        <p className="text-gray-400 text-sm">Portal Informasi Sekolah</p>
                                    </div>
                                </div>
                                <p className="text-gray-400 mb-4">
                                    Platform digital modern untuk memudahkan akses informasi sekolah bagi seluruh civitas akademika.
                                </p>
                            </div>
                            
                            <div>
                                <h4 className="font-semibold mb-4">Menu Utama</h4>
                                <ul className="space-y-2 text-gray-400">
                                    <li><Link href="/profil" className="hover:text-white">Profil Sekolah</Link></li>
                                    <li><Link href="/akademik" className="hover:text-white">Akademik</Link></li>
                                    <li><Link href="/kesiswaan" className="hover:text-white">Kesiswaan</Link></li>
                                    <li><Link href="/berita" className="hover:text-white">Berita</Link></li>
                                </ul>
                            </div>
                            
                            <div>
                                <h4 className="font-semibold mb-4">Layanan</h4>
                                <ul className="space-y-2 text-gray-400">
                                    <li><Link href="/spmb" className="hover:text-white">SPMB</Link></li>
                                    <li><Link href="/galeri" className="hover:text-white">Galeri</Link></li>
                                    <li><Link href="/kontak" className="hover:text-white">Kontak</Link></li>
                                    <li><Link href={route('login')} className="hover:text-white">Portal Login</Link></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                            <p>&copy; 2024 SMP Digital. Semua hak cipta dilindungi.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}