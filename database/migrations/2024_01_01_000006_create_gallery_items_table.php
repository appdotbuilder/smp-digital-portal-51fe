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
        Schema::create('gallery_items', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('gallery_id');
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('file_path')->nullable(); // for photos
            $table->string('video_url')->nullable(); // for videos (YouTube/Vimeo)
            $table->integer('sort_order')->default(0);
            $table->timestamps();
            
            $table->foreign('gallery_id')->references('id')->on('galleries')->onDelete('cascade');
            $table->index(['gallery_id', 'sort_order']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gallery_items');
    }
};