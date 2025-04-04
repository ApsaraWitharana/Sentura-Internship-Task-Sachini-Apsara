import { Save, UserPlus } from "lucide-react";
import { useState } from "react";
import { CreateUserPayload, User } from "../types.ts";

/**
 * @author : sachini Apsara
 * @date : 2025-04-04
 * @Project: Sentura Technologies Interview Task user auth
 **/

interface UserFormProps {
    user?: User;
    onSubmit: (data: CreateUserPayload) => void;
    onCancel: () => void;
}

export function UserForm({ user, onSubmit, onCancel }: UserFormProps) {
    const [formData] = useState<CreateUserPayload>({
        uid: user?.uid || "",
        name: user?.name || "",
        email: user?.email || "",
        given_name: user?.given_name || "",
        family_name: user?.family_name || "",
        picture: user?.picture || ""
    });


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };



    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* UID Field */}
            <div>
                <label className="block text-sm font-medium text-gray-700">UID</label>
                <input
                    type="text"
                    required
                    value={formData.uid}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>

            {/* Name Field */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    required
                    value={formData.name}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>

            {/* Email Field */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    required
                    value={formData.email}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>

            {/* Given Name */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Given Name</label>
                <input
                    type="text"
                    value={formData.given_name || ""}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>

            {/* Family Name */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Family Name</label>
                <input
                    type="text"
                    value={formData.family_name || ""}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>

            {/* Picture File Input */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Upload Picture</label>
                <input
                    type="file"
                    accept="image/*"

                    className="mt-1 block w-full"
                />

            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-2">
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                >
                    {user ? <Save className="w-4 h-4 mr-2" /> : <UserPlus className="w-4 h-4 mr-2" />}
                    {user ? "Update User" : "Create User"}
                </button>
            </div>
        </form>
    );
}
