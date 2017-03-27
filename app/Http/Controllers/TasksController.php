<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;

class TasksController extends Controller
{
    public function index()
    {
        $name = 'April';
        $tasks = Task::all();

        return view('tasks.index', compact('tasks','name'));
    }
    public function show($id)
    {
        $task = Task::find($id);

        return view('tasks.show', compact('task'));
    }
}
