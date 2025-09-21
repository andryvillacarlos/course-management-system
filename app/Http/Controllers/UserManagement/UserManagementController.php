<?php

namespace App\Http\Controllers\UserManagement;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\Teacher;
use Illuminate\Http\Request;

class UserManagementController extends Controller
{
    public function usersDashboard(){
        
        return inertia('Admin/User/UserManage',[
            'teacherData' => UserResource::collection(Teacher::paginate(10)->onEachSide(1)), // Get the data of teacher with pagination
        ]);
    }
}
