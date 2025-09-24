<?php

namespace App\Http\Controllers\UserManagement;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\Teacher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
        // Teacher data pagination
        $teachers = $query->paginate(10)->onEachSide(1)->withQueryString();
        // Role count
        $roleCount = (clone $query)->select('role',DB::raw('COUNT(*) as total'))
                           ->groupBy('role')
                           ->pluck('total','role');
        // Status count
        $statusCount = (clone $query)->select('status',DB::raw('COUNT(*) as total'))
                           ->groupBy('status')
                           ->pluck('total','status');
        // Total user count
        $totalUsers = (clone $query)->count();
        
        return inertia('Admin/User/UserManage', [
            'teacherData' => UserResource::collection($teachers),
            'filters' => $request->only(['search', 'role']), // pass filters to frontend
            'roleCount' => $roleCount,
            'statusCount' => $statusCount,
            'totalUsers' => $totalUsers,
        ]);
    }
}
