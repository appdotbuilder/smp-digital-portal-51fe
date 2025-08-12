<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use App\Models\Event;
use App\Models\News;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display the home page.
     */
    public function index()
    {
        // Get featured news for hero section
        $heroNews = News::published()
            ->featured()
            ->latest('published_at')
            ->take(3)
            ->get();

        // Get latest news for news section
        $latestNews = News::published()
            ->latest('published_at')
            ->take(4)
            ->get();

        // Get important announcements
        $announcements = Announcement::active()
            ->pinned()
            ->orderBy('priority', 'desc')
            ->orderBy('created_at', 'desc')
            ->take(3)
            ->get();

        // Get upcoming events for calendar
        $upcomingEvents = Event::upcoming()
            ->take(5)
            ->get();

        return Inertia::render('welcome', [
            'heroNews' => $heroNews,
            'latestNews' => $latestNews,
            'announcements' => $announcements,
            'upcomingEvents' => $upcomingEvents,
        ]);
    }
}