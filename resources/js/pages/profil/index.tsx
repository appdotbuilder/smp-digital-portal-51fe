import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function ProfilSekolah() {
    return (
        <>
            <Head title="Profil Sekolah - SMP Digital" />
            
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
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
                                <Link href="/profil" className="text-blue-600 font-medium">Profil</Link>
                                <Link href="/akademik" className="text-gray-700 hover:text-blue-600 font-medium dark:text-gray-300">Akademik</Link>
                                <Link href="/berita" className="text-gray-700 hover:text-blue-600 font-medium dark:text-gray-300">Berita</Link>
                            </nav>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 dark:text-white">
                                🏛️ Profil <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">SMP Digital</span>
                            </h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
                                Mengenal lebih dekat sekolah menengah pertama yang berkomitmen pada pendidikan berkualitas dan inovasi digital.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="pb-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 mb-16">
                            {/* Sejarah */}
                            <div className="bg-white rounded-xl shadow-lg p-8 dark:bg-gray-800">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center dark:text-white">
                                    📚 Sejarah Singkat
                                </h2>
                                <div className="prose dark:prose-invert">
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        SMP Digital didirikan pada tahun 2010 dengan visi menjadi lembaga pendidikan yang unggul dalam penerapan teknologi digital untuk mendukung pembelajaran modern.
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        Berawal dari 120 siswa dan 15 guru, kini kami telah berkembang menjadi sekolah dengan lebih dari 600 siswa dan 45 tenaga pendidik berpengalaman.
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Dalam perjalanan 14 tahun, kami telah meraih berbagai prestasi akademik dan non-akademik tingkat kota, provinsi, hingga nasional.
                                    </p>
                                </div>
                            </div>

                            {/* Visi & Misi */}
                            <div className="bg-white rounded-xl shadow-lg p-8 dark:bg-gray-800">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center dark:text-white">
                                    🎯 Visi & Misi
                                </h2>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold text-blue-600 mb-3 dark:text-blue-400">VISI</h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            "Menjadi sekolah menengah pertama yang unggul dalam prestasi, berkarakter mulia, dan berdaya saing global dengan berbasis teknologi digital."
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-blue-600 mb-3 dark:text-blue-400">MISI</h3>
                                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                            <li className="flex items-start">
                                                <span className="mr-2">•</span>
                                                Menyelenggarakan pendidikan berkualitas dengan kurikulum yang inovatif
                                            </li>
                                            <li className="flex items-start">
                                                <span className="mr-2">•</span>
                                                Mengintegrasikan teknologi digital dalam proses pembelajaran
                                            </li>
                                            <li className="flex items-start">
                                                <span className="mr-2">•</span>
                                                Membentuk karakter siswa yang berakhlak mulia dan berjiwa leadership
                                            </li>
                                            <li className="flex items-start">
                                                <span className="mr-2">•</span>
                                                Mengembangkan potensi siswa melalui kegiatan ekstrakurikuler yang beragam
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Fasilitas */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center dark:text-white">
                                🏢 Fasilitas Sekolah
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { icon: '🖥️', title: 'Lab Komputer', desc: 'Laboratorium komputer dengan 40 unit PC terbaru dan koneksi internet berkecepatan tinggi.' },
                                    { icon: '🔬', title: 'Lab IPA', desc: 'Laboratorium IPA lengkap untuk praktikum Fisika, Kimia, dan Biologi dengan peralatan modern.' },
                                    { icon: '📚', title: 'Perpustakaan Digital', desc: 'Perpustakaan dengan koleksi 5000+ buku dan akses e-book serta jurnal digital.' },
                                    { icon: '🏀', title: 'Lapangan Olahraga', desc: 'Lapangan basket, voli, dan badminton indoor serta lapangan sepak bola outdoor.' },
                                    { icon: '🎭', title: 'Aula Serbaguna', desc: 'Aula dengan kapasitas 500 orang untuk berbagai acara dan kegiatan sekolah.' },
                                    { icon: '🍽️', title: 'Kantin Sehat', desc: 'Kantin dengan menu makanan bergizi dan area makan yang nyaman dan bersih.' }
                                ].map((facility) => (
                                    <div key={facility.title} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow dark:bg-gray-800">
                                        <div className="text-4xl mb-4">{facility.icon}</div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 dark:text-white">{facility.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-300">{facility.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Akreditasi & Penghargaan */}
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-8 text-white text-center">
                            <h2 className="text-3xl font-bold mb-6">🏆 Akreditasi & Penghargaan</h2>
                            <div className="grid md:grid-cols-3 gap-8 mb-8">
                                <div>
                                    <div className="text-4xl mb-2">🅰️</div>
                                    <h3 className="font-bold text-lg mb-2">Akreditasi A</h3>
                                    <p className="text-blue-100">Terakreditasi A dari BAN-S/M dengan nilai 95</p>
                                </div>
                                <div>
                                    <div className="text-4xl mb-2">🥇</div>
                                    <h3 className="font-bold text-lg mb-2">Sekolah Adiwiyata</h3>
                                    <p className="text-blue-100">Penghargaan Sekolah Peduli Lingkungan tingkat Nasional</p>
                                </div>
                                <div>
                                    <div className="text-4xl mb-2">💻</div>
                                    <h3 className="font-bold text-lg mb-2">Sekolah Digital</h3>
                                    <p className="text-blue-100">Pioneer sekolah berbasis teknologi digital di kota</p>
                                </div>
                            </div>
                            <Link
                                href="/galeri"
                                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                Lihat Galeri Prestasi →
                            </Link>
                        </div>

                        {/* Struktur Organisasi Preview */}
                        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 dark:bg-gray-800">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center dark:text-white">
                                👥 Struktur Organisasi
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                                <div className="bg-blue-50 rounded-lg p-4 dark:bg-blue-900/30">
                                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-white text-2xl">👨‍💼</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Kepala Sekolah</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">Dr. Budi Santoso, M.Pd</p>
                                </div>
                                <div className="bg-green-50 rounded-lg p-4 dark:bg-green-900/30">
                                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-white text-2xl">👨‍🏫</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Wakil Kepala Sekolah</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">Dra. Siti Nurhasanah</p>
                                </div>
                                <div className="bg-purple-50 rounded-lg p-4 dark:bg-purple-900/30">
                                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-white text-2xl">👩‍🏫</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Koordinator Kurikulum</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">S.Pd., M.Si</p>
                                </div>
                                <div className="bg-orange-50 rounded-lg p-4 dark:bg-orange-900/30">
                                    <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-white text-2xl">👨‍💼</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Koordinator Kesiswaan</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">S.Pd</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}