<?php

namespace App\Http\Controllers\UserManagement;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\Teacher;
use Illuminate\Http\Request;

class UserManagementController extends Controller
{
    public function usersDashboard(Request $request) {
        $query = Teacher::query();

        // Search filter
        if ($request->filled('search')) {
            $query->where(function ($q) use ($request) {
                $q->where('name', 'like', '%' . $request->search . '%')
                  ->orWhere('email', 'like', '%' . $request->search . '%');
            });
        }

        // Role filter
        if ($request->filled('role') && $request->role !== 'all') {
            $query->where('role', $request->role);
        }

        $teachers = $query->paginate(10)->onEachSide(1)->withQueryString();

        return inertia('Admin/User/UserManage', [
            'teacherData' => UserResource::collection($teachers),
            'filters' => $request->only(['search', 'role']), // pass filters to frontend
        ]);
    }
}
