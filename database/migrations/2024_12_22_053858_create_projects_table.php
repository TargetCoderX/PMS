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
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->foreignId('organization_id')->constrained('organizations')->onDelete('cascade');
            $table->string('name');
            $table->enum('status', ['active', 'completed', 'on-hold', 'archived'])->default('active');
            $table->enum('priority', ['low', 'medium', 'high', 'critical'])->default('medium');
            $table->integer('budget')->default(0);
            $table->foreignId('currency_id')->nullable()->constrained('currencies')->onDelete('cascade');
            $table->date('start_date');
            $table->date('end_date');
            $table->integer('duration')->comment('in hours');
            $table->enum('project_type', ['internal', 'client', 'R&D'])->default('internal');
            $table->enum('visiblity', ['public', 'private'])->default('private');
            $table->foreignId('created_by')->constrained('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
