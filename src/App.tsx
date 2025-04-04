import React, { useState} from 'react';
import { Toaster} from 'react-hot-toast';
import { Users, UserPlus, Trash2, Edit2, RefreshCw } from 'lucide-react';

import { User } from './types';
import { UserForm } from './components/UserForm';

/**
 * @author : sachini Apsara
 * @date : 2025-04-04
 * @Project: Sentura Technologies Interview Task user auth
 **/

function App() {

    const [showForm, setShowForm] = useState(false);
    const [editingUser, setEditingUser] = useState<User | null>(null);



    return (
        <div className="min-h-screen bg-gray-50">
            <Toaster position="top-right" />

            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center">
                            <Users className="h-8 w-8 text-blue-600 mr-2" />
                            <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
                        </div>
                        <div className="flex space-x-2">
                            <button
                                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                            >
                                <RefreshCw className="h-4 w-4 mr-2" />
                                Refresh
                            </button>
                            <button
                                onClick={() => setShowForm(true)}
                                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                            >
                                <UserPlus className="h-4 w-4 mr-2" />
                                Add User
                            </button>
                        </div>
                    </div>

                    {(showForm || editingUser) && (
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
                            <div className="bg-white rounded-lg p-6 max-w-md w-full">
                                <h2 className="text-lg font-medium mb-4">
                                    {editingUser ? 'Edit User' : 'Create New User'}
                                </h2>
                                <UserForm

                                    onCancel={() => {
                                        setShowForm(false);
                                        setEditingUser(null);
                                    }}
                                />
                            </div>
                        </div>
                    )}


                        <div className="flex justify-center items-center h-64">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                        </div>
                    ) : (
                        <div className="bg-white shadow overflow-hidden sm:rounded-md">
                            <ul className="divide-y divide-gray-200">

                                    <li  className="px-6 py-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                      <img

                                                        className="h-10 w-10 rounded-full"
                                                    />
                                                ) : (
                                                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-500 text-lg">

                            </span>
                                                    </div>
                                                )}
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900"></div>
                                                    <div className="text-sm text-gray-500"></div>
                                                </div>
                                            </div>
                                            <div className="flex space-x-2">
                                                <button

                                                    className="text-gray-400 hover:text-gray-500"
                                                >
                                                    <Edit2 className="h-5 w-5" />
                                                </button>
                                                <button
                                                    className="text-red-400 hover:text-red-500"
                                                >
                                                    <Trash2 className="h-5 w-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </li>

                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;