import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

export default function SpmbRegister() {
    const { data, setData, post, processing, errors } = useForm({
        student_name: '',
        student_email: '',
        student_phone: '',
        gender: '',
        birth_date: '',
        birth_place: '',
        address: '',
        previous_school: '',
        parent_name: '',
        parent_phone: '',
        parent_occupation: ''
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('spmb.store'));
    };

    return (
        <>
            <Head title="Formulir Pendaftaran SPMB" />
            
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
                                <Link href="/spmb" className="text-gray-700 hover:text-green-600 font-medium dark:text-gray-300">← Kembali ke SPMB</Link>
                            </nav>
                        </div>
                    </div>
                </header>

                <div className="py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-white">
                                📝 Formulir Pendaftaran <span className="text-green-600">SPMB 2024/2025</span>
                            </h1>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                Isilah formulir di bawah ini dengan data yang lengkap dan benar
                            </p>
                        </div>

                        {/* Form */}
                        <div className="bg-white rounded-xl shadow-lg p-8 dark:bg-gray-800">
                            <form onSubmit={submit} className="space-y-8">
                                {/* Data Siswa */}
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 flex items-center dark:text-white dark:border-gray-700">
                                        👨‍🎓 Data Siswa
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                                                Nama Lengkap *
                                            </label>
                                            <input
                                                type="text"
                                                value={data.student_name}
                                                onChange={(e) => setData('student_name', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                                placeholder="Masukkan nama lengkap siswa"
                                            />
                                            {errors.student_name && <p className="mt-1 text-sm text-red-600">{errors.student_name}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                value={data.student_email}
                                                onChange={(e) => setData('student_email', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                                placeholder="email@contoh.com"
                                            />
                                            {errors.student_email && <p className="mt-1 text-sm text-red-600">{errors.student_email}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                                                Nomor HP *
                                            </label>
                                            <input
                                                type="tel"
                                                value={data.student_phone}
                                                onChange={(e) => setData('student_phone', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                                placeholder="08xxxxxxxxxx"
                                            />
                                            {errors.student_phone && <p className="mt-1 text-sm text-red-600">{errors.student_phone}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                                                Jenis Kelamin *
                                            </label>
                                            <select
                                                value={data.gender}
                                                onChange={(e) => setData('gender', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                            >
                                                <option value="">Pilih jenis kelamin</option>
                                                <option value="laki-laki">Laki-laki</option>
                                                <option value="perempuan">Perempuan</option>
                                            </select>
                                            {errors.gender && <p className="mt-1 text-sm text-red-600">{errors.gender}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                                                Tanggal Lahir *
                                            </label>
                                            <input
                                                type="date"
                                                value={data.birth_date}
                                                onChange={(e) => setData('birth_date', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                            />
                                            {errors.birth_date && <p className="mt-1 text-sm text-red-600">{errors.birth_date}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                                                Tempat Lahir *
                                            </label>
                                            <input
                                                type="text"
                                                value={data.birth_place}
                                                onChange={(e) => setData('birth_place', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                                placeholder="Jakarta"
                                            />
                                            {errors.birth_place && <p className="mt-1 text-sm text-red-600">{errors.birth_place}</p>}
                                        </div>

                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                                                Alamat Lengkap *
                                            </label>
                                            <textarea
                                                rows={3}
                                                value={data.address}
                                                onChange={(e) => setData('address', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                                placeholder="Jl. Contoh No. 123, RT/RW 01/02, Kelurahan, Kecamatan, Kota"
                                            />
                                            {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
                                        </div>

                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                                                Asal Sekolah *
                                            </label>
                                            <input
                                                type="text"
                                                value={data.previous_school}
                                                onChange={(e) => setData('previous_school', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                                placeholder="SD Negeri 01 Jakarta"
                                            />
                                            {errors.previous_school && <p className="mt-1 text-sm text-red-600">{errors.previous_school}</p>}
                                        </div>
                                    </div>
                                </div>

                                {/* Data Orang Tua */}
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200 flex items-center dark:text-white dark:border-gray-700">
                                        👨‍👩‍👧‍👦 Data Orang Tua/Wali
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                                                Nama Orang Tua/Wali *
                                            </label>
                                            <input
                                                type="text"
                                                value={data.parent_name}
                                                onChange={(e) => setData('parent_name', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                                placeholder="Nama orang tua/wali"
                                            />
                                            {errors.parent_name && <p className="mt-1 text-sm text-red-600">{errors.parent_name}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                                                Nomor HP Orang Tua *
                                            </label>
                                            <input
                                                type="tel"
                                                value={data.parent_phone}
                                                onChange={(e) => setData('parent_phone', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                                placeholder="08xxxxxxxxxx"
                                            />
                                            {errors.parent_phone && <p className="mt-1 text-sm text-red-600">{errors.parent_phone}</p>}
                                        </div>

                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                                                Pekerjaan Orang Tua
                                            </label>
                                            <input
                                                type="text"
                                                value={data.parent_occupation}
                                                onChange={(e) => setData('parent_occupation', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                                placeholder="Pekerjaan orang tua (opsional)"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Pernyataan */}
                                <div className="bg-blue-50 rounded-lg p-6 dark:bg-blue-900/30">
                                    <h3 className="font-semibold text-gray-900 mb-3 dark:text-white">📝 Pernyataan</h3>
                                    <p className="text-sm text-gray-600 mb-4 dark:text-gray-300">
                                        Dengan mengisi dan mengirim formulir ini, saya menyatakan bahwa:
                                    </p>
                                    <ul className="text-sm text-gray-600 space-y-1 mb-4 dark:text-gray-300">
                                        <li>• Semua data yang saya isi adalah benar dan dapat dipertanggungjawabkan</li>
                                        <li>• Saya bersedia mengikuti seluruh proses seleksi yang ditetapkan</li>
                                        <li>• Saya memahami bahwa data palsu akan berakibat pembatalan pendaftaran</li>
                                        <li>• Saya setuju dengan syarat dan ketentuan yang berlaku</li>
                                    </ul>
                                </div>

                                {/* Submit Button */}
                                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg flex items-center justify-center"
                                    >
                                        {processing ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Memproses...
                                            </>
                                        ) : (
                                            '📤 Kirim Pendaftaran'
                                        )}
                                    </button>
                                    <Link
                                        href="/spmb"
                                        className="flex-1 sm:flex-initial border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 font-semibold text-lg flex items-center justify-center dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                                    >
                                        ← Kembali
                                    </Link>
                                </div>

                                <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                                    <p>Butuh bantuan? Hubungi kami di <strong>(021) 1234-5678</strong> atau <strong>spmb@smpdigital.sch.id</strong></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}