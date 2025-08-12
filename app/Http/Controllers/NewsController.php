<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = News::published()->with('author');

        if ($request->filled('category')) {
            $query->byCategory($request->category);
        }

        if ($request->filled('search')) {
            $query->where(function ($q) use ($request) {
                $q->where('title', 'like', '%' . $request->search . '%')
                  ->orWhere('excerpt', 'like', '%' . $request->search . '%');
            });
        }

        $news = $query->latest('published_at')->paginate(12);

        return Inertia::render('news/index', [
            'news' => $news,
            'filters' => $request->only(['category', 'search']),
            'categories' => [
                'sekolah' => 'Sekolah',
                'pendidikan' => 'Pendidikan', 
                'prestasi' => 'Prestasi'
            ]
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(News $news)
    {
        if ($news->status !== 'published') {
            abort(404);
        }

        $news->load('author');

        // Get related news
        $relatedNews = News::published()
            ->where('id', '!=', $news->id)
            ->byCategory($news->category)
            ->latest('published_at')
            ->take(4)
            ->get();

        return Inertia::render('news/show', [
            'news' => $news,
            'relatedNews' => $relatedNews,
        ]);
    }
}