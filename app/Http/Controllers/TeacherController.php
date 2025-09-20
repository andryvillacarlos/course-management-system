<?php

namespace App\Http\Controllers;

use App\Http\Requests\TeacherStoreRequest;
use App\Models\Teacher;
use Illuminate\Http\Request;

class TeacherController extends Controller
{
    

    // Store

    public function storeTeacher(TeacherStoreRequest $request,Teacher $teacher){
         
         $validated = $request->validated();
         $isCreated = $teacher->create($validated);

         if($isCreated){
            return redirect()->route('admin.dashboard')->with('success','Teacher account created successfully');
         }

        return redirect()->back()->with('errors','Something went wrong');
  }
}
