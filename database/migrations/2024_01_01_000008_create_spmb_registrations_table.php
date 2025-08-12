<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('spmb_registrations', function (Blueprint $table) {
            $table->id();
            $table->string('registration_number')->unique();
            $table->string('student_name');
            $table->string('student_email');
            $table->string('student_phone');
            $table->enum('gender', ['laki-laki', 'perempuan']);
            $table->date('birth_date');
            $table->string('birth_place');
            $table->text('address');
            $table->string('previous_school');
            $table->string('parent_name');
            $table->string('parent_phone');
            $table->string('parent_occupation')->nullable();
            $table->enum('status', ['pending', 'verified', 'accepted', 'rejected'])->default('pending');
            $table->text('documents')->nullable(); // JSON field for uploaded documents
            $table->text('notes')->nullable();
            $table->timestamp('verified_at')->nullable();
            $table->timestamps();
            
            $table->index('status');
            $table->index('created_at');
            $table->index('student_email');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('spmb_registrations');
    }
};