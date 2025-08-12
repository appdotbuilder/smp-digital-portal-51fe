import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function SpmbIndex() {
    return (
        <>
            <Head title="SPMB - Sistem Penerimaan Murid Baru" />
            
            <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-green-900">
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
                                <Link href="/spmb" className="text-green-600 font-medium">SPMB</Link>
                            </nav>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 dark:text-white">
                                📝 <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">SPMB 2024/2025</span>
                            </h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 dark:text-gray-300">
                                Bergabunglah dengan SMP Digital dan wujudkan impian pendidikan berkualitas dengan teknologi terdepan!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/spmb/daftar"
                                    className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg inline-flex items-center justify-center"
                                >
                                    🚀 Daftar Sekarang
                                </Link>
                                <a
                                    href="#jadwal"
                                    className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold text-lg inline-flex items-center justify-center dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/20"
                                >
                                    📅 Lihat Jadwal
                                </a>
                            </div>
                        </div>

                        {/* Status Pendaftaran */}
                        <div className="bg-white rounded-xl shadow-lg p-8 mb-16 text-center dark:bg-gray-800">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">📊 Status Pendaftaran</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-green-50 rounded-lg p-6 dark:bg-green-900/30">
                                    <div className="text-3xl font-bold text-green-600 mb-2">BUKA</div>
                                    <p className="text-gray-600 dark:text-gray-300">Pendaftaran Online</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">15 Jan - 15 Mar 2024</p>
                                </div>
                                <div className="bg-blue-50 rounded-lg p-6 dark:bg-blue-900/30">
                                    <div className="text-3xl font-bold text-blue-600 mb-2">180</div>
                                    <p className="text-gray-600 dark:text-gray-300">Kuota Tersedia</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">6 kelas @ 30 siswa</p>
                                </div>
                                <div className="bg-orange-50 rounded-lg p-6 dark:bg-orange-900/30">
                                    <div className="text-3xl font-bold text-orange-600 mb-2">127</div>
                                    <p className="text-gray-600 dark:text-gray-300">Sudah Mendaftar</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">53 kursi tersisa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Alur Pendaftaran */}
                <section className="py-16 bg-white/50 dark:bg-gray-800/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center dark:text-white">
                            🔄 Alur Pendaftaran
                        </h2>
                        
                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { step: '1', icon: '📝', title: 'Daftar Online', desc: 'Isi formulir pendaftaran online dengan lengkap dan benar' },
                                { step: '2', icon: '📄', title: 'Upload Dokumen', desc: 'Upload dokumen persyaratan sesuai ketentuan' },
                                { step: '3', icon: '✅', title: 'Verifikasi', desc: 'Tim admin akan memverifikasi data dan dokumen' },
                                { step: '4', icon: '🎉', title: 'Pengumuman', desc: 'Pengumuman hasil seleksi dan informasi daftar ulang' }
                            ].map((item, index) => (
                                <div key={item.step} className="relative">
                                    <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow dark:bg-gray-800">
                                        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-2xl">{item.icon}</span>
                                        </div>
                                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <span className="text-white font-bold text-sm">{item.step}</span>
                                        </div>
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 dark:text-white">{item.title}</h3>
                                        <p className="text-gray-600 text-sm dark:text-gray-300">{item.desc}</p>
                                    </div>
                                    {index < 3 && (
                                        <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-green-600 transform -translate-y-1/2"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Syarat & Ketentuan */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Persyaratan */}
                            <div className="bg-white rounded-xl shadow-lg p-8 dark:bg-gray-800">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center dark:text-white">
                                    📋 Persyaratan Pendaftaran
                                </h2>
                                <ul className="space-y-4">
                                    {[
                                        'Lulusan SD/MI atau sederajat',
                                        'Usia maksimal 15 tahun pada 1 Juli 2024',
                                        'Fotokopi ijazah SD/MI yang telah dilegalisir',
                                        'Fotokopi SKHUN SD/MI yang telah dilegalisir',
                                        'Fotokopi rapor kelas 4, 5, dan 6 yang dilegalisir',
                                        'Fotokopi akte kelahiran',
                                        'Fotokopi kartu keluarga (KK)',
                                        'Pas foto 3x4 berwarna sebanyak 4 lembar',
                                        'Surat keterangan sehat dari dokter',
                                        'Surat keterangan berkelakuan baik dari SD asal'
                                    ].map((requirement, index) => (
                                        <li key={index} className="flex items-start space-x-3">
                                            <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                                                {index + 1}
                                            </span>
                                            <span className="text-gray-600 dark:text-gray-300">{requirement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Jadwal Penting */}
                            <div className="bg-white rounded-xl shadow-lg p-8 dark:bg-gray-800" id="jadwal">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center dark:text-white">
                                    📅 Jadwal Penting
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        { 
                                            date: '15 Jan - 15 Mar 2024',
                                            event: 'Pendaftaran Online',
                                            status: 'active',
                                            desc: 'Pendaftaran dilakukan secara online melalui website'
                                        },
                                        { 
                                            date: '16 - 20 Mar 2024',
                                            event: 'Verifikasi Dokumen',
                                            status: 'upcoming',
                                            desc: 'Verifikasi dan validasi dokumen persyaratan'
                                        },
                                        { 
                                            date: '25 Mar 2024',
                                            event: 'Tes Seleksi',
                                            status: 'upcoming',
                                            desc: 'Tes tertulis dan wawancara'
                                        },
                                        { 
                                            date: '1 Apr 2024',
                                            event: 'Pengumuman Hasil',
                                            status: 'upcoming',
                                            desc: 'Pengumuman daftar calon siswa yang diterima'
                                        },
                                        { 
                                            date: '3 - 10 Apr 2024',
                                            event: 'Daftar Ulang',
                                            status: 'upcoming',
                                            desc: 'Registrasi ulang dan pembayaran biaya sekolah'
                                        }
                                    ].map((schedule, index) => (
                                        <div key={index} className="border-l-4 border-green-500 pl-4">
                                            <div className="flex items-center space-x-2 mb-1">
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                    schedule.status === 'active' 
                                                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                                        : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                                                }`}>
                                                    {schedule.status === 'active' ? 'BERLANGSUNG' : 'MENDATANG'}
                                                </span>
                                                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                                    {schedule.date}
                                                </span>
                                            </div>
                                            <h4 className="font-semibold text-gray-900 mb-1 dark:text-white">{schedule.event}</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-300">{schedule.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Siap Bergabung dengan SMP Digital?</h2>
                        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                            Jangan lewatkan kesempatan untuk menjadi bagian dari sekolah digital terdepan. Daftar sekarang dan raih masa depan gemilang!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/spmb/daftar"
                                className="bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg"
                            >
                                📝 Mulai Pendaftaran
                            </Link>
                            <a
                                href="tel:(021)1234-5678"
                                className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-bold text-lg"
                            >
                                📞 Hubungi Kami
                            </a>
                        </div>
                        <div className="mt-8 text-green-100">
                            <p className="mb-2">Ada pertanyaan? Hubungi kami:</p>
                            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
                                <span>📧 spmb@smpdigital.sch.id</span>
                                <span>📱 (021) 1234-5678</span>
                                <span>💬 WhatsApp: 0812-3456-7890</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}