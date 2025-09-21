<?php

namespace App\Http\Controllers\UserManagement;

use App\Http\Controllers\Controller;
use App\Http\Requests\TeacherStoreRequest;
use App\Models\Teacher;

class TeacherController extends Controller
{
   
      public function storeTeacher(TeacherStoreRequest $request,Teacher $teacher){
         
         $validated = $request->validated();
         $isCreated = $teacher->create($validated);

         if($isCreated){
            return redirect()->route('admin.dashboard')->with('success','Teacher account created successfully');
         }

        return redirect()->back()->with('errors','Something went wrong');
    }
}
