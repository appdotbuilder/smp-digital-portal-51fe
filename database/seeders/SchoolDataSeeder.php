<?php

namespace Database\Seeders;

use App\Models\Announcement;
use App\Models\Event;
use App\Models\Extracurricular;
use App\Models\News;
use App\Models\User;
use Illuminate\Database\Seeder;

class SchoolDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create admin user
        $admin = User::factory()->create([
            'name' => 'Admin SMP Digital',
            'email' => 'admin@smpdigital.sch.id',
        ]);

        // Create teacher users
        $teacher1 = User::factory()->create([
            'name' => 'Dr. Budi Santoso',
            'email' => 'kepala@smpdigital.sch.id',
        ]);

        $teacher2 = User::factory()->create([
            'name' => 'Dra. Siti Nurhasanah',
            'email' => 'wakil@smpdigital.sch.id',
        ]);

        // Create featured news
        News::factory()->create([
            'title' => 'Selamat Datang di Era Digital SMP Digital',
            'excerpt' => 'SMP Digital memperkenalkan platform pembelajaran digital terdepan untuk mendukung pendidikan berkualitas.',
            'content' => '<p>SMP Digital dengan bangga memperkenalkan sistem pembelajaran digital yang revolusioner. Platform ini dirancang khusus untuk memberikan pengalaman belajar yang lebih interaktif dan menyenangkan bagi seluruh siswa.</p><p>Dengan fitur-fitur canggih seperti e-learning, perpustakaan digital, dan sistem penilaian online, kami berkomitmen untuk mempersiapkan generasi yang siap menghadapi tantangan masa depan.</p><p>Mari bergabung bersama kami dalam menciptakan masa depan pendidikan yang lebih baik!</p>',
            'category' => 'sekolah',
            'is_featured' => true,
            'author_id' => $admin->id,
            'published_at' => now()->subDays(2),
        ]);

        News::factory()->create([
            'title' => 'Prestasi Membanggakan: Juara 1 Olimpiade Matematika Tingkat Provinsi',
            'excerpt' => 'Tim Olimpiade Matematika SMP Digital meraih juara 1 dalam kompetisi tingkat provinsi yang diselenggarakan bulan lalu.',
            'content' => '<p>Prestasi membanggakan kembali diraih oleh siswa-siswi SMP Digital. Tim Olimpiade Matematika yang terdiri dari Ahmad Rizki (kelas 8A), Sari Indah (kelas 8B), dan Bayu Pratama (kelas 9A) berhasil meraih juara 1 dalam Olimpiade Matematika tingkat provinsi.</p><p>Kompetisi yang diikuti oleh 150 sekolah dari seluruh provinsi ini menguji kemampuan logika dan pemecahan masalah matematika tingkat tinggi.</p><p>"Kami sangat bangga dengan pencapaian ini. Ini adalah hasil dari kerja keras siswa dan dukungan penuh dari para guru pembimbing," ujar Kepala Sekolah.</p>',
            'category' => 'prestasi',
            'is_featured' => true,
            'author_id' => $teacher1->id,
            'published_at' => now()->subDays(5),
        ]);

        News::factory()->create([
            'title' => 'Implementasi Kurikulum Merdeka: Pendidikan yang Lebih Fleksibel',
            'excerpt' => 'SMP Digital resmi menerapkan Kurikulum Merdeka untuk memberikan pembelajaran yang lebih adaptif dan student-centered.',
            'content' => '<p>Memasuki tahun ajaran 2024/2025, SMP Digital resmi mengimplementasikan Kurikulum Merdeka yang memberikan kebebasan lebih besar bagi siswa untuk mengeksplorasi minat dan bakat mereka.</p><p>Kurikulum ini menekankan pada pengembangan karakter, kompetensi, dan kreativitas siswa melalui pembelajaran yang lebih kontekstual dan bermakna.</p><p>Dengan pendekatan project-based learning dan pembelajaran berbasis masalah, siswa diharapkan dapat mengembangkan kemampuan berpikir kritis dan problem solving yang lebih baik.</p>',
            'category' => 'pendidikan',
            'is_featured' => true,
            'author_id' => $teacher2->id,
            'published_at' => now()->subDays(7),
        ]);

        // Create more news
        News::factory(15)->create([
            'author_id' => $admin->id,
        ]);

        // Create urgent announcements
        Announcement::factory()->create([
            'title' => 'Libur Nasional: Hari Kemerdekaan RI ke-79',
            'content' => 'Dalam rangka memperingati Hari Kemerdekaan Republik Indonesia ke-79, kegiatan belajar mengajar diliburkan pada tanggal 17 Agustus 2024. Sekolah akan kembali beroperasi normal pada hari Senin, 19 Agustus 2024.',
            'priority' => 'urgent',
            'is_pinned' => true,
            'author_id' => $admin->id,
            'expires_at' => now()->addDays(30),
        ]);

        Announcement::factory()->create([
            'title' => 'Pendaftaran SPMB 2024/2025 Dibuka!',
            'content' => 'Pendaftaran Siswa Baru tahun ajaran 2024/2025 resmi dibuka. Kuota terbatas 180 siswa (6 kelas). Daftar sekarang melalui website atau datang langsung ke sekolah. Info lengkap: spmb@smpdigital.sch.id',
            'priority' => 'high',
            'is_pinned' => true,
            'author_id' => $admin->id,
            'expires_at' => now()->addMonth(),
        ]);

        Announcement::factory()->create([
            'title' => 'Maintenance Sistem E-Learning',
            'content' => 'Sistem e-learning akan mengalami maintenance pada Sabtu, 25 Januari 2024, pukul 20.00 - 24.00 WIB. Selama periode ini, akses ke platform pembelajaran digital akan terganggu. Mohon maaf atas ketidaknyamanan ini.',
            'priority' => 'medium',
            'is_pinned' => false,
            'author_id' => $admin->id,
            'expires_at' => now()->addWeek(),
        ]);

        // Create more announcements
        Announcement::factory(8)->create([
            'author_id' => $admin->id,
        ]);

        // Create upcoming events
        Event::factory()->create([
            'title' => 'Ujian Tengah Semester Genap',
            'description' => 'Pelaksanaan Ujian Tengah Semester Genap untuk semua kelas 7, 8, dan 9. Siswa diharapkan mempersiapkan diri dengan baik.',
            'category' => 'akademik',
            'start_date' => now()->addWeeks(2),
            'end_date' => now()->addWeeks(3),
            'location' => 'Ruang Kelas Masing-masing',
            'is_all_day' => true,
        ]);

        Event::factory()->create([
            'title' => 'Kompetisi Futsal Antar Kelas',
            'description' => 'Tournament futsal antar kelas untuk memeriahkan bulan olahraga. Semua kelas wajib mengirimkan tim.',
            'category' => 'kesiswaan',
            'start_date' => now()->addDays(10),
            'end_date' => now()->addDays(12),
            'location' => 'Lapangan Olahraga',
            'is_all_day' => false,
        ]);

        Event::factory()->create([
            'title' => 'Workshop Digital Marketing untuk Siswa',
            'description' => 'Workshop khusus untuk siswa kelas 9 tentang digital marketing dan kewirausahaan digital.',
            'category' => 'akademik',
            'start_date' => now()->addDays(20),
            'end_date' => null,
            'location' => 'Lab Komputer',
            'is_all_day' => false,
        ]);

        // Create more events
        Event::factory(12)->create();

        // Create extracurriculars
        $extracurriculars = [
            [
                'name' => 'Robotika',
                'description' => 'Ekstrakurikuler robotika untuk mengembangkan kemampuan teknologi dan programming siswa. Siswa akan belajar membuat dan memprogram robot untuk berbagai keperluan.',
                'advisor' => 'Bapak Agus Setiawan, S.T.',
                'schedule' => 'Setiap Selasa dan Kamis, 15:30 - 17:00',
                'achievements' => 'Juara 2 Kompetisi Robotika Tingkat Kota 2023, Juara 1 Robot Soccer Regional 2024',
                'is_active' => true,
            ],
            [
                'name' => 'English Club',
                'description' => 'Klub bahasa Inggris untuk meningkatkan kemampuan berbahasa Inggris siswa melalui conversation, debate, dan drama.',
                'advisor' => 'Ibu Sarah Johnson, M.Ed.',
                'schedule' => 'Setiap Rabu, 14:00 - 15:30',
                'achievements' => 'Juara 1 English Speech Contest Tingkat Provinsi 2023',
                'is_active' => true,
            ],
            [
                'name' => 'Basket',
                'description' => 'Tim basket sekolah untuk mengembangkan bakat olahraga siswa dan membangun karakter sportivitas.',
                'advisor' => 'Bapak Dedi Kurnia, S.Pd.',
                'schedule' => 'Senin, Rabu, Jumat: 15:30 - 17:30',
                'achievements' => 'Juara 3 Tournament Basket Antar SMP se-Jakarta 2024',
                'is_active' => true,
            ],
            [
                'name' => 'Pramuka',
                'description' => 'Gerakan Pramuka untuk membentuk karakter kepemimpinan, kemandirian, dan cinta tanah air.',
                'advisor' => 'Kakak Fitri Handayani, S.Pd.',
                'schedule' => 'Setiap Sabtu, 08:00 - 11:00',
                'achievements' => 'Regu Terbaik Tingkat Kwartir Cabang 2023',
                'is_active' => true,
            ],
            [
                'name' => 'Paduan Suara',
                'description' => 'Ekstrakurikuler paduan suara untuk mengembangkan bakat seni musik dan vokal siswa.',
                'advisor' => 'Ibu Melinda Sari, S.Sn.',
                'schedule' => 'Selasa dan Kamis, 14:00 - 15:30',
                'achievements' => 'Juara 2 Festival Paduan Suara SMP Tingkat Kota 2023',
                'is_active' => true,
            ],
            [
                'name' => 'Jurnalistik',
                'description' => 'Klub jurnalistik sekolah untuk mengembangkan kemampuan menulis dan jurnalisme siswa.',
                'advisor' => 'Bapak Romi Wahyudi, S.Pd.',
                'schedule' => 'Setiap Jumat, 15:00 - 16:30',
                'achievements' => 'Majalah Sekolah Terbaik Tingkat Kota 2024',
                'is_active' => true,
            ],
        ];

        foreach ($extracurriculars as $extracurricular) {
            Extracurricular::create($extracurricular);
        }
    }
}